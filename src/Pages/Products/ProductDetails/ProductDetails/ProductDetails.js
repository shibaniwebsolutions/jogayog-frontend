import React, { useState,useEffect } from 'react';
import Grid from '@mui/material/Grid';
import ProductDetail from './../ProductDetail/ProductDetail';
import { CircularProgress } from '@mui/material';
import Configs from '../../../../Configs';

const ProductDetails = ({product}) => {
     let id = product._id
     console.log(id)
     const [products,setProducts] = useState([])
     const [loading,setLoading] = useState(false)
     const token = localStorage.getItem('token')
     useEffect(()=>{
          setLoading(true)
          fetch(`${Configs.baseUrl}admin/adminroute/allproduct/${id}`, {
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
               setProducts(data)
               setLoading(false)
          })
     },[])

     if (loading) {
          return <CircularProgress></CircularProgress>
     }

     return (
          <>
               <Grid sx={{m:1}} container spacing={2}>
                    <ProductDetail products={products}></ProductDetail>
               </Grid>   
          </>
     );
};

export default ProductDetails;