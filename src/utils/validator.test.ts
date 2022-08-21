import { 
  validateEmail,
  validatePassword,
  validateYoutubeURL,
} from './validator';

describe('utils test', () => {
  
  describe('validate email', () => {
    it('show error with blank value', () => {
      const expected = 'Email invalid!';
      // fake data
      const rule = {
        message: 'Email invalid!',
      };
      const value = '';
      let result = '';
      const callback = (value: string) => {
        result = value;
      };

      validateEmail(rule, value, callback);
      expect(result).toBe(expected);
    })

    it('show error with wrong type email value', () => {
      const expected = 'Email invalid!';
      // fake data
      const rule = {
        message: 'Email invalid!',
      };
      const value = 'wrong@email.type';
      let result = '';
      const callback = (value: string) => {
        result = value;
      };

      validateEmail(rule, value, callback);
      expect(result).toBe(expected);
    })

    it('show pass with invalid email value', () => {
      const expected = undefined;
      // fake data
      const rule = {
        message: 'Email invalid!',
      };
      const value = 'test01@test.com';
      let result = '';
      const callback = (value: string) => {
        result = value;
      };

      validateEmail(rule, value, callback);
      expect(result).toBe(expected);
    })
  })

  describe('validate password', () => {
    it('show error with blank value', () => {
      const expected = 'Password invalid!';
      // fake data
      const rule = {
        message: 'Password invalid!',
      };
      const value = '';
      let result = '';
      const callback = (value: string) => {
        result = value;
      };

      validatePassword(rule, value, callback);
      expect(result).toBe(expected);
    })

    it('show error with wrong type password value', () => {
      const expected = 'Password invalid!';
      // fake data
      const rule = {
        message: 'Password invalid!',
      };
      const value = '1';
      let result = '';
      const callback = (value: string) => {
        result = value;
      };

      validatePassword(rule, value, callback);
      expect(result).toBe(expected);
    })

    it('show pass with invalid password value', () => {
      const expected = undefined;
      // fake data
      const rule = {
        message: 'Password invalid!',
      };
      const value = 'Aa123123';
      let result = '';
      const callback = (value: string) => {
        result = value;
      };

      validatePassword(rule, value, callback);
      expect(result).toBe(expected);
    })
  })

  describe('validate youtube url', () => {
    it('show error with blank value', () => {
      const expected = 'URL invalid!';
      // fake data
      const rule = {
        message: 'URL invalid!',
      };
      const value = '';
      let result = '';
      const callback = (value: string) => {
        result = value;
      };

      validateYoutubeURL(rule, value, callback);
      expect(result).toBe(expected);
    })

    it('show error with wrong type password value', () => {
      const expected = 'URL invalid!';
      // fake data
      const rule = {
        message: 'URL invalid!',
      };
      const value = '1';
      let result = '';
      const callback = (value: string) => {
        result = value;
      };

      validateYoutubeURL(rule, value, callback);
      expect(result).toBe(expected);
    })

    it('show pass with invalid password value', () => {
      const expected = undefined;
      // fake data
      const rule = {
        message: 'URL invalid!',
      };
      const value = 'https://youtu.be/Xqq8FKgmeCs';
      let result = '';
      const callback = (value: string) => {
        result = value;
      };

      validateYoutubeURL(rule, value, callback);
      expect(result).toBe(expected);
    })
  })

})