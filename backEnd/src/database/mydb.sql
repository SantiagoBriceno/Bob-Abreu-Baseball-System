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

INSERT INTO representante (cedula, nombre, tlf, rif, estatura, sexo, direccion, cedula_atleta, correo, id_auditoria)
VALUES ('1234567890', 'John Doe', '555-1234', 'ABC123', '180', 'M', '123 Main St', '9876543210', 'john.doe@example.com', '1');

INSERT INTO representante (cedula, nombre, tlf, rif, estatura, sexo, direccion, cedula_atleta, correo, id_auditoria)
VALUES ('0987654321', 'Jane Smith', '555-5678', 'DEF456', '165', 'F', '456 Elm St', '0123456789', 'jane.smith@example.com', '2');

INSERT INTO representante (cedula, nombre, tlf, rif, estatura, sexo, direccion, cedula_atleta, correo, id_auditoria)
VALUES ('2468135790', 'Mike Johnson', '555-9876', 'GHI789', '175', 'M', '789 Oak St', '1357924680', 'mike.johnson@example.com', '3');

INSERT INTO representante (cedula, nombre, tlf, rif, estatura, sexo, direccion, cedula_atleta, correo, id_auditoria)
VALUES ('1357924680', 'Emily Davis', '555-5432', 'JKL012', '160', 'F', '321 Pine St', '2468135790', 'emily.davis@example.com', '4');

INSERT INTO representante (cedula, nombre, tlf, rif, estatura, sexo, direccion, cedula_atleta, correo, id_auditoria)
VALUES ('0123456789', 'David Wilson', '555-8765', 'MNO345', '185', 'M', '654 Cedar St', '0987654321', 'david.wilson@example.com', '5');


CREATE TABLE IF NOT EXISTS registro_especial (
  id INT NOT NULL AUTO_INCREMENT,
  cedula_atleta VARCHAR(10) NOT NULL,
  fecha_evento DATE NOT NULL,
  descripcion VARCHAR(100) NOT NULL,
  id_auditoria VARCHAR(10) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO registro_especial (cedula_atleta, fecha_evento, descripcion, id_auditoria)
VALUES ('42987621', '2022-09-01', 'Salida de fin de semana con sus padres, fecha de regreso estimada: 2022-09-04', '6');

INSERT INTO registro_especial (cedula_atleta, fecha_evento, descripcion, id_auditoria)
VALUES ('42987621', '2023-11-12', 'Cumpleaños de familiar, estará fuera de la institución 2 horas', '7');

INSERT INTO registro_especial (cedula_atleta, fecha_evento, descripcion, id_auditoria)
VALUES ('42987621', '2024-03-13', 'Salida para ayudar a familiares en quehaceres de la casa, fecha de reingreso, 2024-03-14', '8');


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

INSERT INTO atleta (cedula, nombre, tlf, lugar_nacimiento, fecha_nacimiento, clase, hitting, posicion, estado, foto, id_auditoria)
VALUES ('9876543210', 'John Doe', '555-1234', 'Caracas', '2010-05-15', '2026', 'Right', 'Pitcher', 'Active', 'john_doe.jpg', '1');

INSERT INTO atleta (cedula, nombre, tlf, lugar_nacimiento, fecha_nacimiento, clase, hitting, posicion, estado, foto, id_auditoria)
VALUES ('0123456789', 'Jane Smith', '555-5678', 'Maracaibo', '1995-08-20', 'A', 'Left', 'Catcher', 'Active', 'jane_smith.jpg', '2');

INSERT INTO atleta (cedula, nombre, tlf, lugar_nacimiento, fecha_nacimiento, clase, hitting, posicion, estado, foto, id_auditoria)
VALUES ('2468135790', 'Mike Johnson', '555-9876', 'Valencia', '1992-03-10', 'B', 'Right', 'Shortstop', 'Active', 'mike_johnson.jpg', '3');

INSERT INTO atleta (cedula, nombre, tlf, lugar_nacimiento, fecha_nacimiento, clase, hitting, posicion, estado, foto, id_auditoria)
VALUES ('1357924680', 'Emily Davis', '555-5432', 'Barquisimeto', '1998-11-25', 'B', 'Left', 'Outfielder', 'Active', 'emily_davis.jpg', '4');

INSERT INTO atleta (cedula, nombre, tlf, lugar_nacimiento, fecha_nacimiento, clase, hitting, posicion, estado, foto, id_auditoria)
VALUES ('0987654321', 'David Wilson', '555-8765', 'Maracay', '1993-07-05', 'C', 'Right', 'First Base', 'Active', 'david_wilson.jpg', '5');


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

INSERT INTO ficha_antropometrica (id_atleta, id_auditoria)
VALUES ('42987621', '1');

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
  tasa_metabolica_basal FLOAT(10) NOT NULL,
  calorias_necesarias FLOAT(10) NOT NULL,
  percentil_de_peso FLOAT(10) NOT NULL,
  peso_ideal FLOAT(10) NOT NULL,
  peso_corporal FLOAT(10) NOT NULL,
  calorias_diarias FLOAT(10) NOT NULL,
  id_auditoria VARCHAR(10) NOT NULL,
  PRIMARY KEY (id);
);

INSERT INTO datos_generales (id_ficha, estatura_maxima, percentil_talla, longitud_de_pie, longitud_sentado, envergadura, imc, imc_ideal, tasa_metabolica_basal, calorias_necesarias, calorias_diarias, percentil_de_peso, peso_ideal, peso_corporal, id_auditoria) VALUES (1, 180, 75, 28, 90, 190, 23, 22, 1500, 2000, 2500, 80, 70, 80, '1');

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

INSERT INTO perimetros_corporales (id_ficha, cabeza, cuello, brazo_relajado, brazo_contraido, antebrazo, muneca, torax, espalda, muslo_superior, muslo_medio, pierna, tobillo, id_auditoria)
VALUES (1, 55, 40, 30, 35, 25, 15, 90, 80, 60, 50, 40, 20, '1');


CREATE TABLE IF NOT EXISTS indice_cintura_cadera (
  id INT NOT NULL AUTO_INCREMENT,
  id_ficha INT NOT NULL,
  cintura FLOAT(10) NOT NULL,
  cadera FLOAT(10) NOT NULL,
  relacion_cintura_cadera FLOAT(10) NOT NULL,
  id_auditoria VARCHAR(10) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO indice_cintura_cadera (id_ficha, cintura, cadera, relacion_cintura_cadera, id_auditoria)
VALUES (1, 80, 100, 0.8, '1');

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

INSERT INTO indice_masa_corporal (id_ficha, masa_grasa_corporal, masa_grasa_ideal, masa_magra_corporal, masa_magra_ideal, id_auditoria)
VALUES (1, 20, 15, 80, 85, '1');

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

CREATE TABLE IF NOT EXISTS lesiones (
  id INT NOT NULL AUTO_INCREMENT,
  id_atleta VARCHAR(10) NOT NULL,
  fecha DATE NOT NULL,
  descripcion TEXT NOT NULL,
  id_auditoria VARCHAR(10) NOT NULL,
  PRIMARY KEY (id)
)

