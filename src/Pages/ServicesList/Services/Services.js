import React,{useState,useEffect} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Service from './../Service/Service';
import ServicesAdd from '../ServicesAdd/ServicesAdd/ServicesAdd';
import Configs from '../../../Configs';

const Services = () => {
     const [loading,setLoading] = useState(false)
     const [services,setServices] = useState([])
     const token = localStorage.getItem('token')
     useEffect(()=>{
          setLoading(true)
          fetch(`${Configs.baseUrl}admin/adminroute/allservice`, {
               method: 'GET',
               headers: {
               'content-type': 'application/json',
               'Authorization': token
               },
               body: JSON.stringify(),

          })
          .then(res => res.json())
          .then(data => {
               console.log(data)
               setServices(data)
               setLoading(false)
          })

     },[])
     if(loading){
         return <CircularProgress />
     }
     return (
          <div>
               {/* <ServicesAdd></ServicesAdd> */}
               <Service services={services}></Service>
          </div>
     );
};

export default Services;