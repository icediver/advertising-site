import { v4 as uuidv4 } from 'uuid';

const dictionary = {
  'Недвижимость': 'estate',
  'Ноутбук': 'laptops',
  'Фотоаппарат': 'camera',
  'Автомобиль': 'cars',
  
  'slr': ['Зеркальный','mirror'],
  'digital': ['Цифровой','digital'],
  'mirrorless': ['Беззеркальный', 'mirrorless'],
  // '-': 10,
  'hd': ['hd',1],
  'full-hd':['Full-hd',2],
  '4K': ['4K',4],
  '5K': ['5K',5],
  'suv': ['Паркетник', 'jeep'],
  'sedan': ['Седан','sedan'],
  'universal': ['Универсал', 'universal'],
  'hatchback': ['Хэтчбэк','hatchback'],
  'jeep': ['Внедорожник','jeep'],
  'cupe': ['Купе','cupe'],
  'mechanic': ['Механика','mechanic'],
  'auto': ['Автомат','auto'],
  'any': ['-','any'], 
  'flat': ['Квартира','flat'],
  'house': ['Дом', 'house'],
  'apartment': ['Апартаменты', 'apartment'],
  'home': ['Домашний', 'home'],
  'ultrabook': ['Ультрабук', 'ultrabook'],
  'game': ['Игровой', 'game']
}
const transformDataFormat = (product) => {
  const transformedProduct = {
    id: uuidv4(),
    name: product.name,
    price: product.price,
    coordinates: product.coordinates,
    seller: product.seller,
    description: product.description,
    address: product.address,
    'publish-date': product['publish-date'],
    category: dictionary[product['category']],
    photos: product.photos,
    favorite: false
    
  }
  switch (product.category) {
  case 'Недвижимость':
    const area = product.filters.area 
    const rooms = product.filters['rooms-count']
    transformedProduct.filters =  {
      area: [area + ' кв.м', area ],
      'rooms-count': [rooms, rooms],
      type: dictionary[product.filters.type]
    }

    break;
  case 'Ноутбук':
    const typeNotebook =  product.filters['type'] === '-' ? ['-', '-'] : dictionary[product.filters['type']];
    transformedProduct.filters= {
      "type":  typeNotebook,
      "ram-value": [product.filters["ram-value"], product.filters["ram-value"]],
      "screen-size": [product.filters["screen-size"], product.filters["screen-size"]],
      "cpu-type": [product.filters["cpu-type"], product.filters["cpu-type"]]
    }
    break;
  case 'Фотоаппарат':
    const matrix = product.filters['matrix-resolution'] === '-' ? 1 : product.filters['matrix-resolution'];
    const supporting =  product.filters['supporting'] === '-' ? ['-', 1] : dictionary[product.filters['supporting']];
    transformedProduct.filters = {
      'type': dictionary[product.filters['type']],
      'matrix-resolution': [matrix + ' Mpx', matrix],
      'supporting': supporting
    }        
    break;
  case 'Автомобиль':
    const year = product.filters['production-year'] === '-' ? 1900 : product.filters['production-year'];
    transformedProduct.filters = {
      'car-body': dictionary[product.filters['body-type']],
      'year': [product.filters['production-year'], year],
      'transmission': dictionary[product.filters['transmission']]
    }      
    break;
    
  default:
    break;
  }
  return transformedProduct;

};

export default transformDataFormat;
