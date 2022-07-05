import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Customer from '../Customer/Customer';
import Configs from '../../../Configs';

const Customers = () => {
     const [customers,setCustomers] = useState([])
     const [loading,setLoading] = useState(false)
     const token = localStorage.getItem('token')
     useEffect(()=>{
          setLoading(true)
          fetch(`${Configs.baseUrl}admin/adminroute/allcustomer`, {
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
               setCustomers(data)
               setLoading(false)
          })

     },[])
     if(loading){
         return <CircularProgress />
     }
     return (
          <>   
               <Customer customers={customers}></Customer> 
          </>
     );
};

export default Customers;