export const MyToast = ({ toast, title, description, status }) => {
  switch (status) {
    case 200:
      status = 'success'
      break
    case 201:
      status = 'success'
      break
    case 400:
      status = 'error'
      break
    case 406:
      status = 'warning'
      break
    case 404:
      status = 'error'
      break
    case 500:
      status = 'error'
      break
    default:
      status = 'info'
  }
  toast({
    title,
    description,
    status,
    duration: 3000,
    isClosable: true,
    position: 'top-right',
    onCloseComplete: status === 'success' ? () => window.location.reload() : () => {}
  })
}
