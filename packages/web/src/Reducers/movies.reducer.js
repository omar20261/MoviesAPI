
const  INITIAL_STATE={
  moviesList:[]
}

export default function (state=INITIAL_STATE,action) {
  switch (action.type) {
    case 'FETCH_MOVIES':
      return {...state,moviesList:action.payload}
  }
  return state
}
