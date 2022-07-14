import React from 'react';
import  Button  from '@mui/material/Button';
import Configs from '../../../../Configs';

const BannerDelete = ({banner}) => {

     const token = localStorage.getItem('token')
     let id = banner._id
     console.log(id)
     const handleClick = e =>{
               fetch(`${Configs.baseUrl}banner/${id}`, {
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
                    if(data.msg ==  "Deleted a Banner"){
                         alert("Banner Deleted Successfully")
                         window.location.reload();
                    }
               })
               e.preventDefault()
     }
     return (
          <div>
               <Button
                    color="error"
                    variant="contained"
                    size='small'
                    sx={{ml:2}}
                    onClick={handleClick}
                    >
                    Delete
               </Button>
          </div>
     );
};

export default BannerDelete;