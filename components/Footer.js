import React from 'react'
import {Avatar, Box, Stack, VStack,Text} from "@chakra-ui/react"
import im from "../assets/asif2.jpg"


const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} color='whiteAlpha.700' minH={'48'} px='16' py={['8','16']}>
        <Stack dir={['column','row']} h='full' alignItem='center'>
            <VStack w={'full'} alignItems={['center','flex-start']}>
                <Text fontWeight={'bold'}>About Us</Text>
                <Text size={'sm'} letterSpacing='widest' textAlign={['center','left']}>We are the best Crypto traders in india,We provide guidancea at very cheap price</Text>


            </VStack>
            <VStack alignItems={['center','flex-end']}>
                <Avatar boxSize={'28'} mt={['4','0']} src={im}/>
                <Text>Our founder</Text>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer