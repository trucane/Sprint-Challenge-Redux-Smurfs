/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

import axios from 'axios';
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH__DATA_FAIL";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch =>{
  dispatch({type: FETCH_DATA_START});

  axios.get('http://localhost:3333/smurfs')
  .then(res =>{
    dispatch({type:FETCH_DATA_SUCCESS, payload: res.data});
  })
  .catch(err => console.log(err))
}


export const addSmurf = (smurf) => dispatch =>{
  dispatch({type:FETCH_DATA_START})
  axios.post('http://localhost:3333/smurfs', smurf)
  .then(res =>{
    dispatch({type:FETCH_DATA_SUCCESS, payload: res.data});
  })
  .catch(err => console.log(err.response))
}

export const deleteSmurfs = (id) => dispatch =>{
  dispatch({type:FETCH_DATA_START})
  axios.delete(`http://localhost:3333/smurfs/${id}`)
  .then(res =>{
    dispatch({type:FETCH_DATA_SUCCESS, payload: res.data});
  })
  .catch(err => console.log(err.response))
}


