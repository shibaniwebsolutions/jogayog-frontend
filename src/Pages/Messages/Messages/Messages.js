import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Message from '../Message/Message';
import  Box  from '@mui/material/Box';
import Configs from '../../../Configs';

const Messages = () => {
     const [messages,setMessages] = useState([])
     const [loading,setLoading] = useState(false)
     const token = localStorage.getItem('token')
     useEffect(()=>{
          setLoading(true)
          fetch(`${Configs.baseUrl}firebasemessage`, {
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
               setMessages(data)
               setLoading(false)
          })

     },[])
     if(loading){
         return <CircularProgress />
     }
     return (
          <Box>
               <Message messages={messages}></Message>
          </Box>
     );
};

export default Messages;