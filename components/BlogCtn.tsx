"use client"

import { Flex, useBreakpointValue } from "@chakra-ui/react"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export default function BlogCtn({ children }: Props) {
  const width = useBreakpointValue({ base: "100%", md: "60%" })

  return (
    <Flex justifyContent="space-between" padding="3em" paddingTop="8em" flexDir="column" width={width} mx="auto">
      {children}
    </Flex>
  )
}
