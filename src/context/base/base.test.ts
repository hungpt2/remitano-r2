import { 
  userReducer,
} from './index';

describe('utils test', () => {
  it('should return new state', () => {
    const expected = {
      loading: true,
      userData: {
        email: '',
        id: '',
      },
      isAuthenticated: false,
      media: [],
      mediaPayload: {},
    };
    const oldState = {
      loading: false,
      userData: {
        email: '',
        id: '',
      },
      isAuthenticated: false,
      media: [],
      mediaPayload: {},
    };
    const result = userReducer(oldState, {
      prop: 'loading',
      payload: true
    });
    expect(result).toStrictEqual(expected);
  })
})