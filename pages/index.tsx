import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  HStack
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'
import Head from 'next/head'
import Section from '../src/components/section'
import Paragraph from '../src/components/paragraph'
import { BioSection, BioYear } from '../src/components/bio'
import {AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'
import {CgWebsite} from 'react-icons/cg'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

export default function Home() {
  

  return (
    <Container>
      <Head>
        <title>Nathan Delanhese | Home Page</title>
      </Head>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a brazilian front-end developer!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            <Link href="https://github.com/ndelanhese" target="_blank">
              Nathan Delanhese
            </Link>
          </Heading>
          <p>Front-end developer (React JS / TypeScript)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Link href="https://github.com/ndelanhese" target="_blank">
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/delanhese.png"
                alt="Profile image"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Link>
        </Box>
      </Box>

      <Section >
        <HStack gap={3}>
          <Heading as="h3" variant="section-title">
            Sobre mim
          </Heading>
          <Heading as="h3" variant="section-title" pb="4px">
            About me
          </Heading>
        </HStack>
        <Paragraph>
          {/* Delanhese, is a yung front-end developer, actualy her is working, 
      drink coffee and study. When not doing one of these functions,
       her he rides a bicycle or does some physical exercise. */}
          Delanhese, é um jovem desenvolvedor front-end que atualmente está
          trabalhando, tomando café e estudando. Quando não está fazendo uma
          dessas funções, ele anda de bicicleta ou faz algum exercício físico.
        </Paragraph>
        <Paragraph>
          Começou a estudar programação ainda no ensino técnico, utilizando como
          linguagem de programação principal o JAVA, quando entrou na faculdade,
          cursando Análise e Desenvolvimento de Sistemas migrou para a web
          uilizando o JavaScript como base para as aplicações. E atualmente,
          trabalhando como junior na area, está focado em Next JS + React JS.
        </Paragraph>
        <Box alignContent="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section  >
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Nasceu em Alto Piquiri, Paraná - Brasil.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Terminou o ensino médio integrado com Tecnologia da Informação, no Instituto Federal do Paraná (IFPR).
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Iniciou sua primeira faculdade, Análise e Desenvolvimento de Sistemas No Instituto Federal do Paraná (IFPR), curso 
          nível 5 no MEC.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Ainda no ano de 2021, iniciou sua segunda faculdade, desta vez, Gestão de Cooperativas na Uiniversidade Norte do Paraná (UNOPAR).
        </BioSection>
        <BioSection>
          <BioYear>2022 até agora</BioYear>
          Trabalha como dev front-end (React JS & Next JS)
        </BioSection>
      </Section>

      {/* <Section >
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link>
          , Playing Drums,{' '}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Photography
          </Link>
          , Leica, Machine Learning
        </Paragraph>
      </Section> */}

      <Section >
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/ndelanhese" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @ndelanhese
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/nathan.delanhese" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<AiFillInstagram/>}
              >
                
                @nathan.delanhese
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://linkedin.com/in/nathandelanhese" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<AiFillLinkedin/>}
              >
                @nathan.delanhese
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://delanhese.tk" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<CgWebsite/>}
              >
                delanhese.tk
              </Button>
            </Link>
          </ListItem>
        </List>

        
      </Section>
    </Container>
  )
}

export { getServerSideProps } from '../src/components/chakra'
