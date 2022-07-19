import { Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '../src/components/layouts/article'
import Section from '../src/components/section'
import Head from 'next/head'

const Works = () => (
  <Layout title="Projetos">

<Head>Nathan Delanhese | Projetos</Head>

    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          {/* <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </WorkGridItem> */}
        </Section>
       
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../src/components/chakra'
