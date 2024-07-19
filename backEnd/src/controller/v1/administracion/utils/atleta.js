export const calcularClase = (fecha) => {
  // segun una fecha de nacimiento se calcula la clase del atleta
  // la clase, es el año en que el atleta cumple 16 años
  const anio = parseInt(fecha.split('-')[0])
  const mes = parseInt(fecha.split('-')[1])
  return mes < 6 ? anio + 16 : anio + 17
}
