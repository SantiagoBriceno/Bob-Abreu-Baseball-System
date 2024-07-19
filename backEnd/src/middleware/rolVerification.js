const administrativoVerification = (req, res, next) => {
  const { rol } = req.user

  if (rol === 'administrativo') {
    next()
  } else {
    res.status(401).send({
      message: 'No estas autorizado'
    })
  }
}

const deportivoVerification = (req, res, next) => {
  const { rol } = req.user

  if (rol === 'deportivo') {
    next()
  } else {
    res.status(401).send({
      message: 'No estas autorizado'
    })
  }
}

const fisioterapeutaVerification = (req, res, next) => {
  const { rol } = req.user

  if (rol === 'fisioterapeuta') {
    next()
  } else {
    res.status(401).send({
      message: 'No estas autorizado'
    })
  }
}

const gerenteVerification = (req, res, next) => {
  const { rol } = req.user

  if (rol === 'gerente') {
    next()
  } else {
    res.status(401).send({
      message: 'No estas autorizado'
    })
  }
}

const adminPermission = (req, res, next) => {
  const { rol } = req.user

  if (rol === 'gerente' || rol === 'administrativo') {
    next()
  } else {
    res.status(401).send({
      message: 'No estas autorizado'
    })
  }
}

export default {
  administrativoVerification,
  deportivoVerification,
  fisioterapeutaVerification,
  gerenteVerification,
  adminPermission
}
