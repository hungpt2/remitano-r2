import { useEffect, useState } from 'react';
import { useBaseState } from '../../context/base';
import { getListMedia } from '../../services/media';
import { IMedia } from '../../context/base/model';
import { Loading, Notification } from 'element-react';

export const ListMedia = (props: any): JSX.Element => {
  const { mediaPayload } = useBaseState();

  const [listMedia, setListMedia] = useState<IMedia[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getListMedia().then((media: IMedia[]) => {
      setLoading(false);
      setListMedia(media);
    }, (errMessage: string) => {
      setLoading(false);
      Notification.error({
        title: 'Error',
        message: errMessage
      });
    });
  }, [mediaPayload]);

  return (
    <div className='w-full p-12 container mx-auto' data-testid='list'>
      <Loading loading={loading} { ...props } >
        <>{
          listMedia.length > 0
          ? listMedia.map((media: IMedia, index: number) => (
              <MediaItem key={media.url} mediaData={media} index={index} />
            ))
            : <div className='w-full text-center'>
                No Media Data
              </div>
        }</>
      </Loading>
    </div>
  )
};

interface IMediaItemProps {
  mediaData: IMedia;
  index: number;
}

const MediaItem = (props: IMediaItemProps): JSX.Element => {
  return (
    <div className='w-full mb-8' data-testid={`list-item-${props.index}`}>
      <div className='flex justify-start'>
        <video width='640' height='480' controls src={props.mediaData.url} className='min-w-640' />
        <div className='ml-4'>
          <h1 className='mb-2 font-bold text-red-600 text-xl'>{ props.mediaData.url }</h1>
          <div className='mb-4 text-base'>Shared by: <strong>{ props.mediaData.author }</strong></div>
          <div className='font-bold text-sm'>Description:</div>
          <div className='text-sm'>{ props.mediaData.description }</div>
        </div>
      </div>
    </div>
  )
};
