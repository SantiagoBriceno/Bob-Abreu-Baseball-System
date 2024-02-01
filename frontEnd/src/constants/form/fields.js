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

export const registroEspecialFields = [
  {
    title: '',
    campos:
    [
      [
        {
          label: 'Cedula',
          name: 'cedula',
          type: 'text',
          required: true,
          placeholder: 'Cédula del atleta...',
          id: 'cedula_atleta'
        },
        {
          label: 'Fecha',
          name: 'fecha',
          type: 'date',
          required: true,
          placeholder: '',
          id: 'fecha_evento'
        }
      ],
      [
        {
          label: 'Descripción',
          name: 'descripcion',
          type: 'text',
          required: false,
          placeholder: 'motivo de registro',
          id: 'descripción'

        }
      ]

    ]

  }
]
