export const validationInputLogin = ({ id, type, value, options = null }) => {
  switch (id) {
    case 'users':
      return { isInvalid: value.length < 7, message: 'El email debe tener al menos 7 caracteres', isSubmitted: false }
    case 'password':
      return { isInvalid: value.length < 7, message: 'La contraseña debe tener al menos 7 caracteres', isSubmitted: false }
    default:
      return { isInvalid: false, message: '', isSubmitted: false }
  }
}

export const validationInputUser = ({ id, type, value, options = null }) => {
  switch (id) {
    case 'nombre':
      return { isInvalid: value.length < 3, message: 'El nombre debe tener al menos 3 caracteres', isSubmitted: false }
    case 'username':
      return { isInvalid: value.length < 7, message: 'El usuario debe tener al menos 7 caracteres', isSubmitted: false }
    case 'password':
      return { isInvalid: value.length < 7, message: 'La contraseña debe tener al menos 7 caracteres', isSubmitted: false }
    case 'rol':
      return { isInvalid: value.length < 3, message: 'El rol debe tener al menos 3 caracteres', isSubmitted: false }
    case 'cedula':
      return { isInvalid: value.length < 7, message: 'La cédula debe tener al menos 7 caracteres', isSubmitted: false }

    default:
      return { isInvalid: false, message: '', isSubmitted: false }
  }
}

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
    case 'correo':
      return { isInvalid: value.length < 7, message: 'El email debe tener al menos 7 caracteres', isSubmitted: false }
    case 'direccion':
      return { isInvalid: value.length < 7, message: 'La dirección debe tener al menos 7 caracteres', isSubmitted: false }
    case 'cedula_atleta':
      return { isInvalid: value.length < 7, message: 'La cédula del atleta debe tener al menos 7 caracteres', isSubmitted: false }
    default:
      return { isInvalid: false, message: '', isSubmitted: false }
  }
}

export const validationInputRegistroEspecial = ({ id, type, value, options = null }) => {
  switch (id) {
    case 'cedula_atleta':
      return { isInvalid: value.length < 7, message: 'La cédula del atleta debe tener al menos 7 caracteres', isSubmitted: false }
    case 'fecha_evento':
      return { isInvalid: value.length < 7, message: 'La fecha del evento debe tener al menos 7 caracteres', isSubmitted: false }
    case 'descripcion':
      return { isInvalid: value.length < 3, message: 'La descripción debe tener al menos 3 caracteres', isSubmitted: false }
    default:
      return { isInvalid: false, message: '', isSubmitted: false }
  }
}

export const validationInputAtleta = ({ id, type, value, options = null }) => {
  switch (id) {
    case 'cedula':
      return { isInvalid: value.length < 7, message: 'La cédula debe tener al menos 7 caracteres', isSubmitted: false }
    case 'nombre':
      return { isInvalid: value.length < 3, message: 'El nombre debe tener al menos 3 caracteres', isSubmitted: false }
    case 'tlf':
      return { isInvalid: value.length < 11, message: 'El teléfono debe tener al menos 11 caracteres', isSubmitted: false }
    case 'lugar_nacimiento':
      return { isInvalid: value.length < 3, message: 'El lugar de nacimiento debe tener al menos 3 caracteres', isSubmitted: false }
    case 'fecha_nacimiento':
      return { isInvalid: value.length < 7, message: 'La fecha de nacimiento debe tener al menos 7 caracteres', isSubmitted: false }
    case 'correo':
      return { isInvalid: value.length < 7, message: 'El correo debe tener al menos 7 caracteres', isSubmitted: false }
    case 'posicion':
      return { isInvalid: value.length < 3, message: 'La posición debe tener al menos 3 caracteres', isSubmitted: false }
    case 'estado':
      return { isInvalid: value.length < 3, message: 'El estado debe tener al menos 3 caracteres', isSubmitted: false }
    case 'foto':
      return { isInvalid: value.length < 3, message: 'La foto debe tener al menos 3 caracteres', isSubmitted: false }
    default:
      return { isInvalid: false, message: '', isSubmitted: false }
  }
}

export const validationInputHitting = ({ id, type, value, options = null }) => {
  switch (id) {
    case 'id_atleta':
      return { isInvalid: value.length < 3, message: 'El id del atleta debe tener al menos 3 caracteres', isSubmitted: false }
    case 'agudeza_visual':
      return { isInvalid: value.length < 3, message: 'La agudeza visual debe tener al menos 3 caracteres', isSubmitted: false }
    case 'bat_speed':
      return { isInvalid: value.length < 3, message: 'El bat speed debe tener al menos 3 caracteres', isSubmitted: false }
    case 'coord_dos_manos':
      return { isInvalid: value.length < 3, message: 'La coordinación de dos manos debe tener al menos 3 caracteres', isSubmitted: false }
    case 'ritmo_balance':
      return { isInvalid: value.length < 3, message: 'El ritmo y balance debe tener al menos 3 caracteres', isSubmitted: false }
    case 'rec_zona_strike':
      return { isInvalid: value.length < 3, message: 'El reconocimiento de la zona de strike debe tener al menos 3 caracteres', isSubmitted: false }
    case 'rec_pitcheos':
      return { isInvalid: value.length < 3, message: 'El reconocimiento de los pitcheos debe tener al menos 3 caracteres', isSubmitted: false }
    case 'control_bate':
      return { isInvalid: value.length < 3, message: 'El control del bate debe tener al menos 3 caracteres', isSubmitted: false }
    case 'ruta_del_bate':
      return { isInvalid: value.length < 3, message: 'La ruta del bate debe tener al menos 3 caracteres', isSubmitted: false }
    default:
      return { isInvalid: false, message: '', isSubmitted: false }
  }
}

export const validationInputThrowing = ({ id, type, value, options = null }) => {
  switch (id) {
    case 'id_atleta':
      return { isInvalid: value.length < 3, message: 'El id del atleta debe tener al menos 3 caracteres', isSubmitted: false }
    case 'lanzamiento_primera':
      return { isInvalid: value.length < 3, message: 'El lanzamiento a primera debe tener al menos 3 caracteres', isSubmitted: false }
    case 'lanzamiento_segunda':
      return { isInvalid: value.length < 3, message: 'El lanzamiento a segunda debe tener al menos 3 caracteres', isSubmitted: false }
    case 'lanzamiento_tercera':
      return { isInvalid: value.length < 3, message: 'El lanzamiento a tercera debe tener al menos 3 caracteres', isSubmitted: false }
    case 'lanzamiento_home':
      return { isInvalid: value.length < 3, message: 'El lanzamiento a home debe tener al menos 3 caracteres', isSubmitted: false }
    case 'pop_time':
      return { isInvalid: value.length < 3, message: 'El pop time debe tener al menos 3 caracteres', isSubmitted: false }
    default:
      return { isInvalid: false, message: '', isSubmitted: false }
  }
}

export const validationInputFielding = ({ id, type, value, options = null }) => {
  switch (id) {
    case 'id_atleta':
      return { isInvalid: value.length < 3, message: 'El id del atleta debe tener al menos 3 caracteres', isSubmitted: false }
    case 'getting_jump':
      return { isInvalid: value.length < 1, message: 'El getting jump no debe estar vacío', isSubmitted: false }
    case 'ruta':
      return { isInvalid: value.length < 1, message: 'La ruta del bate no debe estar vacío', isSubmitted: false }
    case 'alcance':
      return { isInvalid: value.length < 1, message: 'El alcance no debe estar vacío', isSubmitted: false }
    case 'manos_suaves':
      return { isInvalid: value.length < 1, message: 'Las estadistica de manos suaves no debe estar vacío', isSubmitted: false }
    case 'control_cuerpo':
      return { isInvalid: value.length < 1, message: 'El control del cuerpo no debe estar vacío', isSubmitted: false }
    case 'juego_de_pie':
      return { isInvalid: value.length < 1, message: 'El juego de pie no debe estar vacío', isSubmitted: false }
    case 'anticipacion':
      return { isInvalid: value.length < 1, message: 'La anticipación no debe estar vacío', isSubmitted: false }
    case 'energia':
      return { isInvalid: value.length < 1, message: 'La energía no debe estar vacío', isSubmitted: false }
    default:
      return { isInvalid: false, message: '', isSubmitted: false }
  }
}

export const validationInputRunning = ({ id, type, value, options = null }) => {
  switch (id) {
    case 'id_atleta':
      return { isInvalid: value.length < 3, message: 'El id del atleta debe tener al menos 3 caracteres', isSubmitted: false }
    case 'sesenta_yarda':
      return { isInvalid: value.length < 3, message: 'La sesenta yarda debe tener al menos 3 caracteres', isSubmitted: false }
    case 'home_to_first':
      return { isInvalid: value.length < 3, message: 'El home to first debe tener al menos 3 caracteres', isSubmitted: false }
    default:
      return { isInvalid: false, message: '', isSubmitted: false }
  }
}

export const validationInputPitching = ({ id, type, value, options = null }) => {
  switch (id) {
    case 'id_atleta':
      return { isInvalid: value.length < 3, message: 'El id del atleta debe tener al menos 3 caracteres', isSubmitted: false }
    case 'velocidad_recta':
      return { isInvalid: value.length < 3, message: 'La velocidad de la recta debe tener al menos 3 caracteres', isSubmitted: false }
    case 'velocidad_curva':
      return { isInvalid: value.length < 3, message: 'La velocidad de la curva debe tener al menos 3 caracteres', isSubmitted: false }
    case 'velocidad_slider':
      return { isInvalid: value.length < 3, message: 'La velocidad del slider debe tener al menos 3 caracteres', isSubmitted: false }
    case 'velocidad_cambio':
      return { isInvalid: value.length < 3, message: 'La velocidad del cambio debe tener al menos 3 caracteres', isSubmitted: false }
    default:
      return { isInvalid: false, message: '', isSubmitted: false }
  }
}

export const validationInputMakeUp = ({ id, type, value, options = null }) => {
  switch (id) {
    case 'id_atleta':
      return { isInvalid: value.length < 3, message: 'El id del atleta debe tener al menos 3 caracteres', isSubmitted: false }
    case 'actitud':
      return { isInvalid: value.length < 3, message: 'La actitud debe tener al menos 3 caracteres', isSubmitted: false }
    case 'compromiso':
      return { isInvalid: value.length < 3, message: 'El compromiso debe tener al menos 3 caracteres', isSubmitted: false }
    case 'responsabilidad':
      return { isInvalid: value.length < 3, message: 'La responsabilidad debe tener al menos 3 caracteres', isSubmitted: false }
    case 'disciplina':
      return { isInvalid: value.length < 3, message: 'La disciplina debe tener al menos 3 caracteres', isSubmitted: false }
    default:
      return { isInvalid: false, message: '', isSubmitted: false }
  }
}

export const validationInputLesion = ({ id, type, value, options = null }) => {
  switch (id) {
    case 'id_atleta':
      return { isInvalid: value.length < 3, message: 'El id del atleta debe tener al menos 3 caracteres', isSubmitted: false }
    case 'fecha':
      return { isInvalid: value.length < 3, message: 'La fecha de la lesión debe tener al menos 3 caracteres', isSubmitted: false }
    case 'descripcion':
      return { isInvalid: value.length < 3, message: 'La descripción debe tener al menos 3 caracteres', isSubmitted: false }
    default:
      return { isInvalid: false, message: '', isSubmitted: false }
  }
}
