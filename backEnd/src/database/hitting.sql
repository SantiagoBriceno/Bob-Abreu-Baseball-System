CREATE TABLE hitting_ml (
    id int AUTO_INCREMENT PRIMARY KEY,
    id_atleta varchar(10),
    bat_speed float,
    fecha_evaluacion date
);

-- Registros con las mismas fechas de evaluacion para que la IA pueda entrenar con datos reales
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 54, '2020-05-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 54, '2020-06-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 55, '2020-07-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 56, '2020-08-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 54, '2020-09-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 53, '2020-10-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 55, '2020-11-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 54, '2020-12-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 56, '2021-01-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 57, '2021-02-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 58, '2021-03-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 56, '2021-04-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 57, '2021-05-15'); -- CUMPLE 11 AÑOS
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 57, '2021-06-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 55, '2021-06-30');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 56, '2021-07-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 57, '2021-07-30');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 56, '2021-08-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 57, '2021-08-30');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 58, '2021-09-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 57, '2021-09-30');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 58, '2021-10-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 59, '2021-10-30');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 58, '2021-11-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 60, '2021-11-30');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 61, '2021-12-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 61, '2021-12-30');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 61, '2022-01-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 60, '2022-01-30');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 61, '2022-02-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 62, '2022-02-28');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 60, '2022-03-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 60, '2022-03-30');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 61, '2022-04-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 62, '2022-04-30');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 61, '2022-05-15'); -- CUMPLE 12 AÑOS
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 61, '2022-06-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 62, '2022-07-05');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 61, '2022-07-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 63, '2022-07-25');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 62, '2022-08-14');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 61, '2022-08-24');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 63, '2022-09-03');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 63, '2022-09-13');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 64, '2022-09-23');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 63, '2022-10-13');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 64, '2022-10-23');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 65, '2022-11-02');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 65, '2022-11-12');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 66, '2022-11-22');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 64, '2022-12-02');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 65, '2022-12-12');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 66, '2022-12-22');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 67, '2023-01-01');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 66, '2023-01-21');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 67, '2023-01-31');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 66, '2023-02-10');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 65, '2023-02-20');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 66, '2023-03-02');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 67, '2023-03-12');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 67, '2023-03-22');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 67, '2023-04-01');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 68, '2023-04-11');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 67, '2023-04-21');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 68, '2023-05-01');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 68, '2023-05-11'); 
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('40876543', 69, '2023-05-21'); -- CUMPLE 13 AÑOS




INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 53, '2019-05-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 55, '2019-06-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 54, '2019-07-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 55, '2019-08-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 54, '2019-09-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 53, '2019-10-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 55, '2019-11-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 55, '2019-12-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 56, '2020-01-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 55, '2020-02-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 57, '2020-03-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 57, '2020-04-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 58, '2020-05-15'); -- CUMPLE 11 AÑOS
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 58, '2020-06-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 57, '2020-06-30');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 58, '2020-07-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 57, '2020-07-30');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 56, '2020-08-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 57, '2020-08-30');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 58, '2020-09-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 59, '2020-09-30');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 58, '2020-10-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 58, '2020-10-30');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 58, '2020-11-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 60, '2020-11-30');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 60, '2020-12-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 59, '2020-12-30');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 61, '2021-01-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 60, '2021-01-30');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 61, '2021-02-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 62, '2021-02-28');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 61, '2021-03-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 62, '2021-03-30');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 61, '2021-04-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 62, '2021-04-30');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 61, '2021-05-15'); -- CUMPLE 12 AÑOS
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 61, '2021-06-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 62, '2021-07-05');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 61, '2021-07-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 63, '2021-07-25');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 62, '2021-08-14');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 63, '2021-08-24');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 63, '2021-09-03');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 64, '2021-09-13');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 63, '2021-09-23');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 63, '2021-10-13');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 64, '2021-10-23');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 66, '2021-11-02');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 65, '2021-11-12');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 66, '2021-11-22');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 65, '2021-12-02');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 65, '2021-12-12');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 66, '2021-12-22');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 67, '2022-01-01');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 66, '2022-01-21');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 67, '2022-01-31');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 66, '2022-02-10');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 65, '2022-02-20');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 66, '2022-03-02');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 67, '2022-03-12');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 67, '2022-03-22');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 67, '2022-04-01');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 68, '2022-04-11');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 67, '2022-04-21');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 69, '2022-05-01');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 67, '2022-05-11'); 
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 69, '2022-05-21'); -- CUMPLE 13 AÑOS
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 69, '2022-06-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 71, '2022-06-25');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 70, '2022-07-05');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 70, '2022-07-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 71, '2022-07-25');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 70, '2022-08-04');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 71, '2022-08-14');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 71, '2022-08-24');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 73, '2022-09-03');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 72, '2022-09-13');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 72, '2022-09-23');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 73, '2022-10-03');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 74, '2022-10-13');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 73, '2022-10-23');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 74, '2022-11-02');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 73, '2022-11-12');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 74, '2022-11-22');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 72, '2022-12-02');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 73, '2022-12-12');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 74, '2022-12-22');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 73, '2023-01-01');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 74, '2023-01-21');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 74, '2023-01-31');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 73, '2023-02-10');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 74, '2023-02-20');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('38456722', 74, '2023-03-02');






INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 54, '2018-05-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 56, '2018-06-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 54, '2018-07-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 55, '2018-08-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 53, '2018-09-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 54, '2018-10-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 56, '2018-11-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 54, '2018-12-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 56, '2019-01-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 55, '2019-02-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 56, '2019-03-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 56, '2019-04-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 58, '2019-05-15'); -- CUMPLE 11 AÑOS
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 58, '2019-06-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 57, '2019-06-30');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 58, '2019-07-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 57, '2019-07-30');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 56, '2019-08-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 57, '2019-08-30');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 59, '2019-09-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 58, '2019-09-30');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 58, '2019-10-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 58, '2019-10-30');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 58, '2019-11-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 59, '2019-11-30');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 59, '2019-12-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 59, '2019-12-30');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 60, '2020-01-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 59, '2020-01-30');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 60, '2020-02-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 61, '2020-02-28');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 61, '2020-03-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 59, '2020-03-30');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 61, '2020-04-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 62, '2020-04-30');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 60, '2020-05-15'); -- CUMPLE 12 AÑOS
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 60, '2020-06-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 61, '2020-07-05');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 62, '2020-07-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 63, '2020-07-25');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 63, '2020-08-14');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 63, '2020-08-24');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 63, '2020-09-03');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 65, '2020-09-13');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 63, '2020-09-23');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 63, '2020-10-13');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 64, '2020-10-23');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 66, '2020-11-02');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 66, '2020-11-12');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 66, '2020-11-22');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 65, '2020-12-02');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 66, '2020-12-12');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 66, '2020-12-22');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 67, '2021-01-01');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 66, '2021-01-21');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 67, '2021-01-31');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 67, '2021-02-10');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 65, '2021-02-20');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 66, '2021-03-02');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 67, '2021-03-12');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 66, '2021-03-22');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 68, '2021-04-01');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 68, '2021-04-11');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 67, '2021-04-21');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 69, '2021-05-01');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 67, '2021-05-11'); 
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 68, '2021-05-21'); -- CUMPLE 13 AÑOS
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 69, '2021-06-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 70, '2021-06-25');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 70, '2021-07-05');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 71, '2021-07-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 71, '2021-07-25');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 70, '2021-08-04');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 71, '2021-08-14');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 71, '2021-08-24');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 73, '2021-09-03');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 72, '2021-09-13');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 72, '2021-09-23');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 73, '2021-10-03');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 73, '2021-10-13');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 73, '2021-10-23');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 74, '2021-11-02');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 73, '2021-11-12');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 73, '2021-11-22');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 71, '2021-12-02');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 73, '2021-12-12');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 73, '2021-12-22');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 73, '2022-01-01');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 73, '2022-01-21');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 74, '2022-01-31');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 73, '2022-02-10');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 74, '2022-02-20');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 74, '2022-03-02');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 72, '2022-03-12');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 76, '2022-03-22');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 73, '2022-04-01');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 74, '2022-04-11');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 73, '2022-04-21');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 73, '2022-05-01');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 74, '2022-05-11');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 73, '2022-05-21'); -- CUMPLE 14 AÑOS
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 74, '2022-06-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 75, '2022-06-25');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 73, '2022-07-05');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 74, '2022-07-15');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 75, '2022-07-25');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 75, '2022-08-04');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 73, '2022-08-14');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 74, '2022-08-24');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 73, '2022-09-03');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 74, '2022-09-13');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 75, '2022-09-23');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 74, '2022-10-03');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 73, '2022-10-13');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 75, '2022-10-23');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 76, '2022-11-02');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 75, '2022-11-12');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 76, '2022-11-22');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 75, '2022-12-02');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 76, '2022-12-12');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 76, '2022-12-22');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 76, '2023-01-01');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 76, '2023-01-21');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 77, '2023-01-31');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 76, '2023-02-10');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 77, '2023-02-20');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 75, '2023-03-02');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 77, '2023-03-12');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 77, '2023-03-22');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 77, '2023-04-01');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 77, '2023-04-11');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 75, '2023-04-21');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 75, '2023-05-01');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 76, '2023-05-11');
INSERT INTO hitting_ml (id_atleta, bat_speed, fecha_evaluacion) VALUES ('372878964', 74, '2023-05-21'); -- CUMPLE 15 AÑOS

42987621

INSERT INTO hitting (id_atleta, agudeza_visual, bat_speed, angle_attack, coord_dos_manos, ritmo_balance, rec_zona_strike, rec_pitcheos, control_bate, ruta_del_bate, fecha_evaluacion, id_auditoria)
VALUES ('42987621', 6, 53, 64, 5, 6, 6, 7, 5, 4, '2021-05-15', '6');

INSERT INTO hitting (id_atleta, agudeza_visual, bat_speed, angle_attack, coord_dos_manos, ritmo_balance, rec_zona_strike, rec_pitcheos, control_bate, ruta_del_bate, fecha_evaluacion, id_auditoria)
VALUES ('42987621', 7, 55, 63, 5, 7, 6, 7, 6, 7, '2021-10-15', '6');

INSERT INTO hitting (id_atleta, agudeza_visual, bat_speed, angle_attack, coord_dos_manos, ritmo_balance, rec_zona_strike, rec_pitcheos, control_bate, ruta_del_bate, fecha_evaluacion, id_auditoria)
VALUES ('42987621', 7, 56, 65, 7, 7, 6, 7, 8, 7, '2022-05-15', '6');

INSERT INTO hitting (id_atleta, agudeza_visual, bat_speed, angle_attack, coord_dos_manos, ritmo_balance, rec_zona_strike, rec_pitcheos, control_bate, ruta_del_bate, fecha_evaluacion, id_auditoria)
VALUES ('42987621', 8, 57, 66, 7, 8, 7, 8, 7, 6, '2022-10-15', '6');

INSERT INTO hitting (id_atleta, agudeza_visual, bat_speed, angle_attack, coord_dos_manos, ritmo_balance, rec_zona_strike, rec_pitcheos, control_bate, ruta_del_bate, fecha_evaluacion, id_auditoria)
VALUES ('42987621', 8, 60, 65, 7, 7, 7, 8, 8, 7, '2023-05-15', '6');

INSERT INTO hitting (id_atleta, agudeza_visual, bat_speed, angle_attack, coord_dos_manos, ritmo_balance, rec_zona_strike, rec_pitcheos, control_bate, ruta_del_bate, fecha_evaluacion, id_auditoria)
VALUES ('42987621', 8, 63, 66, 7, 7, 7, 9, 9, 8, '2023-10-15', '6');

