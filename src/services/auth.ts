import { IRegisForm } from '../context/base/model';
import { IUser } from '../model/user';

export const register = (payload: IRegisForm) => {
  const userData = localStorage.getItem('userData');
  let data: IUser[] = [];
  const id = Math.floor(Math.random() * 9999).toString();
  const { email, password } = payload;
  const newUser: IUser = {
    id, email, password,
  };
  if (!userData) {
    data.push(newUser);
  } else {
    data = JSON.parse(userData) as IUser[];
    const idx = data.findIndex((el: IUser) => el.email === newUser.email);
    if (idx > -1) {
      return Promise.reject('User existed!');
    } else {
      data.push(newUser);
    }
  }
  localStorage.setItem('userData', JSON.stringify(data));
  return Promise.resolve(true);
};

export const login = (payload: IRegisForm) => {
  const userData = localStorage.getItem('userData');
  let data: IUser[] = [];
  if (!userData) {
    return Promise.reject('Email or Password incorrect!');
  } else {
    data = JSON.parse(userData) as IUser[];
    const idx = data.findIndex((el: IUser) => el.email === payload.email && el.password === payload.password);
    if (idx === -1) {
      return Promise.reject('Email or Password incorrect!');
    } else {
      return Promise.resolve(data[idx]);
    }
  }
};
