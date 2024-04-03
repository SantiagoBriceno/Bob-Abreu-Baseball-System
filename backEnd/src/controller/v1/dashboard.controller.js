import service from '../../service/v1/dashboard.service.js'

export const getDataAtletas = async (req, res) => {
  try {
    const nroAtletas = await service.getNroAtletas()
    const nroAtletasActivos = await service.getNroAtletasActivos()
    const nroAtletasInactivos = await service.getNroAtletasInactivos()
    const nroCatchers = await service.getCantidadCatchers()
    const nroPitchers = await service.getCantidadPitchers()
    const nroInfielders = await service.getCantidadInfielders()
    const nroOutfielders = await service.getCantidadOutfielders()

    console.log(nroAtletas)

    res.status(200).json({
      nroAtletas: nroAtletas[0].nroAtletas,
      nroAtletasActivos: nroAtletasActivos[0].nroActivos,
      nroAtletasInactivos: nroAtletasInactivos[0].nroInactivos,
      nroCatchers: nroCatchers[0].nroCatchers,
      nroPitchers: nroPitchers[0].nroPitchers,
      nroInfielders: nroInfielders[0].nroInfielders,
      nroOutfielders: nroOutfielders[0].nroOutfielders
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const bestAtletasByPosition = async (req, res) => {

}
