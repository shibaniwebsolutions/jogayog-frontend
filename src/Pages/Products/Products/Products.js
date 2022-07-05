import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Product from '../Product/Product';
import Configs from '../../../Configs';

const Products = () => {
     const [products,setProducts] = useState([])
     const [loading,setLoading] = useState(false)
     useEffect(()=>{
          setLoading(true)
          fetch(`${Configs.baseUrl}products`)
          .then(res => res.json())
          .then(data => {
               console.log(data.products)
               setProducts(data.products)
               setLoading(false)
          })

     },[])
     if(loading){
         return <CircularProgress />
     }

     return (
          <>
               <Grid container spacing={2}>
                    <Product products={products}></Product>
               </Grid>
          </>
     );
};

export default Products;