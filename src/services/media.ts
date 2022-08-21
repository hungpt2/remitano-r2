import { IMedia } from "../context/base/model";

export const shareMedia = (media: IMedia) => {
  const mediaData = localStorage.getItem('media');
  let data: IMedia[] = [];
  if (!mediaData) {
    data.push(media);
  } else {
    data = JSON.parse(mediaData) as IMedia[];
    const idx = data.findIndex((el: IMedia) => el.url === media.url);
    if (idx > -1) {
      return Promise.reject('Media shared!');
    } else {
      data.push(media);
    }
  }
  localStorage.setItem('media', JSON.stringify(data));
  return Promise.resolve(true);
};

export const getListMedia = (): Promise<IMedia[]> => {
  const mediaData = localStorage.getItem('media');
  let data: IMedia[] = [];
  if (mediaData) {
    data = JSON.parse(mediaData) as IMedia[];
  }
  const mediaParse: IMedia[] = [];
  data.forEach((data: IMedia) => {
    mediaParse.push({
      ...data,
      title: 'string',
      description: 'string',
    });
  });
  return Promise.resolve(mediaParse);
};
