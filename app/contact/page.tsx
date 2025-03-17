"use client"

import Socials from '@/components/Socials'
import { Button, Field, Flex, Input, Stack, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import { useForm } from "react-hook-form"

type Props = {}

interface FormValues {
  name: string
  email: string
  message: string
} 

export default function Page({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <Flex direction={{ base: 'column', md: 'row' }} alignItems='center' justifyContent='center' p={{ base: '2em', md: '3em' }} pt={{ base: '9em', md: '7em' }} gap='2em'>
      <Flex flexDir='column' textAlign='center' gap='1em' w={{ base: '100%', md: '50%' }}>
        <Text as='h1'>CONTACT</Text>
        <Text className='tracking-wide'>We appreciate your interest and are excited to hear from you. Our team will review your message and get back to you as soon as possible.</Text>

        <Flex flexDir='column'>
          <Flex gap='1.2em' flexDir='column' mb='1.2em'>
            <div>
              <Text as='h3' fontWeight='bold' fontSize='1.3em'>Phone</Text>
              <Text>+234</Text>
            </div>
            <div>
              <Text as='h3' fontWeight='bold' fontSize='1.3em'>Email</Text>
              <a href='mailto:officialherbode@gmail.com' className='hover:text-white text-primary bg-transparent'>officialherbode@gmail.com</a>
            </div>
          </Flex>
          <Socials containerStyles="flex gap-6 mx-auto" iconStyles='w-9 h-9 rounded-full flex justify-center items-center text-white hover:bg-accent hover:border hover:border-white hover:text-primary transition-all duration-500'/>
        </Flex>
      </Flex>

      <Flex flexDir='column' w={{ base: '100%', md: '50%' }} textAlign='center' gap='3.5em' shadow='md' p='1.5em'>
        <form onSubmit={onSubmit}>
          <Text as='h2' textTransform='capitalize' mb='.5em'>Get in touch</Text>
          <Stack gap='4' align='flex-start'>
            <Field.Root required>
              <Field.Label>
                Name <Field.RequiredIndicator />
              </Field.Label>
              <Input {...register("name", { required: true })} placeholder="Your Name" variant="flushed" borderBottom='1px solid white' color='primary'/>
            </Field.Root>

            <Field.Root required>
              <Field.Label>
                Email <Field.RequiredIndicator />
              </Field.Label>
              <Input {...register("email", { required: true })} placeholder="your.email@example.com" variant="flushed" borderBottom='1px solid white'/>
            </Field.Root>

            <Field.Root required>
              <Field.Label>
                Message <Field.RequiredIndicator />
              </Field.Label>
              <Textarea {...register("message", { required: true })} placeholder="Message Body" variant="flushed" borderBottom='1px solid white' resize='none'/>
            </Field.Root>

            <Button type="submit" p='1em 2em' mt='.5em'>Submit</Button>
          </Stack>
        </form>
      </Flex>
    </Flex>
  )
}
