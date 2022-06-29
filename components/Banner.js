import Head from 'next/head'
import NavBar from './NavBar'
import { Box, Container } from '@chakra-ui/react'

const Banner = ({ children, router }) => {
    return (
        <Box as='main' pb={8}>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>The Commune - Review Hub</title>
            </Head>
            <NavBar path={router} />
            <Container maxW={'-moz-fit-content'} pt={'5.5rem'}>
                {children}
            </Container>
        </Box>
    )
}

export default Banner