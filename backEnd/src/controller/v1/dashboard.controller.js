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

    const atletasActivosPercent = (nroAtletasActivos[0].nroActivos / nroAtletas[0].nroAtletas) * 100
    const atletasInactivosPercent = (nroAtletasInactivos[0].nroInactivos / nroAtletas[0].nroAtletas) * 100
    const catchersPercent = (nroCatchers[0].nroCatchers / nroAtletas[0].nroAtletas) * 100
    const pitchersPercent = (nroPitchers[0].nroPitchers / nroAtletas[0].nroAtletas) * 100
    const infieldersPercent = (nroInfielders[0].nroInfielders / nroAtletas[0].nroAtletas) * 100
    const outfieldersPercent = (nroOutfielders[0].nroOutfielders / nroAtletas[0].nroAtletas) * 100

    res.status(200).json({
      data: {
        nroAtletas: nroAtletas[0].nroAtletas,
        nroAtletasActivos: nroAtletasActivos[0].nroActivos,
        nroAtletasInactivos: nroAtletasInactivos[0].nroInactivos,
        nroCatchers: nroCatchers[0].nroCatchers,
        nroPitchers: nroPitchers[0].nroPitchers,
        nroInfielders: nroInfielders[0].nroInfielders,
        nroOutfielders: nroOutfielders[0].nroOutfielders
      },
      percents: {
        total: nroAtletas[0].nroAtletas,
        atletasActivos: atletasActivosPercent,
        atletasInactivos: atletasInactivosPercent,
        catchers: catchersPercent,
        pitchers: pitchersPercent,
        infielders: infieldersPercent,
        outfielders: outfieldersPercent

      }
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const bestAtletasByPosition = async (req, res) => {

}

export const getProporcionAtletas = async (req, res) => {

}
