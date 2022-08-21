import { FormValidator } from "../model/user";

export const validateEmail = (rule: FormValidator, value: string, callback: Function) => {
  const isValid = String(value)
    .toLowerCase()
    .match(
      /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    );
  callback(!isValid ? rule.message : undefined);
};

export const validatePassword = (rule: FormValidator, value: string, callback: Function) => {
  const isValid = String(value)
    .match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    );
  callback(!isValid ? rule.message : undefined);
};

export const validateYoutubeURL = (rule: FormValidator, value: string, callback: Function) => {
  const isValid = String(value)
    .toLowerCase()
    .match(
      /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/
    );
  callback(!isValid ? rule.message : undefined);
};
