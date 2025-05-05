"use client"

import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '@/components/Card'

export default function App() {
  const [images, setImages] = useState([])
  const [profileImage, setProfileImage] = useState('')

  useEffect(() => {
    const randomPage = Math.floor(Math.random() * 100) + 1

    axios 
      .get(`https://picsum.photos/v2/list?page=${randomPage}&limit=3`)
      .then((res => setImages(res.data)))

    axios.get('https://randomuser.me/api/').then((res) => {
      const imageUrl = res.data.results[0].picture.large
      setProfileImage(imageUrl)
    })
  }, [])

  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-4'>
      <Card profileImage={profileImage} title='Gallery from API' description='Images fetched from a free image API' images={images}/>
    </div>
  )
}