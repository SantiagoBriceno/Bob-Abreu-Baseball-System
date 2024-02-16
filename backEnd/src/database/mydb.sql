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
  id_auditoria VARCHAR(10) NOT NULL
);

CREATE TABLE IF NOT EXISTS atleta (
  cedula VARCHAR(10) NOT NULL,
  nombre VARCHAR(50) NOT NULL,
  tlf VARCHAR(15) NULL,
  lugar_nacimiento VARCHAR(100) NOT NULL,
  fecha_nacimiento DATE NOT NULL,
  hitting VARCHAR(50) NOT NULL,
  posicion VARCHAR(50) NOT NULL,
  estado VARCHAR(50) NOT NULL,
  foto VARCHAR(100) NOT NULL,
  id_auditoria VARCHAR(10) NOT NULL
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
  fecha DATE NOT NULL
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
  id_atleta VARCHAR(10) NOT NULL,
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
  id_atleta VARCHAR(10) NOT NULL,
  cintura FLOAT(10) NOT NULL,
  cadera FLOAT(10) NOT NULL,
  relacion_cintura_cadera FLOAT(10) NOT NULL,
  id_auditoria VARCHAR(10) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS indice_masa_corporal (
  id INT NOT NULL AUTO_INCREMENT,
  id_ficha INT NOT NULL,
  id_atleta VARCHAR(10) NOT NULL,
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
  id_atleta VARCHAR(10) NOT NULL,
  frente VARCHAR(100) NOT NULL,
  perfil VARCHAR(100) NOT NULL,
  espalda VARCHAR(100) NOT NULL,
  id_auditoria VARCHAR(10) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS estadisticas (
  id_stat INT NOT NULL AUTO_INCREMENT,
  id_atleta VARCHAR(10) NOT NULL,
  id_auditoria VARCHAR(10) NOT NULL,
  PRIMARY KEY (id_stat)
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
  rutal_del_bate INT(10) NOT NULL,
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
  id_auditoria VARCHAR(10) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS running (
  id INT NOT NULL AUTO_INCREMENT,
  id_atleta VARCHAR(10) NOT NULL,
  velocidad_60 FLOAT(10) NOT NULL,
  velocidad_home_to_first FLOAT(10) NOT NULL,
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

-- Insercion de datos de prueba de la tabla representante


-- Insercion de datos de prueba DESDE indice_masa_corporal

INSERT INTO indice_masa_corporal (id_ficha, id_atleta, masa_grasa_corporal, masa_grasa_ideal, masa_magra_corporal, masa_magra_ideal, id_auditoria)
VALUES (1, 'ATL001', 20.5, 18.5, 60.2, 62.5, 'AUD001');

INSERT INTO indice_masa_corporal (id_ficha, id_atleta, masa_grasa_corporal, masa_grasa_ideal, masa_magra_corporal, masa_magra_ideal, id_auditoria)
VALUES (2, 'ATL002', 22.3, 20.0, 58.7, 61.0, 'AUD001');

INSERT INTO indice_masa_corporal (id_ficha, id_atleta, masa_grasa_corporal, masa_grasa_ideal, masa_magra_corporal, masa_magra_ideal, id_auditoria)
VALUES (3, 'ATL003', 18.9, 17.0, 62.5, 64.8, 'AUD002');

INSERT INTO indice_masa_corporal (id_ficha, id_atleta, masa_grasa_corporal, masa_grasa_ideal, masa_magra_corporal, masa_magra_ideal, id_auditoria)
VALUES (4, 'ATL004', 19.8, 18.0, 61.0, 63.2, 'AUD002');

INSERT INTO indice_masa_corporal (id_ficha, id_atleta, masa_grasa_corporal, masa_grasa_ideal, masa_magra_corporal, masa_magra_ideal, id_auditoria)
VALUES (5, 'ATL005', 21.7, 19.5, 59.5, 61.8, 'AUD003');

INSERT INTO perfiles_fotograficos (id_ficha, id_atleta, frente, perfil, espalda, id_auditoria)
VALUES (1, 'ATL001', 'frente1.jpg', 'perfil1.jpg', 'espalda1.jpg', 'AUD001');

INSERT INTO perfiles_fotograficos (id_ficha, id_atleta, frente, perfil, espalda, id_auditoria)
VALUES (2, 'ATL002', 'frente2.jpg', 'perfil2.jpg', 'espalda2.jpg', 'AUD001');

INSERT INTO perfiles_fotograficos (id_ficha, id_atleta, frente, perfil, espalda, id_auditoria)
VALUES (3, 'ATL003', 'frente3.jpg', 'perfil3.jpg', 'espalda3.jpg', 'AUD002');

INSERT INTO perfiles_fotograficos (id_ficha, id_atleta, frente, perfil, espalda, id_auditoria)
VALUES (4, 'ATL004', 'frente4.jpg', 'perfil4.jpg', 'espalda4.jpg', 'AUD002');

INSERT INTO perfiles_fotograficos (id_ficha, id_atleta, frente, perfil, espalda, id_auditoria)
VALUES (5, 'ATL005', 'frente5.jpg', 'perfil5.jpg', 'espalda5.jpg', 'AUD003');

INSERT INTO estadisticas (id_atleta, id_auditoria)
VALUES ('ATL001', 'AUD001');

INSERT INTO estadisticas (id_atleta, id_auditoria)
VALUES ('ATL002', 'AUD001');

INSERT INTO estadisticas (id_atleta, id_auditoria)
VALUES ('ATL003', 'AUD002');

INSERT INTO estadisticas (id_atleta, id_auditoria)
VALUES ('ATL004', 'AUD002');

INSERT INTO estadisticas (id_atleta, id_auditoria)
VALUES ('ATL005', 'AUD003');

INSERT INTO hitting (id_stat, agudeza_visual, bat_speed, angle_attack, coord_dos_manos, ritmo_balance, rec_zona_strike, rec_pitcheos, control_bate, rutal_del_bate, id_auditoria)
VALUES (1, 8, 90.5, 12.3, 7, 9, 8, 7, 9, 8, 'AUD001');

INSERT INTO hitting (id_stat, agudeza_visual, bat_speed, angle_attack, coord_dos_manos, ritmo_balance, rec_zona_strike, rec_pitcheos, control_bate, rutal_del_bate, id_auditoria)
VALUES (2, 7, 88.2, 11.5, 6, 8, 7, 6, 8, 7, 'AUD001');

INSERT INTO hitting (id_stat, agudeza_visual, bat_speed, angle_attack, coord_dos_manos, ritmo_balance, rec_zona_strike, rec_pitcheos, control_bate, rutal_del_bate, id_auditoria)
VALUES (3, 9, 92.1, 13.2, 8, 9, 9, 8, 9, 8, 'AUD002');

INSERT INTO hitting (id_stat, agudeza_visual, bat_speed, angle_attack, coord_dos_manos, ritmo_balance, rec_zona_strike, rec_pitcheos, control_bate, rutal_del_bate, id_auditoria)
VALUES (4, 8, 89.7, 12.8, 7, 8, 8, 7, 8, 7, 'AUD002');

INSERT INTO hitting (id_stat, agudeza_visual, bat_speed, angle_attack, coord_dos_manos, ritmo_balance, rec_zona_strike, rec_pitcheos, control_bate, rutal_del_bate, id_auditoria)
VALUES (5, 7, 87.4, 11.9, 6, 7, 7, 6, 7, 6, 'AUD003');

INSERT INTO throwing (id_stat, lanzamiento_primera, lanzamiento_segunda, lanzamiento_tercera, lanzamiento_home, pop_time, id_auditoria)
VALUES (1, 85.2, 88.5, 90.1, 92.3, 1.9, 'AUD001');

INSERT INTO throwing (id_stat, lanzamiento_primera, lanzamiento_segunda, lanzamiento_tercera, lanzamiento_home, pop_time, id_auditoria)
VALUES (2, 83.7, 87.2, 89.5, 91.7, 2.1, 'AUD001');

INSERT INTO throwing (id_stat, lanzamiento_primera, lanzamiento_segunda, lanzamiento_tercera, lanzamiento_home, pop_time, id_auditoria)
VALUES (3, 86.5, 89.8, 91.3, 93.1, 1.8, 'AUD002');

INSERT INTO throwing (id_stat, lanzamiento_primera, lanzamiento_segunda, lanzamiento_tercera, lanzamiento_home, pop_time, id_auditoria)
VALUES (4, 84.9, 88.1, 90.0, 92.0, 2.0, 'AUD002');

INSERT INTO throwing (id_stat, lanzamiento_primera, lanzamiento_segunda, lanzamiento_tercera, lanzamiento_home, pop_time, id_auditoria)
VALUES (5, 82.6, 86.7, 88.9, 91.2, 2.2, 'AUD003');

INSERT INTO fielding (id_stat, getting_jump, ruta, alcance, manos_suaves, juego_de_pie, anticipacion, energia, id_auditoria)
VALUES (1, 8, 7, 9, 8, 9, 8, 7, 'AUD001');

INSERT INTO fielding (id_stat, getting_jump, ruta, alcance, manos_suaves, juego_de_pie, anticipacion, energia, id_auditoria)
VALUES (2, 7, 6, 8, 7, 8, 7, 6, 'AUD001');

INSERT INTO fielding (id_stat, getting_jump, ruta, alcance, manos_suaves, juego_de_pie, anticipacion, energia, id_auditoria)
VALUES (3, 9, 8, 9, 8, 9, 8, 9, 'AUD002');

INSERT INTO fielding (id_stat, getting_jump, ruta, alcance, manos_suaves, juego_de_pie, anticipacion, energia, id_auditoria)
VALUES (4, 8, 7, 8, 7, 8, 7, 8, 'AUD002');

INSERT INTO fielding (id_stat, getting_jump, ruta, alcance, manos_suaves, juego_de_pie, anticipacion, energia, id_auditoria)
VALUES (5, 7, 6, 7, 6, 7, 6, 7, 'AUD003');

INSERT INTO make_up (id_stat, actitud, compromiso, responsabilidad, disciplina, id_auditoria)
VALUES (1, 8, 9, 8, 7, 'AUD001');

INSERT INTO make_up (id_stat, actitud, compromiso, responsabilidad, disciplina, id_auditoria)
VALUES (2, 7, 8, 7, 6, 'AUD001');

INSERT INTO make_up (id_stat, actitud, compromiso, responsabilidad, disciplina, id_auditoria)
VALUES (3, 9, 8, 9, 8, 'AUD002');

INSERT INTO make_up (id_stat, actitud, compromiso, responsabilidad, disciplina, id_auditoria)
VALUES (4, 8, 7, 8, 7, 'AUD002');

INSERT INTO make_up (id_stat, actitud, compromiso, responsabilidad, disciplina, id_auditoria)
VALUES (5, 7, 6, 7, 6, 'AUD003');

INSERT INTO pitching (id_stat, velocidad_recta, velocidad_curva, velocidad_slider, velocidad_cambio, id_auditoria)
VALUES (1, 90.5, 82.3, 85.7, 83.2, 'AUD001');

INSERT INTO pitching (id_stat, velocidad_recta, velocidad_curva, velocidad_slider, velocidad_cambio, id_auditoria)
VALUES (2, 88.2, 80.9, 84.3, 81.7, 'AUD001');

INSERT INTO pitching (id_stat, velocidad_recta, velocidad_curva, velocidad_slider, velocidad_cambio, id_auditoria)
VALUES (3, 92.1, 84.7, 87.5, 85.3, 'AUD002');

INSERT INTO pitching (id_stat, velocidad_recta, velocidad_curva, velocidad_slider, velocidad_cambio, id_auditoria)
VALUES (4, 89.7, 82.9, 86.1, 83.8, 'AUD002');

INSERT INTO pitching (id_stat, velocidad_recta, velocidad_curva, velocidad_slider, velocidad_cambio, id_auditoria)
VALUES (5, 87.4, 81.5, 84.9, 82.4, 'AUD003');
