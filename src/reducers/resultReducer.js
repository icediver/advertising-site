const inititialState = {
  items: [],
  popup: false,
  activeItem: {},
  filteredByCategory: [],
  filteredByPrice: [],
  filteredItems: [],
  priceRange: [0, 5800000],
  activeCategory: 'all'
}
const items = (state = inititialState, action) => {
  switch (action.type) {
    
  case 'ITEMS_FETCHING':
    return {
      ...state,
      itemsLoadingStatus: 'loading'
    }
  case 'ITEMS_FETCHED':
    
    return {
      ...state,
      items: action.payload,
      itemsLoadingStatus: 'idle',        
      filteredItems: filteredByCategory(state.items, state.activeCategory)

    }
  case 'ITEMS_FETCHING_ERROR':
    return {
      ...state,
      itemsLoadingStatus: 'error'
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
    return {
      ...state,
      activeCategory: action.payload,
      itemsLoadingStatus: 'idle',        
      filteredItems: filteredByCategory(state.items, action.payload)
        
        
    }
  case 'PRICE_CHANGED':
    return {
      ...state,        
      itemsLoadingStatus: 'idle',
      filteredItems: filteredByPrice(
        filteredByCategory(state.items, state.activeCategory),
        action.payload
      )
    }
    
  
  case 'OPTION_FILTER_CHANGED':
    return {
      ...state,        
      itemsLoadingStatus: 'idle',
      filteredItems: action.payload
    }
    
  default: return  state
  }
} 

const filteredByCategory = (items, category) => {
  return 'all' === category ? items : items.filter(el => el.category === category )
}
const filteredByPrice = (items, price) => {
  return items.filter(el => el.price > Number(price[0]) && 
                            el.price <= Number(price[1]))
}
export default items;