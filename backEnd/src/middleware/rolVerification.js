export const adminVerification = (req, res, next) => {
  const { rol } = req.user

  if (rol === 'admin') {
    next()
  } else {
    res.status(401).send({
      message: 'No estas autorizado'
    })
  }
}
