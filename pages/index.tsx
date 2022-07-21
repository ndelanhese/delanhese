import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  HStack,
  Center
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'
import Head from 'next/head'
import Section from '../src/components/section'
import Paragraph from '../src/components/paragraph'
import { BioSection, BioYear } from '../src/components/bio'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'
import '../src/i18n'
import { useTranslation } from 'react-i18next'
import Tilt from 'react-parallax-tilt'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

export default function Home() {
  const { t } = useTranslation()

  return (
    <Container>
      <Head>
        <title>Nathan Delanhese | {t('Home Page')}</title>
      </Head>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        {t('hello')}
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Link href="https://github.com/ndelanhese" target="_blank">
            <Heading as="h2" variant="page-title">
              <Button bg='transparent' textDecoration='none' fontSize='35' ml='-18px' transition={'0.4s'} _hover={{background: 'trasparente', fontSize: '39'}}>
              Nathan Delanhese
              </Button>
            </Heading>
          </Link>
          <p>{t('position')} (React JS / TypeScript)</p>
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
              _hover={{ transform: "scale(1.3, 1.3)", transition: "0.5s" }}
              transition='0.5s'
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

      <Section>
        <Tilt>
          <HStack gap={3}>
            <Heading as="h3" variant="section-title">
              {t('about')}
            </Heading>
          </HStack>
          <Paragraph>{t('paragraphOne')}</Paragraph>
          <Paragraph>{t('paragraphTwo')}</Paragraph>
        </Tilt>
        <Box alignContent="center" mt={10}>
          <NextLink href="/works" passHref scroll={false}>
            <Center>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                {t('myPortfolio')}
              </Button>
            </Center>
          </NextLink>
        </Box>
      </Section>

      <Tilt>
        <Section>
          <Heading as="h3" variant="section-title">
            {t('bio')}
          </Heading>
          <BioSection>
            <BioYear>2002</BioYear>
            {t('born')}
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            {t('highSchool')}
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            {t('collegeOne')}
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            {t('collegeTwo')}
          </BioSection>
          <BioSection>
            <BioYear>{t('toNow')}</BioYear>
            {t('now')}
          </BioSection>
        </Section>
      </Tilt>
      <Section>
        <Heading as="h3" variant="section-title">
          {t('onWeb')}
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
                leftIcon={<AiFillInstagram />}
              >
                @nathan.delanhese
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://linkedin.com/in/nathandelanhese"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<AiFillLinkedin />}
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
                leftIcon={<CgWebsite />}
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
