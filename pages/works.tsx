import { Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '../src/components/layouts/article'
import Section from '../src/components/section'
import Head from 'next/head'
import '../src/i18n'
import { useTranslation } from 'react-i18next'



export default function Works() {
  const {t} = useTranslation()
  return(
 
    <Layout title={t('works')}>

    <Head>Nathan Delanhese | Projetos</Head>
    
        <Container>
          <Heading as="h3" fontSize={20} mb={4}>
          {t('works')}:
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

}
  
 
 



export { getServerSideProps } from '../src/components/chakra'
