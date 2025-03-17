"use client"

import { Flex, Text, useBreakpointValue } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <Flex flexDir='column' width={useBreakpointValue({base: '90%', md:'50%'})} alignItems='center' justifyContent='center' mx='auto' py='8em' gap='3em'>
        <Image src='/About.webp' alt='About Herbode' width={1000} height={1000}/>
        <h2>ABOUT US</h2>
        <Flex flexDirection='column' gap='2em'>
          <Text className='text-justify'>Herbode is a dynamic women-only NGO dedicated to empowering and uplifting women from all walks of life. Our mission is to create a nurturing and inclusive space where women can flourish in their personal growth, ignite their passion for social justice, and prioritize their self-care and wellness.</Text>

          <Text className='text-justify'>For women who aspire to embark on a journey of self-discovery and development, Herbode offers a wealth of resources and insights. Our content is designed to inspire and educate, touching upon topics such as personal growth, social justice, and activism. We believe that every woman has the potential to make a meaningful impact on the world, and we’re here to provide the guidance and support to help them achieve their goals.</Text>

          <Text className='text-justify'>At Herbode, we celebrate the strength and resilience of women by sharing inspirational stories and conducting insightful interviews with experts in various fields. We aim to foster a tight-knit community where women can connect, share their experiences, and find solace in a safe and supportive environment.</Text>

          <Text className='text-justify'>Join us at Herbode and be a part of a thriving community of women who are committed to their own growth, the pursuit of social justice, and the practice of self-care. Together, we can create a brighter future for women everywhere.</Text>
        </Flex>
    </Flex>
  )
}