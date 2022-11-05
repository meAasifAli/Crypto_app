import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import ErrorComponent from "./ErrorComponent"
import axios from "axios"
import { Container, Heading, HStack, VStack ,Text,Image} from '@chakra-ui/react';
const server = `https://api.coingecko.com/api/v3`

const Exchanges = () => {

  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);

      setExchanges(data)
      setLoading(false)
      
    }
    catch (error) {
        setLoading(false);
        setError(true)
      }};
      fetchExchanges();
    
  }, []);
  if(error) return <ErrorComponent msg = {'Error while fetching exchanges'}/>
  return (
    <Container maxW={'container.xl'} >
      {loading ? <Loader /> :
        <>
          <HStack wrap={'wrap'} justifyContent='space-evenly'>
            {exchanges.map((i) => (
              <ExchangeCard
              key={i.id}
              name={i.name}
              img={i.image}
              rank={i.trust_score_rank}
              url={i.url}
              />
              
            ))}
          </HStack>
        </>
      }
    </Container>
  )
}

export default Exchanges

const ExchangeCard = ({name,img,rank,url})=> {
     return (
      <a href={url} target='blank'>
        <VStack w={'52'} shadow='lg' p={'8'} borderRadius='lg' transition={'all 0.3s'} 
        m='4'
        css={{
          "&:hover":{
              transform:"scale(1.1)"
          }
        }}
        >
          <Image src={img} w='10' h='10' objectFit='contain' alt='error'/>
          <Heading size={'md'} noOfLines='1'>{rank}</Heading>
          <Text noOfLines={1}>{name}</Text>
        </VStack>
      </a>
     )
}