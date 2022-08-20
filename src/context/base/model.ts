import { IUser } from "../../model/user";

export interface IRegisForm {
  email: string;
  password: string;
}

export interface IMedia {
  url: string;
  title: string;
  description: string;
  author: string;
}

export interface BaseState {
  loading: boolean;
  userData: IUser;
  isAuthenticated: boolean;
  media: IMedia[];
  mediaPayload: any; // filter from server-side
};

export interface BaseAction {
  type?: string;
  prop: keyof BaseState;
  payload: any;
}
