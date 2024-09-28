export const categories = [
  { name: 'Damas Segunda', url: '/torneos/36' },
  { name: 'Damas Tercera ', url: '/torneos/37' },
  { name: 'Damas Cuarta ', url: '/torneos/38' },
  { name: 'Primera Libre', url: '/torneos/40' },
  { name: 'Segunda Libre', url: '/torneos/41' },
  { name: 'Tercera Libre', url: '/torneos/42' },
  { name: 'Cuarta Libre', url: '/torneos/43' },
  { name: 'Quinta Libre', url: '/torneos/44' },
  { name: 'Tercera +45', url: '/torneos/39' },
  { name: 'Sub 14 Tennis Site', url: '/torneos/45' }
]

export const menu = [
  // { name: 'Ranking Apertura 2024', url: '/ranking' },
  { name: 'Ranking Headshoes', url: '/ranking-headshoes' },
  { name: 'Ranking de Clubes', url: '/ranking-clubes' },
  { name: 'Orden de juego', url: '/calendario' },
  { name: 'Jugadores', url: '/jugadores' },
  { name: 'Torneos Anteriores', url: '/torneos-anteriores' },
  { name: 'Reglamento', url: '/reglamento' },
  { name: 'Colaboradores', url: '/colaboradores' },
  { name: 'Nosotros', url: '/nosotros' },
  { name: 'Login', url: '/usuarios/login' }
]

export const rankingOptions = [
  {
    name: 'Damas Segunda',
    category: 9
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
    name: 'Cuarta Libre',
    category: 4
  },
  {
    name: 'Quinta Libre',
    category: 5
  },
  {
    name: 'Tercera +45',
    category: 7
  },
  {
    name: 'Juniors Sub 14',
    category: 10
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

export const products = [
  {
    id: 1,
    title: 'Mate',
    image:
      'https://images.pexels.com/photos/28098015/pexels-photo-28098015/free-photo-of-ciudad-restaurante-acera-relajante.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    price: 10000,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 2,
    title: 'Gorrito Bennie',
    image:
      'https://images.pexels.com/photos/28098015/pexels-photo-28098015/free-photo-of-ciudad-restaurante-acera-relajante.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    price: 7000,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 3,
    title: 'Gorra Champions',
    image:
      'https://images.pexels.com/photos/28098015/pexels-photo-28098015/free-photo-of-ciudad-restaurante-acera-relajante.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    price: 7000,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 4,
    title: 'Gorra',
    image:
      'https://images.pexels.com/photos/28098015/pexels-photo-28098015/free-photo-of-ciudad-restaurante-acera-relajante.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    price: 7000,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 4,
    title: 'Piluso',
    image:
      'https://images.pexels.com/photos/28098015/pexels-photo-28098015/free-photo-of-ciudad-restaurante-acera-relajante.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    price: 7000,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
]
