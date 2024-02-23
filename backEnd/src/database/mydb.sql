-- Creacion de la base de datos
CREATE DATABASE IF NOT EXISTS baseball_db;

CREATE TABLE IF NOT EXISTS representante (
  cedula VARCHAR(10) NOT NULL,
  nombre VARCHAR(50) NOT NULL,
  tlf VARCHAR(15) NOT NULL,
  rif VARCHAR(15) NOT NULL,
  estatura VARCHAR(10) NOT NULL,
  sexo VARCHAR(10) NOT NULL,
  direccion VARCHAR(100) NOT NULL,
  cedula_atleta VARCHAR(10) NOT NULL,
  correo VARCHAR(50) NOT NULL,
  id_auditoria VARCHAR(10) NOT NULL,
  PRIMARY KEY (cedula, cedula_atleta)
);

CREATE TABLE IF NOT EXISTS registro_especial (
  id INT NOT NULL AUTO_INCREMENT,
  cedula_atleta VARCHAR(10) NOT NULL,
  fecha_evento DATE NOT NULL,
  descripcion VARCHAR(100) NOT NULL,
  id_auditoria VARCHAR(10) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS atleta (
  cedula VARCHAR(10) NOT NULL,
  nombre VARCHAR(50) NOT NULL,
  tlf VARCHAR(15) NULL,
  lugar_nacimiento VARCHAR(100) NOT NULL,
  fecha_nacimiento DATE NOT NULL,
  clase VARCHAR(50) NOT NULL,
  hitting VARCHAR(50) NOT NULL,
  posicion VARCHAR(50) NOT NULL,
  estado VARCHAR(50) NOT NULL,
  foto VARCHAR(100) NOT NULL,
  id_auditoria VARCHAR(10) NOT NULL,
  PRIMARY KEY (cedula)
);

CREATE TABLE IF NOT EXISTS indicadores (
  id INT NOT NULL AUTO_INCREMENT,
  clase VARCHAR(50) NOT NULL,
  posicion VARCHAR(50) NOT NULL,
  estadistica FLOAT(50) NOT NULL,
  valor FLOAT(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS auditoria (
  id INT NOT NULL AUTO_INCREMENT,
  id_autor VARCHAR(10) NOT NULL,
  descripcion TEXT NOT NULL,
  entity VARCHAR(50) NOT NULL,
  id_entity VARCHAR(10) NOT NULL,
  fecha DATE NOT NULL,
  PRIMARY KEY (id)
)

CREATE TABLE IF NOT EXISTS ficha_antropometrica (
  id_ficha INT NOT NULL AUTO_INCREMENT,
  id_atleta VARCHAR(10) NOT NULL,
  id_auditoria VARCHAR(10) NOT NULL,
  PRIMARY KEY (id_ficha)
);

CREATE TABLE IF NOT EXISTS datos_generales (
  id INT NOT NULL AUTO_INCREMENT,
  id_ficha INT NOT NULL,
  estatura_maxima FLOAT(10) NOT NULL,
  percentil_talla FLOAT(10) NOT NULL,
  longitud_de_pie FLOAT(10) NOT NULL,
  longitud_sentado FLOAT(10) NOT NULL,
  envergadura FLOAT(10) NOT NULL,
  imc FLOAT(10) NOT NULL,
  imc_ideal FLOAT(10) NOT NULL,
  peso_corporal FLOAT(10) NOT NULL,
  calorias_diarias FLOAT(10) NOT NULL,
  peso_ideal FLOAT(10) NOT NULL,
  percentil_peso FLOAT(10) NOT NULL,
  id_auditoria VARCHAR(10) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS perimetros_corporales (
  id INT NOT NULL AUTO_INCREMENT,
  id_ficha INT NOT NULL,
  cabeza FLOAT(10) NOT NULL,
  cuello FLOAT(10) NOT NULL,
  brazo_relajado FLOAT(10) NOT NULL,
  brazo_contraido FLOAT(10) NOT NULL,
  antebrazo FLOAT(10) NOT NULL,
  muneca FLOAT(10) NOT NULL,
  torax FLOAT(10) NOT NULL,
  espalda FLOAT(10) NOT NULL,
  muslo_superior FLOAT(10) NOT NULL,
  muslo_medio FLOAT(10) NOT NULL,
  pierna FLOAT(10) NOT NULL,
  tobillo FLOAT(10) NOT NULL,
  id_auditoria VARCHAR(10) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS indice_cintura_cadera (
  id INT NOT NULL AUTO_INCREMENT,
  id_ficha INT NOT NULL,
  cintura FLOAT(10) NOT NULL,
  cadera FLOAT(10) NOT NULL,
  relacion_cintura_cadera FLOAT(10) NOT NULL,
  id_auditoria VARCHAR(10) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS indice_masa_corporal (
  id INT NOT NULL AUTO_INCREMENT,
  id_ficha INT NOT NULL,
  masa_grasa_corporal FLOAT(10) NOT NULL,
  masa_grasa_ideal FLOAT(10) NOT NULL,
  masa_magra_corporal FLOAT(10) NOT NULL,
  masa_magra_ideal FLOAT(10) NOT NULL,
  id_auditoria VARCHAR(10) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS perfiles_fotograficos (
  id INT NOT NULL AUTO_INCREMENT,
  id_ficha INT NOT NULL,
  frente VARCHAR(100) NOT NULL,
  perfil VARCHAR(100) NOT NULL,
  espalda VARCHAR(100) NOT NULL,
  id_auditoria VARCHAR(10) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS hitting (
  id INT NOT NULL AUTO_INCREMENT,
  id_atleta VARCHAR(10) NOT NULL,
  agudeza_visual INT(10) NOT NULL,
  bat_speed FLOAT(10) NOT NULL,
  angle_attack FLOAT(10) NOT NULL,
  coord_dos_manos INT(10) NOT NULL,
  ritmo_balance INT(10) NOT NULL,
  rec_zona_strike INT(10) NOT NULL,
  rec_pitcheos INT(10) NOT NULL,
  control_bate INT(10) NOT NULL,
  ruta_del_bate INT(10) NOT NULL,
  fecha_evaluacion DATE NOT NULL,
  id_auditoria VARCHAR(10) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS throwing (
  id INT NOT NULL AUTO_INCREMENT,
  id_atleta VARCHAR(10) NOT NULL,
  lanzamiento_primera FLOAT(10) NULL,
  lanzamiento_segunda FLOAT(10) NULL,
  lanzamiento_tercera FLOAT(10) NULL,
  lanzamiento_home FLOAT(10) NULL,
  pop_time FLOAT(10) NULL,
  fluidez_brazo FLOAT(10) NULL,
  brazo_rapido FLOAT(10) NULL,
  facilidad_movimiento FLOAT(10) NULL,
  linealidad_lanzamiento FLOAT(10) NULL,
  fecha_evaluacion DATE NOT NULL,
  id_auditoria VARCHAR(10) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS fielding (
  id INT NOT NULL AUTO_INCREMENT,
  id_atleta VARCHAR(10) NOT NULL,
  getting_jump INT(10) NULL,
  ruta INT(10) NULL,
  alcance INT(10) NULL,
  manos_suaves INT(10) NULL,
  control_cuerpo INT(10) NULL,
  juego_de_pie INT(10) NULL,
  anticipacion INT(10) NULL,
  energia INT(10) NULL,
  fecha_evaluacion DATE NOT NULL,
  id_auditoria VARCHAR(10) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS make_up (
  id INT NOT NULL AUTO_INCREMENT,
  id_atleta VARCHAR(10) NOT NULL,
  actitud INT(10) NULL,
  compromiso INT(10) NULL,
  responsabilidad INT(10) NULL,
  disciplina INT(10) NULL,
  fecha_evaluacion DATE NOT NULL,
  id_auditoria VARCHAR(10) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS pitching (
  id INT NOT NULL AUTO_INCREMENT,
  id_atleta VARCHAR(10) NOT NULL,
  velocidad_recta FLOAT(10) NOT NULL,
  velocidad_curva FLOAT(10) NOT NULL,
  velocidad_slider FLOAT(10) NULL,
  velocidad_cambio FLOAT(10) NULL,
  fecha_evaluacion DATE NOT NULL,
  id_auditoria VARCHAR(10) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS running (
  id INT NOT NULL AUTO_INCREMENT,
  id_atleta VARCHAR(10) NOT NULL,
  velocidad_sesenta FLOAT(10) NOT NULL,
  velocidad_home_to_first FLOAT(10) NOT NULL,
  fecha_evaluacion DATE NOT NULL,
  id_auditoria VARCHAR(10) NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL AUTO_INCREMENT,
  cedula VARCHAR(10) NOT NULL,
  username VARCHAR(50) NOT NULL,
  name VARCHAR(50) NOT NULL,
  password TEXT NOT NULL,
  rol VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
)
