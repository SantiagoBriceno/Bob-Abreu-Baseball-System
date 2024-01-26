/* eslint-disable camelcase */
// Estructuras de datos para las entidades de la base de datos

const representante = {
  cedula: '',
  nombre: '',
  tlf: '',
  rif: '',
  estatura: '',
  email: '',
  direccion: '',
  cedula_atleta: '',
  id_auditoria: ''
}

const registro_especial = {
  id: '',
  cedula_atleta: '',
  fecha_evento: '',
  descripcion: '',
  id_auditoria: ''
}

const atleta = {
  cedula: '',
  nombre: '',
  tlf: '',
  lugar_nacimiento: '',
  fecha_nacimiento: '',
  email: '',
  posicion: '',
  estado: '',
  foto: '',
  id_auditoria: ''

}

const indicadores = {
  id: '',
  clase: '',
  posicion: '',
  estadistica: '',
  valor: '',
  id_auditoria: ''
}

const auditoria = {
  id: '',
  create_in: '',
  id_autor: '',
  descripcion: ''
}

const ficha_antropometrica = {
  id_ficha: '',
  id_atleta: '',
  id_auditoria: ''
}

const datos_generales = {
  id: '',
  id_ficha: '',
  id_atleta: '',
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
  percentil_de_peso: '',
  id_auditoria: ''
}

const perimetros_corporales = {
  id: '',
  id_ficha: '',
  id_atleta: '',
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
  tobillo: '',
  id_auditoria: ''
}

const indices_cintura_cadera = {
  id: '',
  id_ficha: '',
  id_atleta: '',
  cintura: '',
  cadera: '',
  relacion_cintura_cadera: '',
  id_auditoria: ''
}

const indice_Masa_corporal = {
  id: '',
  id_ficha: '',
  id_atleta: '',
  masa_grasa_corporal: '',
  masa_grasa_ideal: '',
  masa_magra_corporal: '',
  masa_magra_ideal: '',
  id_auditoria: ''
}

const perfiles_fotograficos = {
  id: '',
  id_ficha: '',
  id_atleta: '',
  frente: '',
  lateral: '',
  espalda: '',
  id_auditoria: ''
}

const estadisticas = {
  id_stat: '',
  id_atleta: '',
  id_auditoria: ''
}

const hitting = {
  id: '',
  id_stat: '',
  agudeza_visual: '',
  bat_speed: '',
  angle_attack: '',
  coord_dos_manos: '',
  ritmo_balance: '',
  rec_zona_strike: '',
  rec_pitcheos: '',
  control_bate: '',
  rutal_del_bate: '',
  id_auditoria: ''
}

const throwing = {
  id: '',
  id_stat: '',
  lanzamiento_primera: '',
  lanzamiento_segunda: '',
  lanzamiento_tercera: '',
  lanzamiento_home: '',
  pop_time: '',
  id_auditoria: ''
}

const make_up = {
  id: '',
  id_stat: '',
  actitud: '',
  compromiso: '',
  responsabilidad: '',
  disciplina: '',
  id_auditoria: ''
}

const fielding = {
  id: '',
  id_stat: '',
  getting_jump: '',
  ruta: '',
  alcance: '',
  manos_suaves: '',
  control_cuerpo: '',
  juego_de_pie: '',
  anticipacion: '',
  energia: '',
  id_auditoria: ''
}

const pitching = {
  id: '',
  id_stat: '',
  velocidad_recta: '',
  velocidad_curva: '',
  velocidad_slider: '',
  velocidad_cambio: '',
  id_auditoria: ''
}

export default {
  representante,
  registro_especial,
  atleta,
  indicadores,
  auditoria,
  ficha_antropometrica,
  datos_generales,
  perimetros_corporales,
  indices_cintura_cadera,
  indice_Masa_corporal,
  perfiles_fotograficos,
  estadisticas,
  hitting,
  throwing,
  make_up,
  fielding,
  pitching
}
