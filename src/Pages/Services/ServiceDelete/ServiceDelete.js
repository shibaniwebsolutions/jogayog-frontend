import React,{useEffect} from 'react';
import  Button  from '@mui/material/Button';
import Configs from '../../../Configs';


const ServiceDelete = ({service}) => {
     const token = localStorage.getItem('token')
     let id = service._id
          const handleClick = e =>{
               var result = window.confirm("Want to delete?");
               if (result==true) {
                    // console.log('-->', id)
                    fetch(`${Configs.baseUrl}admin/adminroute/service-category/${id}`, {
                         method: 'DELETE',
                         headers: {
                         'content-type': 'application/json',
                         'Authorization': token
                         },
                         body: JSON.stringify(),
          
                         })
                         .then(res => res.json())
                         .then(data => {
                              console.log(data)
                              if(data){
                                   alert("Product deleted successfully")
                                   window.location.reload();
                              }
                         })
                         return true;
               } else {
               return false;
               }
               // e.preventDefault()
          }

   
     
     return (
          <>
               <Button
                    color="error"
                    variant="contained"
                    size='small'
                    onClick={handleClick}
                    >
                    Delete
               </Button>
          </>
     );
};

export default ServiceDelete;
