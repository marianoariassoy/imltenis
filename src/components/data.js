export const categories = [
  { name: 'Damas Segunda', url: '/presentacion' },
  { name: 'Damas Tercera ', url: '/presentacion' },
  { name: 'Damas Cuarta ', url: '/presentacion' },
  { name: 'Primera Libre', url: '/presentacion' },
  { name: 'Segunda Libre', url: '/presentacion' },
  { name: 'Tercera Libre', url: '/presentacion' },
  { name: 'Cuarta Libre', url: '/presentacion' },
  { name: 'Quinta Libre', url: '/presentacion' },
  { name: 'Tercera +45', url: '/presentacion' },
  { name: 'Juniors', url: '/presentacion' }
]

export const menu = [
  // { name: 'Ranking Apertura 2024', url: '/ranking' },
  { name: 'Ranking Headshoes', url: '/ranking-headshoes' },
  { name: 'Ranking de Clubes', url: '/ranking-clubes' },
  { name: 'Jugadores', url: '/jugadores' },
  { name: 'Torneos Anteriores', url: '/torneos-anteriores' },
  { name: 'Reglamento', url: '/reglamento' },
  { name: 'Login', url: '/usuarios/login' },
  { name: 'Nosotros', url: '/nosotros' }
]

export const rankingOptions = [
  {
    name: 'Damas Segunda',
    category: 8
  },
  {
    name: 'Damas Tercera',
    category: 6
  },
  {
    name: 'Damas Cuarta',
    category: 8
  },
  {
    name: 'Primera Libre',
    category: 1
  },
  {
    name: 'Segunda Libre',
    category: 2
  },
  {
    name: 'Tercera Libre',
    category: 3
  },
  {
    name: 'Tercera +45',
    category: 7
  },
  {
    name: 'Cuarta Libre',
    category: 4
  },
  {
    name: 'Quinta Libre',
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
