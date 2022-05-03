// import converterProductsFormat from "./converterProductsFormat";
const inititialState = {
  products: [],
  popup: false,
  // maxPrice: 1000000, 
  activeItem: {},
  filteredByCategory: [],
  filteredProductsClone: [],
  filteredProducts: [],
  priceMax:  null,
  activeCategory: 'all'
}
const products = (state = inititialState, action) => {

  switch (action.type) {
    
  case 'PRODUCTS_FETCHING':
    return {
      ...state,
      productsLoadingStatus: 'loading'
    }
  case 'PRODUCTS_FETCHED':
    const productsFetched = filteredByCategory(state.products, state.activeCategory)
    return {
      ...state,
      products: action.payload,
      productsLoadingStatus: 'idle',        
      filteredProducts: [...productsFetched],
      // filteredProductClone: [...filteredByCategory(state.products, state.activeCategory)]
      filteredProductsClone: [...productsFetched]
      
    }
  case 'PRODUCTS_FETCHING_ERROR':
    return {
      ...state,
      productsLoadingStatus: 'error'
    }
  case 'SHOW_POPUP':
    return {
      ...state,
      popup: true
    }
  case 'CLOSE_POPUP':
    return {
      ...state,
      popup: false
    }
  case 'SET_ACTIVE_ITEM':
    return {
      ...state,
      activeItem: action.payload
    }
  case 'ACTIVE_CATEGORY_CHANGED':
    const filteredCat = filteredByCategory(state.products, action.payload)
    return {
      ...state,
      activeCategory: action.payload,
      productsLoadingStatus: 'idle',        
      filteredProducts: [...filteredCat],
      // filteredProductClone: [...filteredByCategory(state.products, action.payload)]
      filteredProductsClone: [...filteredCat]
        
        
    }
  case 'PRICE_CHANGED':
    const priceChanged = filteredByPrice(
      filteredByCategory(state.products, state.activeCategory),
      action.payload
    )
    return {
      ...state,        
      productsLoadingStatus: 'idle',
      filteredProducts: [...priceChanged],
      filteredProductsClone: [...priceChanged]
    }
    
  
  case 'OPTION_FILTER_CHANGED':
    return {
      ...state,        
      productsLoadingStatus: 'idle',
      filteredProducts: action.payload
    }
  case 'FILTERED_BY_PRICE':
    const arr = [...state.filteredProductsClone]
    let func;
    switch (action.payload) {
    case 'ascending':
      func = ascendingSort;
      
      break
    case 'date':
      func = dateSort;
      break
    case 'popular':
      func = popular;
      break
    default: return null
    }
      
    return {
      ...state,        
      productsLoadingStatus: 'idle',
      filteredProducts: func(arr)
    }
  case 'GET_MAX_PRICE':
    return {
      ...state,      
      priceMax:  Math.max(...action.payload.map(el => el.price))
    }
    
  default: return  state
  }
} 

const filteredByCategory = (products, category) =>  'all' === category ? products : products.filter(el => el.category === category );
const filteredByPrice = (products, price) => products.filter(el => el.price > Number(price[0]) && el.price <= Number(price[1]));
const ascendingSort = products => products.sort(function(a,b){return a.price-b.price});
const dateSort = products => products.sort(function(a,b){return a['publish-date']-b['publish-date']});
const popular = products => products;

const descendingSort = products => products.sort(function(a,b){return b.price-a.price});


export default products;