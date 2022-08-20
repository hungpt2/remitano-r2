import React, { useState } from 'react';
import { Loading, Button, Form, Input, Notification } from 'element-react';
import { useNavigate } from 'react-router-dom';
import { validateEmail, validatePassword } from '../../utils/auth';
import { useBaseDispatch } from '../../context/base';
import { IUser } from '../../model/user';
import { login } from '../../services/auth';

export const Login = (): JSX.Element => {
  const baseDispatch = useBaseDispatch();

  let navigate = useNavigate();
  const onRedirect = (url: string) => {
    navigate(url);
  };

  const formRef: React.RefObject<HTMLFormElement> = React.createRef();
  const [loading, setLoading] = useState(false);
  const [formUser, setFormUser] = useState({
    email: '',
    password: '',
  });

  const [formRules] = useState({
    email: [
      { required: true, message: 'Please input email', trigger: 'blur' },
      { validator: validateEmail, message: 'Wrong email format', trigger: 'blur' },
    ],
    password: [
      { required: true, message: 'Please input password', trigger: 'blur' },
      { validator: validatePassword, message: 'At least 8 characters includes string and number', trigger: 'blur' },
    ]
  });

  const onChange = (key: string, value: string) => {
    setFormUser({
      ...formUser,
      [key]: value,
    });
  };

  const onLogin = () => {
    if (loading) {
    return;
  }
  formRef.current?.validate((isValid: boolean) => {
    if (isValid) {
      setLoading(true);
      login(formUser).then((userData: IUser) => {
        setLoading(false);
        setFormUser({
          email: '',
          password: '',
        });
        baseDispatch({ prop: 'userData', payload: userData });
        baseDispatch({ prop: 'isAuthenticated', payload: true });
        onRedirect('/home');
        Notification({
          type: 'success',
          title: 'Success',
          message: 'User logged in!'
        });
      }, (errMessage: string) => {
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
      <h2 className="mb-5">Login</h2>
      <Loading loading={loading}>
        <Form ref={formRef} model={formUser} labelWidth='150' rules={formRules}>
          <Form.Item label='Email' prop='email'>
            <Input value={formUser.email} onChange={(value: string) => onChange('email', value)}></Input>
          </Form.Item>
          <Form.Item label='Password' prop='password'>
            <Input className='w-full' type='password' value={formUser.password} onChange={(value: string) => onChange('password', value)}></Input>
          </Form.Item>
          <div className='flex justify-between items-center'>
            <Button onClick={() => onRedirect('/')}>Back to Dashboard</Button>
            <Button type='primary' onClick={() => onLogin()}>Login</Button>
          </div>
        </Form>
      </Loading>
    </div>
  )
};
