export const categories = [
  { name: 'Damas Tercera', url: '/torneos/34' },
  { name: 'Damas Cuarta ', url: '/torneos/35' },
  { name: 'Primera Libre', url: '/torneos/28' },
  { name: 'Segunda Libre', url: '/torneos/29' },
  { name: 'Tercera Libre', url: '/torneos/30' },
  { name: 'Tercera +45', url: '/torneos/33' },
  { name: 'Cuarta Libre', url: '/torneos/31' },
  { name: 'Quinta Libre', url: '/torneos/32' }
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
