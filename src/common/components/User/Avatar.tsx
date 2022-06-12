import { getRandomColorURL } from '@common/utils/colors';
import { getInitials } from '@common/utils/getInitials';
import Image, { ImageProps } from 'next/image';

export type AvatarProps = Partial<Pick<ImageProps, "alt" | "src" | "priority">> & {
    size?: "sm" | "md" | "lg" | "xl";
}



export const Avatar: React.FC<AvatarProps> = ({ alt, src, priority, size = "md" }) => {
    const twSize = size === "sm" ? "w-12" : size === "md" ? "w-16" : size === "lg" ? "w-20" : size === "xl" ? "w-24" : "w-14";
    return (
        <div className='flex items-center'>
            <div className={`block relative aspect-square overflow-hidden rounded-full ${twSize}`}>
                {
                    src ? (
                        <Image
                            alt={alt}
                            src={src}
                            layout='fill'
                            objectFit='cover'
                            priority={priority}
                            placeholder='blur'
                            blurDataURL={getRandomColorURL()}
                        />
                    ) : (
                        <div className={`flex items-center justify-center bg-neutral-800 text-neutral-50 h-full`}>
                            <span>{getInitials(alt)}</span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}