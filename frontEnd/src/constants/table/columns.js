export const atletaColumns = [
  { key: 'nombre', name: 'Nombre' },
  { key: 'cedula', name: 'Cédula' },
  { key: 'tlf', name: 'Telefono' },
  { key: 'lugar_nacimiento', name: 'Lugar de nacimiento' },
  { key: 'fecha_nacimiento', name: 'Fecha de nacimiento' },
  { key: 'posicion', name: 'Posición' },
  { key: 'estado', name: 'Status' }

]

export const userColumns = [
  { key: 'cedula', name: 'Cédula' },
  { key: 'name', name: 'Nombre' },
  { key: 'rol', name: 'Rol' }
]

export const representanteColumns = [
  { key: 'nombre', name: 'Nombre' },
  { key: 'cedula', name: 'Cédula' },
  { key: 'cedula_atleta', name: 'Cédula Atleta' },
  { key: 'sexo', name: 'Sexo' },
  { key: 'tlf', name: 'Telefono' },
  { key: 'correo', name: 'Correo' },
  { key: 'direccion', name: 'Dirección' },
  { key: 'rif', name: 'RIF' },
  { key: 'estatura', name: 'Estatura' }
]

export const lesionesColumns = [
  { key: 'fecha', name: 'Fecha' },
  { key: 'id_atleta', name: 'Cédula' },
  { key: 'nombre', name: 'Nombre' },
  { key: 'descripcion', name: 'Descripción' }
]

export const indicadoresColumns = [
  { key: 'clase', name: 'Clase' },
  { key: 'posicion', name: 'Posición' },
  { key: 'estadistica', name: 'Estadística' },
  { key: 'valor', name: 'Valor' }
]

export const fichaColumns = [
  { key: 'id_ficha', name: 'ID Ficha' },
  { key: 'id_atleta', name: 'Cedula' },
  { key: 'nombre', name: 'Nombre' },
  { key: 'fecha', name: 'Fecha' }
]

export const newDatosFichaColumns = [
  { key: 'descripcion', name: 'Descripción' },
  { key: 'valor', name: 'Valor' }
]

export const datosFichaColumns = [
  { key: 'id_ficha', name: 'ID Ficha' },
  { key: 'id_atleta', name: 'Cedula' },
  { key: 'nombre', name: 'Nombre' },
  { key: 'fecha', name: 'Fecha' },
  { key: 'posicion', name: 'Posición' },
  { key: 'clase', name: 'Clase' }
]

export const datosGeneralesColumns = [
  { key: 'id_ficha', name: 'ID Ficha' },
  { key: 'estatura_maxima', name: 'Estatura Máxima' },
  { key: 'percentil_talla', name: 'Percentil Talla' },
  { key: 'longitud_de_pie', name: 'Longitud de Pie' },
  { key: 'longitud_sentado', name: 'Longitud Sentado' },
  { key: 'envergadura', name: 'Envergadura' },
  { key: 'imc', name: 'IMC' },
  { key: 'peso_corporal', name: 'Peso' },
  { key: 'peso_ideal', name: 'Peso Ideal' },
  { key: 'percentil_de_peso', name: 'Percentil Peso' },
  { key: 'calorias_diarias', name: 'Calorias Diarias' }
]

export const perimetrosCorporalesColumns = [
  { key: 'id_ficha', name: 'ID Ficha' },
  { key: 'cabeza', name: 'Cabeza' },
  { key: 'cuello', name: 'Cuello' },
  { key: 'brazo_relajado', name: 'Brazo Relajado' },
  { key: 'brazo_contraido', name: 'Brazo Contraido' },
  { key: 'antebrazo', name: 'Antebrazo' },
  { key: 'muneca', name: 'Muñeca' },
  { key: 'torax', name: 'Tórax' },
  { key: 'espalda', name: 'Espalda' },
  { key: 'muslo_superior', name: 'Muslo superior' },
  { key: 'muslo_medio', name: 'Muslo medio' },
  { key: 'pierna', name: 'Pierna' },
  { key: 'tobillo', name: 'Tobillo' }
]

export const indiceCinturaCaderaColumns = [
  { key: 'id_ficha', name: 'ID Ficha' },
  { key: 'cintura', name: 'Cintura' },
  { key: 'cadera', name: 'Cadera' },
  { key: 'icc', name: 'ICC' }
]

export const indiceMasaCorporalColumns = [
  { key: 'id_ficha', name: 'ID Ficha' },
  { key: 'masa_grasa_corporal', name: 'Masa Grasa Corporal' },
  { key: 'masa_grasa_ideal', name: 'Masa Grasa Ideal' },
  { key: 'masa_magra_corporal', name: 'Masa Magra Corporal' },
  { key: 'masa_magra_ideal', name: 'Masa Magra Ideal' }
]

export const perfilesFotograficosColumns = [
  { key: 'id_ficha', name: 'ID Ficha' },
  { key: 'frente', name: 'Frente' },
  { key: 'perfil', name: 'Perfil' },
  { key: 'espalda', name: 'Espalda' }
]

export const hittingColumns = [
  { key: 'id', name: 'ID' },
  { key: 'agudeza_visual', name: 'Agudeza Visual' },
  { key: 'bat_speed', name: 'Velocidad de bateo' },
  { key: 'angle_attack', name: 'Ángulo de ataque' },
  { key: 'coord_dos_manos', name: 'Coordinación dos manos' },
  { key: 'ritmo_balance', name: 'Ritmo y balance' },
  { key: 'rec_zona_strike', name: 'Reconocimiento de zona de strike' },
  { key: 'rec_pitcheos', name: 'Reconocimiento de pitcheos' },
  { key: 'control_bate', name: 'Control de bate' },
  { key: 'ruta_del_bate', name: 'Ruta del bate' }
]

export const throwingColumns = [
  { key: 'id', name: 'ID' },
  { key: 'lanzamiento_primera', name: 'Lanzamiento a primera' },
  { key: 'lanzamiento_segunda', name: 'Lanzamiento a segunda' },
  { key: 'lanzamiento_tercera', name: 'Lanzamiento a tercera' },
  { key: 'lanzamiento_home', name: 'Lanzamiento a home' },
  { key: 'pop_time', name: 'Pop Time' },
  { key: 'fluidez_brazo', name: 'Fluidez de brazo' },
  { key: 'brazo_rapido', name: 'Brazo rápido' },
  { key: 'facilidad_movimiento', name: 'Facilidad de movimiento' },
  { key: 'linealidad_lanzamiento', name: 'Linealidad de lanzamiento' }
]

export const fieldingColumns = [
  { key: 'id', name: 'ID' },
  { key: 'getting_jump', name: 'Getting Jump' },
  { key: 'ruta', name: 'Ruta' },
  { key: 'alcance', name: 'Alcance' },
  { key: 'manos_suaves', name: 'Manos Suaves' },
  { key: 'control_cuerpo', name: 'Control de cuerpo' },
  { key: 'juego_de_pie', name: 'Juego de pie' },
  { key: 'anticipacion', name: 'Anticipación' },
  { key: 'energia', name: 'Energía' }
]

export const makeUpColumns = [
  { key: 'id', name: 'ID' },
  { key: 'actitud', name: 'Actitud' },
  { key: 'compromiso', name: 'Compromiso' },
  { key: 'responsabilidad', name: 'Responsabilidad' },
  { key: 'disciplina', name: 'Disciplina' }
]

export const pitchingColumns = [
  { key: 'id', name: 'ID' },
  { key: 'velocidad_recta', name: 'Velocidad de recta' },
  { key: 'velocidad_curva', name: 'Velocidad de curva' },
  { key: 'velocidad_slider', name: 'Velocidad de slider' },
  { key: 'velocidad_cambio', name: 'Velocidad de cambio' },
  { key: 'velocidad_cutter', name: 'Velocidad de cutter' }
]

export const runningColumns = [
  { key: 'id', name: 'ID' },
  { key: 'velocidad_60', name: 'Velocidad 60 yardas' },
  { key: 'velocidad_home_to_first', name: 'Velocidad de home a primera' }
]

export const usersColumns = [
  { key: 'cedula', name: 'ID' },
  { key: 'name', name: 'Nombre' },
  { key: 'username', name: 'Usuario' },
  { key: 'rol', name: 'Rol' }
]

export const registroEspecialColumns = [
  { key: 'cedula', name: 'Cédula' },
  { key: 'nombre', name: 'Nombre' },
  { key: 'fecha_evento', name: 'Fecha' },
  { key: 'descripcion', name: 'Descripción' }
]
