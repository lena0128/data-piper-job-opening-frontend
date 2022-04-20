const baseUrl = "http://127.0.0.1:5000/candidates"

export const addCandidate = (candidateObj) => {
    return {
        type: "ADD_CANDIDATE",
        payload: candidateObj
    }
}

export const fetchCandidates = () => {
    return (dispatch) => {
        dispatch({type: "LOADING"})

        fetch(baseUrl)
          .then(resp => resp.json())
          .then(data => dispatch({
              type: "FETCH_CANDIDATES",
              payload: data
          }))
    }
}

export const createCandidate = (candidate) => {
    return (dispatch) => {

        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({candidate})
        }

        fetch(baseUrl, configObj)
          .then(resp => resp.json())
          .then(data => dispatch(addCandidate(data)))
    }
}