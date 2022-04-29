const dictionary = {
  'slr': 'mirror',
  'digital': 'digital',
  'mirrorless': 'mirrorless',
  // '-': 10,
  'hd': 1,
  'full-hd': 2,
  '4K': 4,
  '5K': 5,
  'suv': 'jeep',
  'sedan': 'sedan',
  'universal': 'universal',
  'hatchback': 'hatchback',
  'jeep': 'jeep',
  'cupe': 'cupe',
  'mechanic': 'mechanic',
  'auto': 'auto',
  'any': 'any',
} 
const converterProductsFormat = products => products.map(el => {
  switch (el.category) {
  case 'Недвижимость':
    el.category = 'estate'
    break;
  case 'Ноутбук':
    el.category = 'laptops'   
    break;
  case 'Фотоаппарат':
    el.category = 'camera'
    el.filters = {
      'type': dictionary[el.filters['type']],
      'matrix-resolution': el.filters['matrix-resolution'] === '-' ? 15 : el.filters['matrix-resolution'],
      'supporting': el.filters['supporting'] === '-' ? 10 : dictionary[el.filters['supporting']]
    }        
    break;
  case 'Автомобиль':
    el.category = 'cars'
    el.filters = {
      'car-body': dictionary[el.filters['body-type']],
      'year': el.filters['production-year'] === '-' ? 1900 : el.filters['production-year'],
      'transmission': dictionary[el.filters['transmission']]
    }      
    break;
  
  default:
    break;
  }
  return el;
})

export default converterProductsFormat;