export const atletaFields = [
  {
    title: 'Datos del atleta',
    campos:
    [
      [
        {
          label: 'Cédula',
          name: 'cedula',
          type: 'number',
          required: true,
          placeholder: 'Ingresa el número de cédula',
          id: 'cedula'
        },
        {
          label: 'Nombre y Apellido',
          name: 'nombre',
          type: 'text',
          required: true,
          placeholder: 'Ingresa el nombre completo',
          id: 'nombre'
        }
      ],
      [
        {
          label: 'Fecha de nacimiento',
          name: 'fecha_nacimiento',
          type: 'date',
          required: true,
          placeholder: '',
          id: 'fecha_nacimiento'
        },
        {
          label: 'Lugar de nacimiento',
          name: 'lugar_nacimiento',
          type: 'text',
          required: true,
          placeholder: 'Ingresa el lugar de nacimiento',
          id: 'lugar_nacimiento'
        }
      ],
      [
        {
          label: 'Teléfono',
          name: 'tlf',
          type: 'text',
          required: false,
          placeholder: 'Ingresa el número de teléfono',
          id: 'tlf'
        },
        {
          label: 'Correo',
          name: 'correo',
          type: 'email',
          required: false,
          placeholder: 'Ingresa el correo electrónico',
          id: 'correo'
        }
      ],
      [
        {
          label: 'Posición',
          name: 'posicion',
          type: 'text',
          required: true,
          placeholder: 'Ingresa la posición',
          id: 'posicion'
        },
        {
          label: 'Status',
          name: 'status',
          type: 'text',
          required: true,
          placeholder: 'Ingresa el status',
          id: 'status'
        }
      ],
      [
        {
          label: 'Foto',
          name: 'foto',
          type: 'file',
          required: false,
          placeholder: 'Ingresa la foto',
          id: 'foto'
        }
      ]
    ]
  }
]

export const fichaAntropometricaFields = [
  {
    title: 'Datos generales',
    campos: [
      [
        {
          label: 'Estatura máxima',
          name: 'estatura_maxima',
          type: 'number',
          required: true,
          placeholder: 'Ingresa la estatura máxima',
          id: 'estatura_maxima'
        },
        {
          label: 'Percentil de talla',
          name: 'percentil_talla',
          type: 'number',
          required: true,
          placeholder: 'Ingresa el percentil de la estatura',
          id: 'percentil_talla'
        }
      ],
      [
        {
          label: 'Longitud de pie',
          name: 'longitud_de_pie',
          type: 'number',
          required: true,
          placeholder: 'Ingresa la longitud del pie',
          id: 'longitud_de_pie'
        }
      ],
      [
        {
          label: 'Estatura sentado',
          name: 'longitud_sentado',
          type: 'number',
          required: true,
          placeholder: 'Ingresa la estatura sentado',
          id: 'longitud_sentado'
        }
      ],
      [
        {
          label: 'Envergadura',
          name: 'envergadura',
          type: 'number',
          required: true,
          placeholder: 'Ingresa la envergadura',
          id: 'envergadura'
        }
      ],
      [
        {
          label: 'Peso corporal',
          name: 'peso_corporal',
          type: 'number',
          required: true,
          placeholder: 'Ingresa el peso corporal',
          id: 'peso_corporal'
        },
        {
          label: 'Peso ideal',
          name: 'peso_ideal',
          type: 'number',
          required: true,
          id: 'peso_ideal'
        },
        {
          label: 'Percentil peso',
          name: 'percentil_peso',
          type: 'number',
          required: true,
          id: 'percentil_peso'
        }
      ],
      [
        {
          label: 'IMC (Índice de masa corporal)',
          name: 'imc',
          type: 'number',
          required: true,
          id: 'imc'
        },
        {
          label: 'IMC Ideal',
          name: 'imc_ideal',
          type: 'number',
          required: true,
          placeholder: 'Ingresa el IMC ideal',
          id: 'imc_ideal'
        }
      ],
      [
        {
          label: 'Tasa metabólica basal',
          name: 'tmb',
          type: 'number',
          required: true,
          id: 'tmb'
        },
        {
          label: 'Calorías diarias',
          name: 'calorias_diarias',
          type: 'number',
          required: true,
          id: 'calorias_diarias'
        }
      ]
    ]
  },
  {
    title: 'Perímetros corporales',
    campos: [
      [
        {
          label: 'Circunferencia de la cabeza',
          name: 'cabeza',
          type: 'number',
          required: true,
          placeholder: 'Ingresa la circunferencia de la cabeza',
          id: 'cabeza'
        },
        {
          label: 'Longitud del cuello',
          name: 'cuello',
          type: 'number',
          required: true,
          placeholder: 'Ingresa la longitud del cuello',
          id: 'cuello'
        }
      ],
      [
        {
          label: 'Brazo relajado',
          name: 'brazo_relajado',
          type: 'number',
          required: true,
          placeholder: 'Ingresa la longitud del brazo relajado',
          id: 'brazo_relajado'
        },
        {
          label: 'Brazo contraído',
          name: 'brazo_contraido',
          type: 'number',
          required: true,
          placeholder: 'Ingresa la longitud del brazo contraído',
          id: 'brazo_contraido'
        }
      ],
      [
        {
          label: 'Antebrazo',
          name: 'antebrazo',
          type: 'number',
          required: true,
          placeholder: 'Ingresa la longitud del antebrazo',
          id: 'antebrazo'
        },
        {
          label: 'Muñeca',
          name: 'muneca',
          type: 'number',
          required: true,
          placeholder: 'Ingresa la longitud de la muñeca',
          id: 'muneca'
        }
      ],
      [
        {
          label: 'Tórax',
          name: 'torax',
          type: 'number',
          required: true,
          placeholder: 'Ingresa la longitud del tórax',
          id: 'torax'
        },
        {
          label: 'Espalda',
          name: 'espalda',
          type: 'number',
          required: true,
          placeholder: 'Ingresa la longitud de la espalda',
          id: 'espalda'
        }
      ],
      [
        {
          label: 'Muslo superior',
          name: 'muslo_superior',
          type: 'number',
          required: true,
          placeholder: 'Ingresa la longitud del muslo superior',
          id: 'muslo_superior'
        },
        {
          label: 'Muslo medio',
          name: 'muslo_medio',
          type: 'number',
          required: true,
          placeholder: 'Ingresa la longitud del muslo medio',
          id: 'muslo_medio'
        }
      ],
      [
        {
          label: 'Longitud de la pierna',
          name: 'pierna',
          type: 'number',
          required: true,
          placeholder: 'Ingresa la longitud de la pierna',
          id: 'pierna'
        },
        {
          label: 'Longitud del tobillo',
          name: 'tobillo',
          type: 'number',
          required: true,
          placeholder: 'Ingresa la longitud del tobillo',
          id: 'tobillo'
        }

      ]
    ]
  },
  {
    title: 'Indice cintura-cadera',
    campos: [
      [
        {
          label: 'Cintura',
          name: 'cintura',
          type: 'number',
          required: true,
          placeholder: 'Ingresa la longitud de la cintura',
          id: 'cintura'
        },
        {
          label: 'Cadera',
          name: 'cadera',
          type: 'number',
          required: true,
          placeholder: 'Ingresa la longitud de la cadera',
          id: 'cadera'
        },
        {
          label: 'Relación cintura cadera',
          name: 'relacion_cintura_cadera',
          type: 'number',
          required: true,
          id: 'relacion_cintura_cadera'
        }
      ]
    ]
  },
  {
    title: 'Índices de masa corporal',
    campos: [
      [
        {
          label: 'Masa grasa corporal',
          name: 'masa_grasa_corporal',
          type: 'number',
          required: true,
          id: 'masa_grasa_corporal'
        },
        {
          label: 'Ideal Masa grasa corporal',
          name: 'ideal_masa_grasa',
          type: 'number',
          required: true,
          placeholder: 'Ingresa la masa grasa corporal ideal',
          id: 'ideal_masa_grasa'
        }
      ],
      [
        {
          label: 'Masa magra corporal',
          name: 'masa_magra_corporal',
          type: 'number',
          required: true,
          id: 'masa_magra_corporal'
        },
        {
          label: 'Ideal Masa magra corporal',
          name: 'ideal_masa_magra',
          type: 'number',
          required: true,
          placeholder: 'Ingresa la masa magra corporal ideal',
          id: 'ideal_masa_magra'
        }
      ]
    ]
  },
  {
    title: 'Perfiles fotográficos',
    campos: [
      [
        {
          label: 'Foto frontal',
          name: 'frente',
          type: 'file',
          required: true,
          id: 'frente'
        },
        {
          label: 'Foto lateral',
          name: 'lateral',
          type: 'file',
          required: true,
          id: 'lateral'
        },
        {
          label: 'Foto posterior',
          name: 'espalda',
          type: 'file',
          required: true,
          id: 'espalda'
        }
      ]
    ]
  }
]

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
