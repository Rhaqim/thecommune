import { Box, Container, useColorModeValue } from '@chakra-ui/react'

//  Components
import Layout from '../components/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

export default function Home() {
  return (
    <Layout>
      {/* <Container> */}
      <Box
          borderRadius="lg"
          bg={useColorModeValue('#75339c', 'whiteAlpha.200')}
          p={3}
          align="center"
          color="white"
          mb={6}
        >
          <h1>
            Hello World, I am learning Frontend Development from Craftzdog.
          </h1>
        </Box>
        <Section>
          <Paragraph>
            I am a full stack developer with a passion for building beautiful,
            responsive websites. I have a background in the medical field and
            have a passion for learning new technologies.
          </Paragraph>
        </Section>
      {/* </Container> */}
    </Layout>
  )
}
