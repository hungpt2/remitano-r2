import { 
  register,
  login,
} from './auth';

describe('auth service test', () => {
  it('should NOT register with data', () => {
    const expected = 'User existed!';
    const spy = jest.spyOn(Storage.prototype, 'getItem');
    spy.mockReturnValue(JSON.stringify([{
      id: 'id',
      email: 'email',
      password: 'password'
    }]));

    return register({
      email: 'email',
      password: 'password'
    }).catch((result) => {
      expect(result).toBe(expected);
    });    
  })

  it('should register with data', () => {
    const expected = 'email2';
    const spy = jest.spyOn(Storage.prototype, 'getItem');
    spy.mockReturnValue(JSON.stringify([{
      id: 'id',
      email: 'email',
      password: 'password'
    }]));

    return register({
      email: 'email2',
      password: 'password'
    }).catch((result) => {
      expect(result.email).toBe(expected);
    });    
  })

  it('should register without data', () => {
    const expected = 'email2';
    const spy = jest.spyOn(Storage.prototype, 'getItem');
    spy.mockReturnValue('');

    return register({
      email: 'email2',
      password: 'password'
    }).catch((result) => {
      expect(result.email).toBe(expected);
    });    
  })

  it('should NOT login with data', () => {
    const expected = 'Email or Password incorrect!';
    const spy = jest.spyOn(Storage.prototype, 'getItem');
    spy.mockReturnValue(JSON.stringify([{
      id: 'id',
      email: 'email',
      password: 'password'
    }]));

    return login({
      email: 'email2',
      password: 'password'
    }).catch((result) => {
      expect(result).toBe(expected);
    });    
  })

  it('should NOT login without data', () => {
    const expected = 'Email or Password incorrect!';
    const spy = jest.spyOn(Storage.prototype, 'getItem');
    spy.mockReturnValue('');

    return login({
      email: 'email2',
      password: 'password'
    }).catch((result) => {
      expect(result).toBe(expected);
    });    
  })

  it('should login', () => {
    const expected = {
      id: 'id',
      email: 'email',
      password: 'password'
    };
    const spy = jest.spyOn(Storage.prototype, 'getItem');
    spy.mockReturnValue(JSON.stringify([{
      id: 'id',
      email: 'email',
      password: 'password'
    }]));

    return login({
      email: 'email',
      password: 'password'
    }).catch((result) => {
      expect(result).toEqual(expected);
    });    
  })
});