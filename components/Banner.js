import Head from 'next/head'
import NavBar from './NavBar'
import { Box } from '@chakra-ui/react'

const Banner = ({children, router}) => {
    return (
        <Box as='main' pb={8}>
            <Head>
                <title>Banner</title>
            </Head>
            <NavBar path={router}/>
            {children}
        </Box>
    )
}

export default Banner