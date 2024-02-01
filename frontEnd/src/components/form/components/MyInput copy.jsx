import { Input } from '@chakra-ui/react'
const MyInput = ({ label, w = '', ...props }) => {
  return (
    <Input w={w} {...props} />
  )
}

export default MyInput
