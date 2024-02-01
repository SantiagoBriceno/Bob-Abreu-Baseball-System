export const representanteFields = [
  {
    titulo: 'Datos personales',
    campos: [
      [
        {
          label: 'Cédula',
          name: 'cedula',
          type: 'text',
          required: true,
          placeholder: 'Ingresa el número de cédula',
          id: 'cedula'
        },
        {
          label: 'Nombre',
          name: 'nombre',
          type: 'text',
          required: true,
          placeholder: 'Ingresa el nombre',
          id: 'nombre'
        }
      ],
      [
        {
          label: 'Teléfono',
          name: 'tlf',
          type: 'text',
          required: true,
          placeholder: 'Ingresa el número de teléfono',
          id: 'tlf'
        }
      ],
      [{
        label: 'RIF',
        name: 'rif',
        type: 'text',
        required: true,
        placeholder: 'Ingresa el número de RIF',
        id: 'rif'
      }]
    ]
  }

]
