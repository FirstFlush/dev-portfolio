import Image, { ImageProps } from "next/image"
import clsx from "clsx"

const TiltedImage = ({ 
    src, 
    alt, 
    sizes = "(min-width: 1024px) 32rem, 20rem", 
    className, 
    ...props 
}: ImageProps) => {
    return (
        <Image
            src={src}
            alt={alt}
            sizes={sizes}
            className={clsx(
                "aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800",
                className
            )}
            {...props}
        />
    )
}

export default TiltedImage;