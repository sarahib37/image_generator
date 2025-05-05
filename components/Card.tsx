"use client"

import { Button, Flex } from '@chakra-ui/react'
import { ImageData } from './type'
import ImageSlider from './ImageSlider'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Image from 'next/image'

type Props = {
    profileImage: string
    title: string
    description: string
    images: ImageData[]
}

export default function Card({profileImage, title, description, images}: Props) {
  const [generatedImage, setGeneratedImage] = useState(images)

  useEffect(() => {
    setGeneratedImage(images)
  }, [images])

  function newImages(){
    const randomPage = Math.floor(Math.random() * 100) + 1

    axios 
      .get(`https://picsum.photos/v2/list?page=${randomPage}&limit=3`)
      .then((res => setGeneratedImage(res.data)))
  }

  return (
    <Flex flexDirection='column' width='max' backgroundColor='white' shadow='xl' rounded='lg' overflow='hidden' mx='auto'>
        <div className='flex items-center p-4'>
          {profileImage && <Image src={profileImage} alt='profile image' width={48} height={48} className='rounded-full shadow-lg mr-4' />}
          <div>
            <h2 className='text-lg font-semibold'>{title}</h2>
            <p className='text-sm text-gray-500'>{description}</p>
          </div>
        </div>
        {generatedImage.length > 0 ? <ImageSlider images={generatedImage}/> : <p>Loading...</p>}

        <Button onClick={newImages} my='1em' p='1em' mx='auto' transition='all 0.8s ease' fontWeight='bold' _hover={{bg: 'blue.600', transform: 'scale(1.05)', boxShadow: 'lg'}}>Refresh Images</Button>
    </Flex>
  )
}