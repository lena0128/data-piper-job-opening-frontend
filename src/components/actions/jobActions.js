const baseUrl = "http://127.0.0.1:5000/jobs"

export const fetchJobs = () => {
    return (dispatch) => {
        dispatch({type: "LOADING"})

        fetch(baseUrl)
          .then(resp => resp.json())
          .then(data => dispatch({
              type: "FETCH_JOBS",
              payload: data
          }))
    }
}