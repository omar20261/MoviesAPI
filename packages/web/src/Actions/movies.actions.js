import axios from 'axios';
const Root_URL = 'http://localhost:3200';

export function getMovies(cb) {
    const request = axios.get(`${Root_URL}/movies`).then((d)=>{
        if(cb){cb(d.data)} 
        return d.data[0]?d.data[0]:[];
    }).catch((e)=>{console.log(e);})
      return {
        type:'FETCH_MOVIES',
        payload:request
      }
  }