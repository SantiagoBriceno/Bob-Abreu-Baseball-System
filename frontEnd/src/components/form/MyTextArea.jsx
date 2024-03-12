import { Textarea, Text } from '@chakra-ui/react'

const MyTextArea = ({ ...props }) => {
  return (
    <>
      <Text>{props.label}</Text>
      <Textarea
        {...props}
      />
    </>
  )
}

export default MyTextArea
