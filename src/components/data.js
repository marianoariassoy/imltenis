export const categories = [
  { name: 'Primera Libre', url: '/soon' },
  { name: 'Segunda Libre', url: '/soon' },
  { name: 'Tercera Libre', url: '/soon' },
  { name: 'Cuarta Libre', url: '/soon' },
  { name: 'Quinta Libre', url: '/soon' },
  { name: 'Tercera +45', url: '/soon' },
  { name: 'Segunda Damas', url: '/soon' },
  { name: 'Tercera Damas', url: '/soon' },
  { name: 'Cuarta Damas', url: 'soon' }
]

export const menu = [
  { name: 'Ranking Clausura 2023', url: '/ranking-temporada' },
  { name: 'Ranking UrbanKicks', url: '/ranking-urbankicks' },
  { name: 'Ranking de Clubes', url: '/ranking-clubes' },
  { name: 'Torneos Anteriores', url: '/torneos-anteriores' },
  { name: 'Jugadores', url: '/jugadores' },
  { name: 'Colaboradores', url: '/colaboradores' },
  { name: 'Reglamento', url: '/reglamento' },
  { name: 'Nosotros', url: '/nosotros' }
]

export const rankingOptions = [
  {
    name: 'Damas',
    category: 6
  },
  {
    name: '1era',
    category: 1
  },
  {
    name: '2da',
    category: 2
  },

  {
    name: '3ra',
    category: 3
  },
  {
    name: '4ta',
    category: 4
  },
  {
    name: '5ta',
    category: 5
  }
]

export const texts = {
  error: 'Se produjo un error al enviar el formulario.',
  required: 'Completá este dato',
  thanks: '¡Ya estas registrado en nuestro sistema!'
}

export const days = []
for (let i = 1; i <= 31; i++) {
  days.push(i)
}
export const months = []
for (let i = 1; i <= 12; i++) {
  months.push(i)
}
export const years = []
for (let i = 1930; i <= 2020; i++) {
  years.push(i)
}
