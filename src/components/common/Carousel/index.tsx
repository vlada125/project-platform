// components/Carousel.tsx
// import the hook and options type
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { PropsWithChildren } from "react";

// Define the props
type Props = {
  className?: string,
  showControls?: boolean
} & PropsWithChildren & EmblaOptionsType;

export const Carousel = ({ children, className, showControls, ...options }: Props) => {
  // 1. useEmblaCarousel returns a emblaRef and we must attach the ref to a container.
  // EmblaCarousel will use that ref as basis for swipe and other functionality.
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

    return (
      <>
        <div className={'flex items-center'}>
            <div className={`overflow-hidden ${className}`} ref={emblaRef}>
                <div className="flex">{children}</div>
            </div>
        </div>
        <div className='absolute top-1/2 translate-y-[-50%] right-2' onClick={() =>emblaApi?.scrollNext()}>
            <img src="/images/icons/ep_d-arrow-left.svg" alt="" className='cursor-pointer' width={46} height={46} />
        </div>
      </>
  );
};
