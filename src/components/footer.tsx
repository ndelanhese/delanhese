import { Box } from '@chakra-ui/react'
import '../i18n'
import { useTranslation } from 'react-i18next'
const Footer = () => {
  const {t} = useTranslation()
  return (
    <Box textAlign="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Nathan Delanhese. {t('footer')}
    </Box>
  )
}

export default Footer
