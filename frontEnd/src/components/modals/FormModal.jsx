import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react'

const FormModal = ({ isOpen, onClose, children, btn = null }) => {
  return (
    <>
      <Modal size='2xl' isOpen={isOpen} onClose={onClose} close>
        <ModalOverlay />
        <ModalContent bg='white'>
          <ModalHeader />
          <ModalCloseButton />
          <ModalBody>
            {children}
          </ModalBody>

          <ModalFooter>
            {btn &&
              <Button bg='primary.100' _hover={{ bg: 'primary.70' }} mr={3} onClick={onClose}>
                Close
              </Button>}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default FormModal
