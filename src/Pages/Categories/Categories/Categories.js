import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Category from './../Category/Category';
import CategoryAdd from '../CategoryAdd/CategoryAdd/CategoryAdd';
import Configs from '../../../Configs';

const Categories = () => {
     const [categories,setCategories] = useState([])
     const [loading,setLoading] = useState(false)
     const token = localStorage.getItem('token')
     useEffect(()=>{
          setLoading(true)
          fetch(`${Configs.baseUrl}admin/adminroute/allcategory`, {
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
               setCategories(data)
               setLoading(false)
          })

     },[])
     if(loading){
         return <CircularProgress />
     }
     return (
          <>   
               <CategoryAdd></CategoryAdd>
               <Category categories={categories}></Category> 
          </>
     );
};

export default Categories;