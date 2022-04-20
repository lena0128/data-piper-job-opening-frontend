const initialState = {
    jobs: [],
    loading: false
}

const jobsReducer = (state = initialState, action) => {
    switch(action.type){
        case "LOADING":
            return {
                ...state,
                loading: true
            }

        case "FETCH_JOBS":
            return {
                ...state,
                jobs: [...state.jobs, ...action.payload],
                loading: false
            }
            
        default:
            return state    
    }
}

export default jobsReducer;