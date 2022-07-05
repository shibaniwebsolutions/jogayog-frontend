import React,{useState} from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import CircularProgress from '@mui/material/CircularProgress';
import Configs from '../../../Configs';


const OtpVerification = () => {
     const [phone,setPhone] = useState('')
     const [otp,setOtp] = useState('')
     const [error, setError] = useState('');
     const history = useHistory();
     const location = useLocation();
     const [loading,setLoading] = useState(false)

     const handleOnChangePhone = (e) => {
          const phone = e.target.value
          setPhone(phone)
        };

     const handleOnChangeOtp = (e,data) =>{
          const otp = e.target.value
          setOtp(otp)
        }
        
      
        const handleSubmit = e => {
          
               const registerData ={
                    phoneNo:Number(phone),
                    otp:String(otp)
               }
               console.log(registerData)
               setLoading(true)   
          fetch(`${Configs.baseUrl}admin/register/verify`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(registerData),
          })
            .then(res => res.json())
            .then(info => {
              let value = info.token;
              console.log(info.products);
               if (value) {
                    localStorage.setItem('token', value);
                    const destination = location?.state?.from || '/vendors';
                    history.replace(destination);
                    setLoading(false)
               } else {
                    setError(info.error);
              }
              
            });
          e.preventDefault()
        };

        if(loading){
          return <CircularProgress />
        }
     return (
          <>
              <Container className="login-style">
                    
                    <Grid container spacing={2}>
                         <Grid sx={{ width: '100%', mt: 10 }} item xs={12} md={6}>
                              <form onSubmit={handleSubmit}>
                                   <Typography
                                        sx={{ textAlign: 'center' }}
                                        color="RGB(155, 35, 53)"
                                        variant="body1"
                                        gutterBottom
                                   >
                                        Please Register
                                   </Typography>
                                   <TextField
                                        required
                                        size="small"
                                        id="outlined-required"
                                        label="Phone Number"
                                        sx={{ width: '75%', m: 1 }}
                                        onChange={handleOnChangePhone}
                                        phone="phoneNo"
                                        helperText="Phone Number"
                                        variant="filled"
                                   />
                                   <TextField
                                        required
                                        size="small"
                                        id="outlined-required"
                                        label="OTP"
                                        sx={{ width: '75%', m: 1 }}
                                        onChange={handleOnChangeOtp}
                                        otp="otp"
                                        helperText="OTP"
                                        variant="filled"
                                   />
                                   <Button
                                        sx={{ width: '50%', m: 2 }}
                                        variant="contained"
                                        type="submit"
                                        size="small"
                                   >
                                        Login
                                   </Button>
                              </form>
                         </Grid>

                    </Grid>
                    
                   
               </Container>      
          </>
     );
};

export default OtpVerification;