export const productsFetching = () => {
  return {
    type: 'PRODUCTS_FETCHING'
  }
}
export const productsFetched = (items) => {
  
  return {
    type: 'PRODUCTS_FETCHED',
    payload: items
  }
}
export const productsFetchingError = () => {
  return {
    type: 'PRODUCTS_FETCHING_ERROR'
  }
}
export const showPopup = () => {
  return {
    type: 'SHOW_POPUP'
  }
}
export const closePopup = () => {
  return {
    type: 'CLOSE_POPUP'
  }
}
export const setActiveItem = (item) => {
  return {
    type: 'SET_ACTIVE_ITEM',
    payload: item
  }
}
export const activeCategoryChanged = (category) => {
  // console.log(category);
  return {
    type: 'ACTIVE_CATEGORY_CHANGED',
    payload: category
  }
}
export const priceChanged = (range) => {
  return {
    type: 'PRICE_CHANGED',
    payload: range
  }
}
export const optionsFilterChanged = (filters) => {
  return {
    type: 'OPTION_FILTER_CHANGED',
    payload: filters
  }
}
export const filteredByPrice = (direction) => {
  return {
    type: 'FILTERED_BY_PRICE',
    payload: direction
  }
}
export const getMaxPrice = (products) => {
  return {
    type: 'GET_MAX_PRICE',
    payload: products
  }
}