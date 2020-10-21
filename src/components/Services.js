import Axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';



const Services = ()=>{

  

  const [people,setPeople] = useState([]);
  const {id} = useParams();

  const getPeople = ()=>{
     
     Axios.get(`https://swapi.dev/api/people/${id}/`)
    .then ( resp => setPeople(resp.data))
    

   // setPeople(resp);
  }
  
  useEffect( ()=>{
    getPeople()
  })

  return(
    <div>
      {JSON.stringify(people)}
    </div>
  )
}

export default Services;