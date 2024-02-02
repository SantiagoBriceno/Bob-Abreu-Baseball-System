import { Input } from '@chakra-ui/react'
const MyInput = ({ label, w = '100%', ...props }) => {
  return (
    <Input w={w} {...props} />
  )
}

export default MyInput
