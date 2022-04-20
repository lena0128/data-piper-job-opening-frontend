const initialState = {
    candidates: [],
    loading: false
}

const candidatesReducer = (state = initialState, action) => {
    switch(action.type){
        case "LOADING": 
        return {
            ...state,
            loading: true
        }

        case "ADD_CANDIDATE":
            return {
                ...state,
                candidates: [...state.candidates, action.payload]
            }

        case "FETCH_CANDIDATES":
            return {
                ...state,
                candidates: [...state.candidates, ...action.payload],
                loading: false
            }
            
        default:
            return state    
    }
}

export default candidatesReducer

