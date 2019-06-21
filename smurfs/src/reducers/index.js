/*
  Be sure to import in all of the action types from `../actions`
*/

import 
{FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL
} from '../actions';


//  Your initial/default state for this project could *Although does not have to* look a lot like this
 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }




 const reducer = (state = initialState, action) =>{
   switch(action.type){
     case FETCH_DATA_START:
       return{
         ...state,
         error:'',
         fetchingSmurfs:true
       }

    case FETCH_DATA_SUCCESS:
      return{
        ...state,
        error:'',
        fetchingSmurfs:false,
        smurfs:action.payload
      }

   case FETCH_DATA_FAIL :
     return{
       ...state,
       error:'Where are the Smurfs',
       fetchingSmurfs:false

     }  


       default: return state;
   }
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default reducer;
