import React, { useState } from 'react';
import { Loading, Button, Form, Input, Notification } from 'element-react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../services/auth';
import { validateEmail, validatePassword } from '../../utils/auth';
import { FormValidator } from '../../model/user';

export const Register = (): JSX.Element => {

  let navigate = useNavigate();
  const onRedirect = (url: string) => {
    navigate(url);
  };

  const formRef: React.RefObject<HTMLFormElement> = React.createRef();
  const [loading, setLoading] = useState(false);
    const [formUser, setFormUser] = useState({
    email: '',
    password: '',
    confirm: '',
  });

  const validateConfirmPassword = (rule: FormValidator, value: string, callback: Function) => {
    const isValid = formUser.password === value;
    callback(!isValid ? rule.message : undefined);
  };

  const [formRules] = useState({
    email: [
      { required: true, message: 'Please input email', trigger: 'blur' },
      { validator: validateEmail, message: 'Wrong email format', trigger: 'blur' },
    ],
    password: [
      { required: true, message: 'Please input password', trigger: 'blur' },
      { validator: validatePassword, message: 'At least 8 characters includes string and number', trigger: 'blur' },
    ],
    confirm: [
      { required: true, message: 'Please input confirm password', trigger: 'blur' },
      { validator: validatePassword, message: 'At least 8 characters includes string and number', trigger: 'blur' },
      { validator: validateConfirmPassword, message: 'Password is NOT the same', trigger: 'blur' },
    ]
  });

  const onChange = (key: string, value: string) => {
    setFormUser({
      ...formUser,
      [key]: value,
    });
  };

  const onRegister = () => {
      if (loading) {
      return;
    }
    formRef.current?.validate((isValid: boolean) => {
      if (isValid) {
        const { email, password } = formUser;
        const regisData = { email, password };
        setLoading(true);
        register(regisData).then(() => {
          setLoading(false);
          setFormUser({
            email: '',
            password: '',
            confirm: '',
          });
          onRedirect('/login');
          Notification.success({
            type: 'success',
            title: 'Success',
            message: 'Registered User!'
          });
        }, (errMessage) => {
          setLoading(false);
          Notification.error({
            title: 'Error',
            message: errMessage
          });
        });
      }
    });
  };

  return (
    <div className='max-w-xl mt-16 mx-auto bg-slate-200 rounded drop-shadow-md p-5 my-5'>
      <h2 className="mb-5">Register</h2>
      <Loading loading={loading}>
        <Form ref={formRef} model={formUser} labelWidth='150' rules={formRules}>
          <Form.Item label='Email' prop='email'>
            <Input value={formUser.email} onChange={(value: string) => onChange('email', value)}></Input>
          </Form.Item>
          <Form.Item label='Password' prop='password'>
            <Input className='w-full' type='password' value={formUser.password} onChange={(value: string) => onChange('password', value)}></Input>
          </Form.Item>
          <Form.Item label='Confirm Password' prop='confirm'>
            <Input className='w-full' type='password' value={formUser.confirm} onChange={(value: string) => onChange('confirm', value)}></Input>
          </Form.Item>
          <div className='flex justify-between items-center'>
            <Button onClick={() => onRedirect('/')}>Cancel</Button>
            <Button type='primary' onClick={() => onRegister()}>Register</Button>
          </div>
        </Form>
      </Loading>
    </div>
  )
};
