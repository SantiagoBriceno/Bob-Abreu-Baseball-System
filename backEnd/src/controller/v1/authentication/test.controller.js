export const test = (req, res) => {
  const { user } = req
  res.send({
    message: 'Pase el middleware, soy admin jeje',
    user
  })
}
