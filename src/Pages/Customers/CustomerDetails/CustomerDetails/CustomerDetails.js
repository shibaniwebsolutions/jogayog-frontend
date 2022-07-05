import React,{useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import CustomerDetail from './../CustomerDetail/CustomerDetail';
import { CircularProgress } from '@mui/material';
import Configs from '../../../../Configs';

const CustomerDetails = ({customer}) => {
     let id = customer._id
     console.log(id)
     const [customers,setCustomers] = useState([])
     const token = localStorage.getItem('token')
     const [loading,setLoading] = useState(false)
     useEffect(()=>{
          setLoading(true)
          fetch(`${Configs.baseUrl}admin/adminroute/allCustomer/${id}`, {
               method: 'GET',
               headers: {
               'content-type': 'application/json',
               'Authorization': token
               },
               body: JSON.stringify(),

          })
          .then(res => res.json())
          .then(data =>{
               console.log(data)
               setCustomers(data)
               setLoading(false)
          })
     },[])
     if (loading){
          return <CircularProgress></CircularProgress>
     }
     return (
          <>
               <Grid sx={{}} container spacing={2}>
                    <CustomerDetail customers={customers}></CustomerDetail>
               </Grid>    
          </>
     );
};

export default CustomerDetails;