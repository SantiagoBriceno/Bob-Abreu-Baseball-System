export const atletaColumns = [
  { key: 'nombre', name: 'Nombre' },
  { key: 'cedula', name: 'Cédula' },
  { key: 'tlf', name: 'Teléfono' },
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
  { key: 'tlf', name: 'Teléfono' },
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
  { key: 'id_atleta', name: 'Cédula' },
  { key: 'nombre', name: 'Nombre' },
  { key: 'fecha', name: 'Fecha' }
]

export const newDatosFichaColumns = [
  { key: 'descripcion', name: 'Descripción' },
  { key: 'valor', name: 'Valor' }
]

export const datosFichaColumns = [
  { key: 'id_ficha', name: 'Id Ficha' },
  { key: 'id_atleta', name: 'Cédula' },
  { key: 'nombre', name: 'Nombre' },
  { key: 'fecha', name: 'Fecha' },
  { key: 'posicion', name: 'Posición' },
  { key: 'clase', name: 'Clase' }
]

export const datosGeneralesColumns = [
  { key: 'estatura_maxima', name: 'Estatura Máxima (cm)' },
  { key: 'percentil_talla', name: 'Percentil Talla' },
  { key: 'longitud_de_pie', name: 'Longitud de Pie (cm)' },
  { key: 'longitud_sentado', name: 'Longitud Sentado (cm)' },
  { key: 'envergadura', name: 'Envergadura (cm)' },
  { key: 'imc', name: 'IMC (kg/m²)' },
  { key: 'peso_corporal', name: 'Peso (kg)' },
  { key: 'peso_ideal', name: 'Peso Ideal (kg)' },
  { key: 'percentil_de_peso', name: 'Percentil Peso' },
  { key: 'calorias_diarias', name: 'Calorías Diarias (cal)' }
]

export const perimetrosCorporalesColumns = [
  { key: 'cabeza', name: 'Cabeza (cm)' },
  { key: 'cuello', name: 'Cuello (cm)' },
  { key: 'brazo_relajado', name: 'Brazo Relajado (cm)' },
  { key: 'brazo_contraido', name: 'Brazo Contraido (cm)' },
  { key: 'antebrazo', name: 'Antebrazo (cm)' },
  { key: 'muneca', name: 'Muñeca (cm)' },
  { key: 'torax', name: 'Tórax (cm)' },
  { key: 'espalda', name: 'Espalda (cm)' },
  { key: 'muslo_superior', name: 'Muslo superior (cm)' },
  { key: 'muslo_medio', name: 'Muslo medio (cm)' },
  { key: 'pierna', name: 'Pierna (cm)' },
  { key: 'tobillo', name: 'Tobillo (cm)' }
]

export const indiceCinturaCaderaColumns = [
  { key: 'cintura', name: 'Cintura (cm)' },
  { key: 'cadera', name: 'Cadera (cm)' },
  { key: 'icc', name: 'ICC' }
]

export const indiceMasaCorporalColumns = [
  { key: 'masa_grasa_corporal', name: 'Masa Grasa Corporal (%)' },
  { key: 'masa_grasa_ideal', name: 'Masa Grasa Ideal (kg)' },
  { key: 'masa_magra_corporal', name: 'Masa Magra Corporal (kg)' },
  { key: 'masa_magra_ideal', name: 'Masa Magra Ideal (kg)' }
]

export const perfilesFotograficosColumns = [
  { key: 'frente', name: 'Frente' },
  { key: 'perfil', name: 'Perfil' },
  { key: 'espalda', name: 'Espalda' }
]

export const hittingColumns = [
  { key: 'id', name: 'ID' },
  { key: 'id_atleta', name: 'Cédula' },
  { key: 'nombre', name: 'Nombre' },
  { key: 'posicion', name: 'Posición' },
  { key: 'clase', name: 'Clase' },
  { key: 'fecha_evaluacion', name: 'Fecha de evaluación' },
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
  { key: 'id_atleta', name: 'Cédula' },
  { key: 'nombre', name: 'Nombre' },
  { key: 'posicion', name: 'Posición' },
  { key: 'clase', name: 'Clase' },
  { key: 'fecha_evaluacion', name: 'Fecha de evaluación' },
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
  { key: 'id_atleta', name: 'Cédula' },
  { key: 'nombre', name: 'Nombre' },
  { key: 'posicion', name: 'Posición' },
  { key: 'clase', name: 'Clase' },
  { key: 'fecha_evaluacion', name: 'Fecha de evaluación' },
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
  { key: 'id_atleta', name: 'Cédula' },
  { key: 'nombre', name: 'Nombre' },
  { key: 'posicion', name: 'Posición' },
  { key: 'clase', name: 'Clase' },
  { key: 'fecha_evaluacion', name: 'Fecha de evaluación' },
  { key: 'velocidad_sesenta', name: 'Velocidad 60 yardas' },
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
