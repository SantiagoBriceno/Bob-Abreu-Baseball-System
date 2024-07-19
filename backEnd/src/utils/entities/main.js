/* eslint-disable camelcase */
// Estructuras de datos para las entidades de la base de datos

export const user = {
  cedula: '',
  username: '',
  name: '',
  password: '',
  rol: ''
}

export const representante = {
  cedula: '',
  nombre: '',
  tlf: '',
  rif: '',
  estatura: '',
  sexo: '',
  correo: '',
  direccion: '',
  cedula_atleta: ''
}

export const registro_especial = {
  cedula_atleta: '',
  fecha_evento: '',
  descripcion: ''
}

export const atleta = {
  cedula: '',
  nombre: '',
  tlf: '',
  lugar_nacimiento: '',
  fecha_nacimiento: '',
  hitting: '',
  posicion: '',
  estado: '',
  foto: ''
}

export const indicadores = {
  id: '',
  clase: '',
  posicion: '',
  estadistica: '',
  valor: ''
}

export const auditoria = {
  id: '',
  create_in: '',
  id_autor: '',
  descripcion: ''
}

export const ficha_antropometrica = {
  id_atleta: ''
}

export const datos_generales = {
  estatura_maxima: '',
  percentil_talla: '',
  longitud_de_pie: '',
  longitud_sentado: '',
  envergadura: '',
  imc: '',
  imc_ideal: '',
  tasa_metabolica_basal: '',
  calorias_necesarias: '',
  peso_corporal: '',
  peso_ideal: '',
  percentil_de_peso: ''
}

export const perimetros_corporales = {
  cabeza: '',
  cuello: '',
  brazo_relajado: '',
  brazo_contraido: '',
  antebrazo: '',
  muneca: '',
  torax: '',
  espalda: '',
  muslo_superior: '',
  muslo_medio: '',
  pierna: '',
  tobillo: ''
}

export const indices_cintura_cadera = {
  cintura: '',
  cadera: '',
  relacion_cintura_cadera: ''
}

export const indice_Masa_corporal = {
  masa_grasa_corporal: '',
  masa_grasa_ideal: '',
  masa_magra_corporal: '',
  masa_magra_ideal: ''
}

export const perfiles_fotograficos = {
  frente: '',
  lateral: '',
  espalda: ''
}

export const hitting = {
  id_atleta: '',
  agudeza_visual: '',
  bat_speed: '',
  angle_attack: '',
  coord_dos_manos: '',
  ritmo_balance: '',
  rec_zona_strike: '',
  rec_pitcheos: '',
  control_bate: '',
  rutal_del_bate: '',
  fecha_evaluacion: ''
}

export const throwing = {
  id_atleta: '',
  lanzamiento_primera: '',
  lanzamiento_segunda: '',
  lanzamiento_tercera: '',
  lanzamiento_home: '',
  pop_time: '',
  fecha_evaluacion: ''
}

export const make_up = {
  id_atleta: '',
  actitud: '',
  compromiso: '',
  responsabilidad: '',
  disciplina: '',
  fecha_evaluacion: ''
}

export const fielding = {
  id_atleta: '',
  getting_jump: '',
  ruta: '',
  alcance: '',
  manos_suaves: '',
  control_cuerpo: '',
  juego_de_pie: '',
  anticipacion: '',
  energia: '',
  fecha_evaluacion: ''
}

export const pitching = {
  id_atleta: '',
  velocidad_recta: '',
  velocidad_curva: '',
  velocidad_slider: '',
  velocidad_cambio: '',
  fecha_evaluacion: ''
}

export const running = {
  id_atleta: '',
  velocidad_sesenta: '',
  velocidad_home_to_first: '',
  fecha_evaluacion: ''
}

export const lesiones = {
  id_atleta: '',
  fecha: '',
  descripcion: ''
}
