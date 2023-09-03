const API="https://api.themoviedb.org/"
export function get(path){
  return fetch(API+path,{
    headers:{
      Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDA5NzFiZTVjOWUzZmI1YTA2OWZiOTY0N2UwMmVmNSIsInN1YiI6IjY0ZjRkYTljZjI5ZDY2MDBjNjZhMmM2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3mtXn6qohMeDN0_YEPQchF5O1jn4Mykwj-psGXyXjD8","Content-Type":"application/json;charset=utf-8"
    }
  }).then((result)=>result.json())
}