export const loginFields = [
  {
    title: 'Iniciar sesión',
    campos: [
      [
        {
          label: 'Usuario',
          name: 'users',
          type: 'text',
          required: true,
          placeholder: 'Ingresa el usuario',
          id: 'users'
        }
      ],
      [
        {
          label: 'Contraseña',
          name: 'password',
          type: 'password',
          required: true,
          placeholder: 'Ingresa la contraseña',
          id: 'password'
        }
      ]
    ]
  }
]

export const lesionesFields = [
  {
    title: 'Lesiones',
    campos: [
      [
        {
          label: 'Cédula del atleta',
          name: 'cedula',
          type: 'select',
          placeholder: 'Cédula del atleta...',
          required: true,
          id: 'id_atleta',
          opt: []
        },
        {
          label: 'Fecha de la lesión',
          name: 'fecha',
          type: 'date',
          placeholder: 'DD/MM/AAAA',
          required: true,
          id: 'fecha'
        }
      ],
      [
        {
          label: 'Descripción de la lesión',
          name: 'descripcion',
          type: 'textarea',
          required: true,
          placeholder: 'Descripción de la lesión...',
          id: 'descripcion'
        }
      ]
    ]
  }
]

export const usuarioRegisterFields = [
  {
    title: 'Registro de usuario',
    campos: [
      [
        {
          label: 'Cédula',
          name: 'cedula',
          type: 'text',
          required: true,
          placeholder: '12345678',
          id: 'cedula'
        },
        {
          label: 'Nombre',
          name: 'nombre',
          type: 'text',
          required: true,
          placeholder: 'César Pausin',
          id: 'nombre'
        }
      ],
      [
        {
          label: 'Username',
          name: 'username',
          type: 'text',
          required: true,
          placeholder: 'andrespausin',
          id: 'username'
        },
        {
          label: 'Contraseña',
          name: 'contraseña',
          type: 'password',
          required: true,
          placeholder: '',
          id: 'password'
        }
      ],
      [
        {
          label: 'Rol',
          name: 'rol',
          type: 'select',
          placeholder: 'Selecciona el rol',
          required: true,
          id: 'rol',
          opt: [
            { value: 'admin', label: 'Administrador' },
            { value: 'deportivo', label: 'Staff deportivo' },
            { value: 'gerente', label: 'Gerente' },
            { value: 'fisioterapeuta', label: 'Fisioterapeuta' }
          ]
        }
      ]
    ]
  }
]

export const usuarioEditFields = (placeholders) => {
  return [
    {
      title: 'Editar usuario',
      campos: [
        [
          {
            label: 'Cédula',
            name: 'cedula',
            type: 'text',
            required: true,
            placeholder: placeholders.cedula,
            id: 'cedula'
          },
          {
            label: 'Nombre',
            name: 'nombre',
            type: 'text',
            required: true,
            placeholder: placeholders.nombre,
            id: 'nombre'
          }
        ],
        [
          {
            label: 'Username',
            name: 'username',
            type: 'text',
            required: true,
            placeholder: placeholders.username,
            id: 'username'
          }
        ],
        [
          {
            label: 'Rol',
            name: 'rol',
            type: 'select',
            placeholder: 'Selecciona el rol',
            required: true,
            id: 'rol',
            opt: [
              { value: 'admin', label: 'Administrador' },
              { value: 'deportivo', label: 'Staff deportivo' },
              { value: 'gerente', label: 'Gerente' },
              { value: 'fisioterapeuta', label: 'Fisioterapeuta' }
            ]
          }
        ]
      ]
    }
  ]
}

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
          placeholder: 'DD/MM/AAAA',
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
        }
      ],
      [
        {
          label: 'Preferecia de bateo',
          name: 'hitting',
          type: 'text',
          required: true,
          placeholder: 'Ingresa la preferencia de bateo',
          id: 'hitting'
        },
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
          id: 'estado'
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

export const atletaEditFields = (placeholders) => {
  return [
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
            placeholder: placeholders.cedula,
            id: 'cedula'
          },
          {
            label: 'Nombre y Apellido',
            name: 'nombre',
            type: 'text',
            required: true,
            placeholder: placeholders.nombre,
            id: 'nombre'
          }
        ],
        [
          {
            label: 'Fecha de nacimiento',
            name: 'fecha_nacimiento',
            type: 'date',
            required: true,
            placeholder: placeholders.fecha_nacimiento,
            id: 'fecha_nacimiento'
          },
          {
            label: 'Lugar de nacimiento',
            name: 'lugar_nacimiento',
            type: 'text',
            required: true,
            placeholder: placeholders.lugar_nacimiento,
            id: 'lugar_nacimiento'
          }
        ],
        [
          {
            label: 'Teléfono',
            name: 'tlf',
            type: 'text',
            required: false,
            placeholder: placeholders.tlf,
            id: 'tlf'
          }
        ],
        [
          {
            label: 'Preferecia de bateo',
            name: 'hitting',
            type: 'text',
            required: true,
            placeholder: placeholders.hitting,
            id: 'hitting'
          },
          {
            label: 'Posición',
            name: 'posicion',
            type: 'text',
            required: true,
            placeholder: placeholders.posicion,
            id: 'posicion'
          },
          {
            label: 'Status',
            name: 'status',
            type: 'text',
            required: true,
            placeholder: placeholders.estado,
            id: 'estado'
          }
        ]
      ]
    }
  ]
}

export const lesionesEditFields = (placeholders, atletas) => {
  return [
    {
      title: 'Lesiones',
      campos: [
        [
          {
            label: 'Cédula del atleta',
            name: 'cedula',
            type: 'select',
            required: true,
            id: 'id_atleta',
            placeholder: placeholders.cedula,
            opt: atletas.map((atleta) => {
              return { value: atleta.cedula, label: atleta.nombre }
            })
          },
          {
            label: 'Fecha de la lesión',
            name: 'fecha',
            type: 'date',
            placeholder: placeholders.fecha,
            required: true,
            id: 'fecha'
          }
        ],
        [
          {
            label: 'Descripción de la lesión',
            name: 'descripcion',
            type: 'textarea',
            required: true,
            placeholder: placeholders.descripcion,
            id: 'descripcion'
          }
        ]
      ]
    }
  ]
}

// NO ESTA TERMINADO
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
          placeholder: 'Nombre del representante...',
          id: 'nombre'
        },
        {
          label: 'Cédula del atleta',
          name: 'cedula_atleta',
          type: 'select',
          required: true,
          placeholder: 'Cédula del atleta...',
          id: 'cedula_atleta',
          opt: []
        }
      ],
      [
        {
          label: 'Teléfono',
          name: 'tlf',
          type: 'text',
          required: true,
          placeholder: '0412-22222',
          id: 'tlf'
        }, {
          label: 'RIF',
          name: 'rif',
          type: 'text',
          required: true,
          placeholder: 'J-3145123-00',
          id: 'rif'
        }
      ],
      [{
        label: 'Correo Electronico',
        name: 'correo',
        type: 'text',
        required: true,
        placeholder: 'Example@gmail.com',
        id: 'correo'
      }],
      [

        {
          label: 'Dirección',
          name: 'direccion',
          type: 'text',
          required: true,
          placeholder: 'Carabobo, Valencia, Urb. La Isabelica, Calle 3, Casa 2-3',
          id: 'direccion'
        }
      ],
      [
        {
          label: 'Sexo',
          name: 'sexo',
          type: 'select',
          placeholder: 'Selecciona el sexo...',
          required: true,
          id: 'sexo',
          opt: [{
            value: 'M',
            label: 'Masculino'
          },
          {
            value: 'F',
            label: 'Femenino'
          }]
        },
        {
          label: 'Estatura',
          name: 'estatura',
          type: 'text',
          required: true,
          placeholder: '190 cm',
          id: 'estatura'
        }
      ]
    ]
  }

]

export const representanteEditFields = (placeholders) => {
  return [
    {
      campos: [
        [
          {
            label: 'Cédula',
            name: 'cedula',
            type: 'text',
            required: true,
            placeholder: placeholders.cedula,
            id: 'cedula'
          },
          {
            label: 'Nombre',
            name: 'nombre',
            type: 'text',
            required: true,
            placeholder: placeholders.nombre,
            id: 'nombre'
          },
          {
            label: 'Cédula del atleta',
            name: 'cedula_atleta',
            type: 'select',
            required: true,
            placeholder: placeholders.cedula_atleta,
            id: 'cedula_atleta',
            opt: []
          }
        ],
        [
          {
            label: 'Teléfono',
            name: 'tlf',
            type: 'text',
            required: true,
            placeholder: placeholders.tlf,
            id: 'tlf'
          }, {
            label: 'RIF',
            name: 'rif',
            type: 'text',
            required: true,
            placeholder: placeholders.rif,
            id: 'rif'
          }
        ],
        [{
          label: 'Correo Electronico',
          name: 'correo',
          type: 'text',
          required: true,
          placeholder: placeholders.correo,
          id: 'correo'
        }],
        [

          {
            label: 'Dirección',
            name: 'direccion',
            type: 'text',
            required: true,
            placeholder: placeholders.direccion,
            id: 'direccion'
          }
        ],
        [
          {
            label: 'Sexo',
            name: 'sexo',
            type: 'select',
            placeholder: 'Selecciona el sexo...',
            required: true,
            id: 'sexo',
            opt: [{
              value: 'M',
              label: 'Masculino'
            },
            {
              value: 'F',
              label: 'Femenino'
            }]
          },
          {
            label: 'Estatura',
            name: 'estatura',
            type: 'text',
            required: true,
            placeholder: placeholders.estatura,
            id: 'estatura'
          }
        ]
      ]
    }
  ]
}

// NO ESTA TERMINADO
export const registroEspecialFields = [
  {
    title: '',
    campos:
    [
      [
        {
          label: 'Cédula',
          name: 'cedula',
          type: 'select',
          required: true,
          placeholder: 'Cédula del atleta...',
          id: 'cedula',
          opt: [

          ]
        },
        {
          label: 'Fecha',
          name: 'fecha',
          type: 'date',
          required: true,
          placeholder: 'DD/MM/AAAA',
          id: 'fecha_evento'
        }
      ],
      [
        {
          label: 'Descripción',
          name: 'descripcion',
          type: 'textarea',
          required: false,
          placeholder: 'Motivo de registro',
          id: 'descripcion'

        }
      ]

    ]

  }
]

export const registroEspecialEditFields = (placeholders, atletas) => {
  return [
    {
      title: '',
      campos:
      [
        [
          {
            label: 'Cédula',
            name: 'cedula',
            type: 'select',
            required: true,
            placeholder: placeholders.nombre,
            id: 'cedula',
            opt: atletas.map((atleta) => {
              return { value: atleta.cedula, label: atleta.nombre }
            })
          },
          {
            label: 'Fecha',
            name: 'fecha',
            type: 'date',
            required: true,
            placeholder: placeholders.fecha_evento,
            id: 'fecha_evento'
          }
        ],
        [
          {
            label: 'Descripción',
            name: 'descripcion',
            type: 'textarea',
            required: false,
            placeholder: placeholders.descripcion,
            id: 'descripcion'

          }
        ]

      ]

    }
  ]
}

export const hittingFields = [
  {
    title: 'Datos de bateo',
    campos: [
      [
        {
          label: 'Cédula del atleta',
          name: 'cedula',
          type: 'select',
          required: true,
          placeholder: 'Cédula del atleta...',
          id: 'id_atleta',
          opt: []
        }
      ],
      [
        {
          label: 'Agudeza visual',
          name: 'agudeza_visual',
          type: 'number',
          required: false,
          placeholder: 'Agudeza visual del atleta',
          id: 'agudeza_visual'
        },
        {
          label: 'Bat speed',
          name: 'bat_speed',
          type: 'number',
          required: false,
          placeholder: 'Velocidad del bate',
          id: 'bat_speed'
        }
      ],
      [
        {
          label: 'coordinación de las manos',
          name: 'coordinacion_manos',
          type: 'number',
          required: false,
          placeholder: 'Coordinación de las manos',
          id: 'coord_dos_manos'
        },
        {
          label: 'Ritmo y balance',
          name: 'ritmo_balance',
          type: 'number',
          required: false,
          placeholder: 'Ritmo y balance',
          id: 'ritmo_balance'
        }
      ],
      [
        {
          label: 'Reacción a zona de strike',
          name: 'reaccion_zona_strike',
          type: 'number',
          required: false,
          placeholder: 'Reacción a zona de strike',
          id: 'rec_zona_strike'
        },
        {
          label: 'Reacción a pitcheos',
          name: 'reaccion_pitcheos',
          type: 'number',
          required: false,
          placeholder: 'Reacción a pitcheos',
          id: 'rec_pitcheos'
        }
      ],
      [
        {
          label: 'Control del bate',
          name: 'control_bate',
          type: 'number',
          required: false,
          placeholder: 'Control del bate',
          id: 'control_bate'
        },
        {
          label: 'Ruta del bate',
          name: 'ruta_del_bate',
          type: 'number',
          required: false,
          placeholder: 'Ruta del bate',
          id: 'ruta_del_bate'
        }
      ],
      [
        {
          label: 'Fecha de Evaluación',
          name: 'fecha_evaluacion',
          type: 'date',
          required: false,
          placeholder: 'Fecha de evaluación',
          id: 'fecha_evaluacion'
        }
      ]
    ]
  }
]

export const hittingEditFields = (placeholders) => {
  return [
    {
      title: 'Datos de bateo',
      campos: [
        [
          {
            label: 'Cédula del atleta',
            name: 'cedula',
            type: 'text',
            required: true,
            placeholder: placeholders.id_atleta,
            id: 'id_atleta'
          }
        ],
        [
          {
            label: 'Agudeza visual',
            name: 'agudeza_visual',
            type: 'number',
            required: false,
            placeholder: placeholders.agudeza_visual,
            id: 'agudeza_visual'
          },
          {
            label: 'Bat speed',
            name: 'bat_speed',
            type: 'number',
            required: false,
            placeholder: placeholders.bat_speed,
            id: 'bat_speed'
          }
        ],
        [
          {
            label: 'coordinación de las manos',
            name: 'coordinacion_manos',
            type: 'number',
            required: false,
            placeholder: placeholders.coord_dos_manos,
            id: 'coord_dos_manos'
          },
          {
            label: 'Ritmo y balance',
            name: 'ritmo_balance',
            type: 'number',
            required: false,
            placeholder: placeholders.ritmo_balance,
            id: 'ritmo_balance'
          }
        ],
        [
          {
            label: 'Reacción a zona de strike',
            name: 'reaccion_zona_strike',
            type: 'number',
            required: false,
            placeholder: placeholders.rec_zona_strike,
            id: 'rec_zona_strike'
          },
          {
            label: 'Reacción a pitcheos',
            name: 'reaccion_pitcheos',
            type: 'number',
            required: false,
            placeholder: placeholders.rec_pitcheos,
            id: 'rec_pitcheos'
          }
        ],
        [
          {
            label: 'Control del bate',
            name: 'control_bate',
            type: 'number',
            required: false,
            placeholder: placeholders.control_bate,
            id: 'control_bate'
          },
          {
            label: 'Ruta del bate',
            name: 'ruta_del_bate',
            type: 'number',
            required: false,
            placeholder: placeholders.ruta_del_bate,
            id: 'ruta_del_bate'
          }
        ]
      ]
    }
  ]
}

export const throwingFields = [
  {
    title: 'Datos de lanzamiento',
    campos: [
      [
        {
          label: 'Cédula del atleta',
          name: 'cedula',
          type: 'select',
          required: true,
          placeholder: 'Cédula del atleta...',
          id: 'id_atleta',
          opt: []
        }
      ],
      [
        {
          label: 'Lanzamiento a primera',
          name: 'lanzamiento_primera',
          type: 'number',
          required: false,
          placeholder: 'Lanzamiento a primera',
          id: 'lanzamiento_primera'
        },
        {
          label: 'Lanzamiento a segunda',
          name: 'lanzamiento_segunda',
          type: 'number',
          required: false,
          placeholder: 'Lanzamiento a segunda',
          id: 'lanzamiento_segunda'
        }
      ],
      [
        {
          label: 'Lanzamiento a tercera',
          name: 'lanzamiento_tercera',
          type: 'number',
          required: false,
          placeholder: 'Lanzamiento a tercera',
          id: 'lanzamiento_tercera'
        },
        {
          label: 'Lanzamiento a home',
          name: 'lanzamiento_home',
          type: 'number',
          required: false,
          placeholder: 'Lanzamiento a home',
          id: 'lanzamiento_home'
        }
      ],
      [
        {
          label: 'Pop time',
          name: 'pop_time',
          type: 'number',
          required: false,
          placeholder: 'Pop time',
          id: 'pop_time'
        }
      ],
      [
        {
          label: 'Fluidez de brazo',
          name: 'fluidez_brazo',
          type: 'number',
          required: false,
          placeholder: 'Fluidez de brazo',
          id: 'fluidez_brazo'
        },
        {
          label: 'Brazo rápido',
          name: 'brazo_rapido',
          type: 'number',
          required: false,
          placeholder: 'Brazo rápido',
          id: 'brazo_rapido'
        }
      ],
      [
        {
          label: 'Facilidad de movimiento',
          name: 'facilidad_movimiento',
          type: 'number',
          required: false,
          placeholder: 'Facilidad de movimiento',
          id: 'facilidad_movimiento'
        },
        {
          label: 'Linealidad de lanzamiento',
          name: 'linealidad_lanzamiento',
          type: 'number',
          required: false,
          placeholder: 'Linealidad de lanzamiento',
          id: 'linealidad_lanzamiento'
        }
      ],
      [
        {
          label: 'Fecha de Evaluación',
          name: 'fecha_evaluacion',
          type: 'date',
          required: false,
          placeholder: 'Fecha de evaluación',
          id: 'fecha_evaluacion'
        }
      ]
    ]
  }
]

export const throwingEditFields = (placeholders) => {
  return [
    {
      title: 'Datos de lanzamiento',
      campos: [
        [
          {
            label: 'Cédula del atleta',
            name: 'cedula',
            type: 'text',
            required: true,
            placeholder: placeholders.id_atleta,
            id: 'id_atleta'
          }
        ],
        [
          {
            label: 'Lanzamiento a primera',
            name: 'lanzamiento_primera',
            type: 'number',
            required: false,
            placeholder: placeholders.lanzamiento_primera,
            id: 'lanzamiento_primera'
          },
          {
            label: 'Lanzamiento a segunda',
            name: 'lanzamiento_segunda',
            type: 'number',
            required: false,
            placeholder: placeholders.lanzamiento_segunda,
            id: 'lanzamiento_segunda'
          }
        ],
        [
          {
            label: 'Lanzamiento a tercera',
            name: 'lanzamiento_tercera',
            type: 'number',
            required: false,
            placeholder: placeholders.lanzamiento_tercera,
            id: 'lanzamiento_tercera'
          },
          {
            label: 'Lanzamiento a home',
            name: 'lanzamiento_home',
            type: 'number',
            required: false,
            placeholder: placeholders.lanzamiento_home,
            id: 'lanzamiento_home'
          }
        ],
        [
          {
            label: 'Pop time',
            name: 'pop_time',
            type: 'number',
            required: false,
            placeholder: placeholders.pop_time,
            id: 'pop_time'
          }
        ],
        [
          {
            label: 'Fluidez de brazo',
            name: 'fluidez_brazo',
            type: 'number',
            required: false,
            placeholder: placeholders.fluidez_brazo,
            id: 'fluidez_brazo'
          },
          {
            label: 'Brazo rápido',
            name: 'brazo_rapido',
            type: 'number',
            required: false,
            placeholder: placeholders.brazo_rapido,
            id: 'brazo_rapido'
          }
        ],
        [
          {
            label: 'Facilidad de movimiento',
            name: 'facilidad_movimiento',
            type: 'number',
            required: false,
            placeholder: placeholders.facilidad_movimiento,
            id: 'facilidad_movimiento'
          },
          {
            label: 'Linealidad de lanzamiento',
            name: 'linealidad_lanzamiento',
            type: 'number',
            required: false,
            placeholder: placeholders.linealidad_lanzamiento,
            id: 'linealidad_lanzamiento'
          }
        ]
      ]
    }
  ]
}

export const fieldingFields = [
  {
    title: 'Datos de fildeo',
    campos: [
      [
        {
          label: 'Cédula del atleta',
          name: 'cedula',
          type: 'select',
          required: true,
          placeholder: 'Cédula del atleta...',
          id: 'id_atleta',
          opt: []
        }
      ],
      [
        {
          label: 'Getting jump',
          name: 'getting_jump',
          type: 'number',
          required: false,
          placeholder: 'Escala de 1 a 10',
          id: 'getting_jump'
        },
        {
          label: 'Ruta',
          name: 'ruta',
          type: 'number',
          required: false,
          placeholder: 'Escala de 1 a 10',
          id: 'ruta'
        }
      ],
      [
        {
          label: 'Alcance',
          name: 'alcance',
          type: 'number',
          required: false,
          placeholder: 'Escala de 1 a 10',
          id: 'alcance'
        },
        {
          label: 'Manos suaves',
          name: 'manos_suaves',
          type: 'number',
          required: false,
          placeholder: 'Escala de 1 a 10',
          id: 'manos_suaves'
        }
      ],
      [
        {
          label: 'Control del cuerpo',
          name: 'control_cuerpo',
          type: 'number',
          required: false,
          placeholder: 'Escala de 1 a 10',
          id: 'control_cuerpo'
        },
        {
          label: 'Juego de pies',
          name: 'juego_de_pie',
          type: 'number',
          required: false,
          placeholder: 'Escala de 1 a 10',
          id: 'juego_de_pie'
        }
      ],
      [
        {
          label: 'Anticipación',
          name: 'anticipacion',
          type: 'number',
          required: false,
          placeholder: 'Escala de 1 a 10',
          id: 'anticipacion'
        },
        {
          label: 'Energía',
          name: 'energia',
          type: 'number',
          required: false,
          placeholder: 'Escala de 1 a 10',
          id: 'energia'
        }
      ],
      [
        {
          label: 'Fecha de Evaluación',
          name: 'fecha_evaluacion',
          type: 'date',
          required: false,
          placeholder: 'Fecha de evaluación',
          id: 'fecha_evaluacion'
        }
      ]
    ]
  }
]

export const fieldingEditFields = (placeholders) => {
  return [
    {
      title: 'Datos de fildeo',
      campos: [
        [
          {
            label: 'Cédula del atleta',
            name: 'cedula',
            type: 'text',
            required: true,
            placeholder: placeholders.id_atleta,
            id: 'id_atleta'
          }
        ],
        [
          {
            label: 'Getting jump',
            name: 'getting_jump',
            type: 'number',
            required: false,
            placeholder: placeholders.getting_jump,
            id: 'getting_jump'
          },
          {
            label: 'Ruta',
            name: 'ruta',
            type: 'number',
            required: false,
            placeholder: placeholders.ruta,
            id: 'ruta'
          }
        ],
        [
          {
            label: 'Alcance',
            name: 'alcance',
            type: 'number',
            required: false,
            placeholder: placeholders.alcance,
            id: 'alcance'
          },
          {
            label: 'Manos suaves',
            name: 'manos_suaves',
            type: 'number',
            required: false,
            placeholder: placeholders.manos_suaves,
            id: 'manos_suaves'
          }
        ],
        [
          {
            label: 'Control del cuerpo',
            name: 'control_cuerpo',
            type: 'number',
            required: false,
            placeholder: placeholders.control_cuerpo,
            id: 'control_cuerpo'
          },
          {
            label: 'Juego de pies',
            name: 'juego_de_pie',
            type: 'number',
            required: false,
            placeholder: placeholders.juego_de_pie,
            id: 'juego_de_pie'
          }
        ],
        [
          {
            label: 'Anticipación',
            name: 'anticipacion',
            type: 'number',
            required: false,
            placeholder: placeholders.anticipacion,
            id: 'anticipacion'
          },
          {
            label: 'Energía',
            name: 'energia',
            type: 'number',
            required: false,
            placeholder: placeholders.energia,
            id: 'energia'
          }
        ]
      ]
    }
  ]
}

export const runningFields = [
  {
    title: 'Datos de atletismo',
    campos: [
      [
        {
          label: 'Cédula del atleta',
          name: 'cedula',
          type: 'select',
          required: true,
          placeholder: 'Cédula del atleta...',
          id: 'id_atleta',
          opt: []
        }
      ],
      [
        {
          label: 'Tiempo 60 yardas',
          name: 'sesenta_yardas',
          type: 'number',
          required: false,
          placeholder: 'Tiempo en segundos',
          id: 'sesenta_yardas'
        },
        {
          // agregar en la base de datos
          label: 'Home to first',
          name: 'home_to_first',
          type: 'number',
          required: false,
          placeholder: 'Tiempo en segundos',
          id: 'home_to_first'
        }
      ], [
        {
          label: 'Fecha de Evaluación',
          name: 'fecha_evaluacion',
          type: 'date',
          required: false,
          placeholder: 'Fecha de evaluación',
          id: 'fecha_evaluacion'
        }
      ]
    ]
  }
]

export const runningEditFields = (placeholders) => {
  return [
    {
      title: 'Datos de atletismo',
      campos: [
        [
          {
            label: 'Cédula del atleta',
            name: 'cedula',
            type: 'text',
            required: true,
            placeholder: placeholders.id_atleta,
            id: 'id_atleta'
          }
        ],
        [
          {
            label: 'Tiempo 60 yardas',
            name: 'sesenta_yardas',
            type: 'number',
            required: false,
            placeholder: placeholders.velocidad_sesenta,
            id: 'sesenta_yardas'
          },
          {
            // agregar en la base de datos
            label: 'Home to first',
            name: 'home_to_first',
            type: 'number',
            required: false,
            placeholder: placeholders.velocidad_home_to_first,
            id: 'home_to_first'
          }
        ]
      ]
    }
  ]
}

export const datosGeneralesLabel = [
  'Estatura máxima (cm)',
  'Percentil de talla (%)',
  'Longitud de pie (cm)',
  'Estatura sentado (cm)',
  'Envergadura (cm)',
  'Índice de masa corporal (kg/m2)',
  'IMC Ideal (kg/m2)',
  'Tasa metabólica basa (TMB)',
  'Calorías necesarias (kcal)',
  'Peso corporal (kg)',
  'Percentil peso (%)',
  'Peso ideal (kg)',
  'Calorías diarias (kcal)'
]

export const datosGeneralesPlaceholders = [
  'Ingresa la estatura máxima',
  'Ingresa el percentil de la talla',
  'Ingresa la longitud del pie',
  'Ingresa la estatura sentado',
  'Ingresa la envergadura',
  'Ingresa el índice de masa corporal',
  'Ingresa el IMC ideal',
  'Ingresa la tasa metabólica basal',
  'Ingresa las calorías necesarias',
  'Ingresa el peso corporal',
  'Ingresa el percentil de peso',
  'Ingresa el peso ideal',
  'Ingresa el peso corporal',
  'Ingresa las calorías diarias'
]

export const perimetrosLabel = [
  'Cabeza (cm)',
  'Cuello (cm)',
  'Brazo relajado (cm)',
  'Brazo contraído (cm)',
  'Antebrazo (cm)',
  'Muñeca (cm)',
  'Tórax (cm)',
  'Espalda (cm)',
  'Muslo superior (cm)',
  'Muslo medio (cm)',
  'Pierna (cm)',
  'Tobillo (cm)'
]

export const perimetrosPlaceholders = [
  'Ingresa la circunferencia de la cabeza',
  'Ingresa la longitud del cuello',
  'Ingresa la longitud del brazo relajado',
  'Ingresa la longitud del brazo contraído',
  'Ingresa la longitud del antebrazo',
  'Ingresa la longitud de la muñeca',
  'Ingresa la longitud del tórax',
  'Ingresa la longitud de la espalda',
  'Ingresa la longitud del muslo superior',
  'Ingresa la longitud del muslo medio',
  'Ingresa la longitud de la pierna',
  'Ingresa la longitud del tobillo'
]

export const iccImcLabel = [
  'Cintura (cm)',
  'Cadera (cm)',
  'Relación cintura cadera (cm)',
  'Masa grasa corporal (kg)',
  'Ideal masa grasa corporal (kg)',
  'Masa magra corporal (kg)',
  'Ideal masa magra corporal (kg)'

]

export const iccImcPlaceholders = [
  'Ingresa la longitud de la cintura',
  'Ingresa la longitud de la cadera',
  'Ingresa la relación cintura cadera',
  'Ingresa la masa grasa corporal',
  'Ingresa la masa grasa corporal ideal',
  'Ingresa la masa magra corporal',
  'Ingresa la masa magra corporal ideal'
]

export const perfilesFotograficosLabel = [
  'Perfil frontal',
  'Perfil lateral',
  'Perfil posterior'
]
