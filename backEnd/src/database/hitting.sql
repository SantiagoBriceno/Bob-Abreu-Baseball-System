-- 9876543210
-- 2468135790
-- 0123456789
-- 28063634
-- 28055422

-- INSERTS PARA ENTRENAR LA IA DE HITTING EN LA ESTADISTICA BAT_SPEED

--Columns de la tabla hitting:
--id int AI PK 
--id_atleta varchar(10) 
--agudeza_visual int 
--bat_speed float 
--angle_attack float 
--coord_dos_manos int 
--ritmo_balance int 
--rec_zona_strike int 
--rec_pitcheos int 
--control_bate int 
--ruta_del_bate int 
--fecha_evaluacion date 
--id_auditoria varchar(10)

-- 1. 9876543210
INSERT INTO hitting (id_atleta, agudeza_visual, bat_speed, angle_attack, coord_dos_manos, ritmo_balance, rec_zona_strike, rec_pitcheos, control_bate, ruta_del_bate, fecha_evaluacion, id_auditoria) VALUES ('9876543210', 6, 90, 90, 10, 10, 10, 10, 10, 10, '2021-01-01', '1');