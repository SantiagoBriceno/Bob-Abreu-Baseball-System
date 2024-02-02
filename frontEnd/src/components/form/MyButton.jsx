import { Button } from '@chakra-ui/react'
const MyButtonForm = ({ label, ...props }) => {
  return (
    <Button {...props}>{label}</Button>
  )
}

export default MyButtonForm
