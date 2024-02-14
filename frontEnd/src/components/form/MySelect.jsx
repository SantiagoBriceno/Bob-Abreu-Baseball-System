import { Select } from '@chakra-ui/react'
const MySelect = ({ opt, ...prop }) => {
  console.log(opt)
  return (
    <Select>
      {opt.map((o, index) => (
        <option key={index} value={o.value}>{o.label}</option>
      ))}
    </Select>
  )
}

export default MySelect
