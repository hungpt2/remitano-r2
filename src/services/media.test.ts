import { 
  getListMedia,
  shareMedia,
} from './media';

describe('media service test', () => {
  it('should call set to push media', () => {
    const spy = jest.spyOn(Storage.prototype, 'getItem');
    spy.mockReturnValue('');

    return shareMedia({
      url: 'url',
      author: 'author',
      description: 'string',
      title: 'string',
    }).then((result) => {
      expect(result).toBe(true);
    });
  })

  it('should NOT set to media', () => {
    const expected = 'Media shared!';
    const spy = jest.spyOn(Storage.prototype, 'getItem');
    spy.mockReturnValue(JSON.stringify([{
      url: 'url',
      author: 'author',
      description: 'string',
      title: 'string',
    }]));

    return shareMedia({
      url: 'url',
      author: 'author',
      description: 'string',
      title: 'string',
    }).catch((result) => {
      expect(result).toBe(expected);
    });
  })

  it('should call set other data to media', () => {
    const spy = jest.spyOn(Storage.prototype, 'getItem');
    spy.mockReturnValue(JSON.stringify([{
      url: 'url2',
      author: 'author',
      description: 'string',
      title: 'string',
    }]));

    return shareMedia({
      url: 'url',
      author: 'author',
      description: 'string',
      title: 'string',
    }).then((result) => {
      expect(result).toBe(true);
    });
  })

  it('should return list media with item', async() => {
    const expected = [{
      url: 'url',
      author: 'author',
      description: 'string',
      title: 'string',
    }];
    
    const spy = jest.spyOn(Storage.prototype, 'getItem');
    spy.mockReturnValue(JSON.stringify(expected));
    return getListMedia().then((result) => {
      expect(result).toEqual(expected);
    });
  })
});