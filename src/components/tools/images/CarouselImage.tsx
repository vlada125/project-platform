
// Components
import {FC, ReactNode, useState, useEffect, Children, cloneElement} from 'react'
// Types
import {CarouselImageProps} from './types'
const CarouselImage: FC<CarouselImageProps> = ({children}) => {
  const [carouselItem, setCarouselItem] = useState<ReactNode[] | null | undefined>([])
  useEffect(() => {
    setCarouselItem(
      Children.map(children, (child: any) => {
        return cloneElement(child, {
          style: {
            height: '100%',
            minWidth: '100%',
            manWidth: '100%',
          }
        })
      })
    ) 
  }, [children])
  return (
    <div>
      <div>
        <div>{carouselItem}</div>
      </div>
    </div>
  )
}

export default CarouselImage