"use client"

import { Button, Flex, Span, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div
      className="relative w-full h-[auto] md:h-[100vh] pb-[2em] md:pb-[.5em] text-center flex flex-col items-center font-center justify-center text-primary bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Hero.webp')" }}
    >
      <Flex flexDir='column' width={useBreakpointValue({base: '90%', md: '50%'})} gap='1em' shadow='sm' background="linear-gradient(135deg, #618361, white, #618361)" padding='1.5em' mt={useBreakpointValue({base: '8em', md:'6em'})}>
        <h1 className="text-5xl font-bold drop-shadow-lg z-30">For <Span fontStyle='italic'>women</Span>, by <Span fontStyle='italic'>women</Span>, and with <Span fontStyle='italic'>women</Span></h1>
        <div>
          <p>"The connections between and among women are the most feared, the most problematic, and the most potentially transforming force on the planet."</p>
          <Text fontWeight='bold' fontStyle='italic'>Adrienne Rich</Text>
        </div>

        <Flex justifyContent='center' alignItems='center' gap={useBreakpointValue({base:'1em', md:'3em'})} flexDir={useBreakpointValue({base: 'column', md:'row'})}>
          <Button p='1em' _hover={{bg: 'black', transform: 'scale(1.05)', transition: "all 0.3s ease-in-out"}}>Read our Blog</Button>
          <Button p='1em' _hover={{bg: 'black', transform: 'scale(1.05)', transition: "all 0.3s ease-in-out"}}>Join us</Button>
        </Flex>
      </Flex>
    </div>
  );
}
