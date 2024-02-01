export const validationInputRepresentante = ({ id, type, value, options = null }) => {
  switch (id) {
    case 'cedula':
      return { isInvalid: value.length < 7, message: 'La cédula debe tener al menos 7 caracteres', isSubmitted: false }
    case 'nombre':
      return { isInvalid: value.length < 3, message: 'El nombre debe tener al menos 3 caracteres', isSubmitted: false }
    case 'tlf':
      return { isInvalid: value.length < 11, message: 'El teléfono debe tener al menos 11 caracteres', isSubmitted: false }
    case 'rif':
      return { isInvalid: value.length < 3, message: 'El rif debe tener al menos 3 caracteres', isSubmitted: false }
    case 'estatura':
      return { isInvalid: value.length < 2, message: 'La estatura debe tener al menos 2 caracteres', isSubmitted: false }
    case 'email':
      return { isInvalid: value.length < 7, message: 'El email debe tener al menos 7 caracteres', isSubmitted: false }
    case 'direccion':
      return { isInvalid: value.length < 7, message: 'La dirección debe tener al menos 7 caracteres', isSubmitted: false }
    case 'cedula_atleta':
      return { isInvalid: value.length < 7, message: 'La cédula del atleta debe tener al menos 7 caracteres', isSubmitted: false }
    default:
      return { isInvalid: false, message: '', isSubmitted: false }
  }
}
