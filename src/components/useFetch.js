import {useEffect, useState} from 'react'

const useFetch = (url) => {
  const[state, setState] = useState(null);

  useEffect(()=>{
    fetch(url).then((res)=>res.json()).then((data)=>setState(data));
  },[url]);
  return (
    [state]
  )
}

export default useFetch;