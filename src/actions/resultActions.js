export const itemsFetching = () => {
  return {
      type: 'ITEMS_FETCHING'
  }
}
export const itemsFetched = (items) => {
  
  return {
      type: 'ITEMS_FETCHED',
        payload: items
    }
}
export const itemsFetchingError = () => {
  return {
      type: 'ITEMS_FETCHING_ERROR'
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
export const optionsFliterChanged = (filters) => {
  return {
    type: 'OPTION_FILTER_CHANGED',
    payload: filters
  }
}