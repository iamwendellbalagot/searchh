export const initialState = {
    query: '',
    searchResults: null
}

const reducer = (state, action) =>{
    switch(action.type){
        case 'SET_QUERY': 
            return {
                ...state,
                query: action.query
            }
        case 'SET_RESULTS':
            return {
                ...state,
                searchResults: action.searchResults
            }
        default:
            return state
    }
}

export default reducer;