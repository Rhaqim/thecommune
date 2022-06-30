import { motion } from 'framer-motion'
import Head from 'next/head'
// import { GridItemStyle } from '../grid-item'
// import { Image } from '@chakra-ui/react'
import Image from 'next/image'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 }
}

const Layout = ({ children, title }) => (
  <motion.article
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ duration: 0.4, type: 'easeInOut' }}
    style={{ position: 'relative' }}
  >
    <>
      {title && (
        <Head>
          <title>
            {title} - Rhaqim
          </title>
        </Head>
      )}
      <Image src="/header.jpg" alt="header" height={550} width={1500} />
      {children}
      {/* <GridItemStyle /> */}
    </>
  </motion.article>
)

export default Layout