import React, { useEffect, useState }  from 'react';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import VendorView from '../VendorView/VendorView';
import Configs from '../../../Configs';

const VendorAll = () => {
     const [vendors,setVendors] = useState([])
     const [loading,setLoading] = useState(false)
     const token = localStorage.getItem('token')
     useEffect(()=>{
          setLoading(true)
          fetch(`${Configs.baseUrl}admin/adminroute/allvendor`, {
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
               setVendors(data)
               setLoading(false)
          })
     },[])
     if(loading){
          return <CircularProgress />
      }
     return (
          <>
               <Grid container spacing={2}>
                    <VendorView vendors={vendors}></VendorView>
               </Grid>  
          </>
     );
};

export default VendorAll;