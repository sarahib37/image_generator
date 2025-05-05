import { ImageData } from './type'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination';
import Image from 'next/image';


type Props = {
    images: ImageData[]
}

export default function ImageSlider({images}: Props) {
  return (
    <div className='w-full h-full'>
        <Swiper modules={[Navigation, Pagination]} spaceBetween={20} slidesPerView={1} navigation pagination={{clickable: true}} loop={true}>
            {images.map((img) => {
               return( 
                    <SwiperSlide key={img.id}>
                        <Image src={img.download_url} alt='Slide' width={1500} height={1500} unoptimized className='w-full h-[60vh] object-cover rounded'/>
                    </SwiperSlide>
            )})}
        </Swiper>
    </div>
  )
}