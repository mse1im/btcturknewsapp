import { FC } from 'react';

type ImageProps = {
    src: string;
    alt?: string;
    width: number;
    height: number;
}

const Picture:FC<ImageProps> = ({ src,alt,width,height }) => {
    return <img src={src} alt={alt} width={`${width}%`} height={height} />
}
export default Picture;