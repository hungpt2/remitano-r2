import React, { useState } from 'react';
import DashboardLayout from '../../layout/Dashboard';
import { Loading, Button, Form, Input, Notification } from 'element-react';
import { useNavigate } from 'react-router-dom';
import { validateYoutubeURL } from '../../utils/validator';
import { shareMedia } from '../../services/media';
import { useBaseState, useBaseDispatch } from '../../context/base';

export const Share = (props: any): JSX.Element => {
  const baseDispatch = useBaseDispatch();
  const { userData } = useBaseState();

  let navigate = useNavigate();
  const onRedirect = (url: string) => {
    navigate(url);
  };

  const formRef: React.RefObject<HTMLFormElement> = React.createRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    url: '',
  });

  const [formRules] = useState({
    url: [
      { required: true, message: 'Please input youtube url', trigger: 'blur' },
      { validator: validateYoutubeURL, message: 'Wrong url format', trigger: 'blur' },
    ]
  });

  const onChange = (key: string, value: React.SyntheticEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  const onShare = () => {
    formRef.current?.validate((isValid: boolean) => {
      if (isValid) {
        setLoading(true);
        // fetch(`http://www.youtube.com/oembed?url=${form.url}&format=json`, { method: 'GET', redirect: 'follow'})
        //   .then((response) => {
        //     console.log(response);
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   })
        //   .finally((data: any) => {
        //     console.log(data);
        //   });
        shareMedia({
          url: form.url,
          author: userData.email,
          title: 'Title',
          description: 'Description',
        }).then(() => {
          setLoading(false);
          setForm({
            url: '',
          });
          baseDispatch({ prop: 'mediaPayload', payload: {} });
          onRedirect('/home');
          Notification({
            type: 'success',
            title: 'Success',
            message: 'Shared Media!'
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
    <DashboardLayout>
      <div className='max-w-xl mt-32 mx-auto bg-slate-200 rounded drop-shadow-md p-5'>
        <h2 className="mb-5">Share a youtube movie</h2>
        <Loading loading={loading} { ...props }>
          <Form {...props} ref={formRef} model={form} labelWidth='150' rules={formRules}>
            <Form.Item {...props} label='Youtube URL' prop='url'>
              <Input value={form.url} onChange={(value: React.SyntheticEvent<HTMLInputElement>) => onChange('url', value)}></Input>
            </Form.Item>
            <div className='flex justify-between items-center'>
              <Button {...props} onClick={() => onRedirect('/home')}>Back To Home</Button>
              <Button {...props} type='primary' onClick={() => onShare()}>Share</Button>
            </div>
          </Form>
        </Loading>
      </div>
    </DashboardLayout>
  )
};
