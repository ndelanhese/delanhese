import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  HStack,
  Spacer
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'
import { TranslateButton } from './TranslateButton'
import '../i18n'
import { useTranslation } from 'react-i18next'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props
  const {t} = useTranslation()

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        flexWrap="wrap"
        alignContent="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" mb={["10", "4"]} letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >

          <LinkItem href="/works" path={path} target="" >
          {t('works')}
          </LinkItem>
          
          <LinkItem
            target="_blank"
            href="https://github.com/ndelanhese/delanhese"
            path={path}
            display="inline-flex"
            text="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            {t('source')}
          </LinkItem>
        </Stack>

<Spacer/>

        <Box flex={1}  >
         <HStack gap={[0
         ,2]} >
         <TranslateButton/>
          <ThemeToggleButton />
         

          <Box pr={3} display={{ base: 'inline-block' , md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>{t('aboutMenu')}</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>{t('works')}</MenuItem>
                </NextLink>
              
                <MenuItem
                  as={Link}
                  href="https://github.com/ndelanhese/delanhese"
                >
                  {t('source')}
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          </HStack>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
