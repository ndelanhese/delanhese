import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box alignContent="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Nathan Delanhese. All Rights Reserved.
    </Box>
  )
}

export default Footer