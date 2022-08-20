export interface IUser {
  id: string;
  email: string;
  password?: string;
}

export interface FormValidator {
  field: string;
  fullField: string;
  message: string;
  trigger: string;
  type: string;
  validator: Function;
}