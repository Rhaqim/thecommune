import Head from 'next/head'
import NavBar from './NavBar'
import { Box } from '@chakra-ui/react'

const Banner = ({children}) => {
    return (
        <Box as='main' pb={8}>
            <Head>
                <title>Banner</title>
            </Head>
            <NavBar />
            {children}
        </Box>
    )
}

export default Banner