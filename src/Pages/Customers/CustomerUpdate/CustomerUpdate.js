import React from 'react';
import  Button  from '@mui/material/Button';
import CustomerModal from '../CustomerModal/CustomerModal';

const CustomerUpdate = ({customer}) => {
     const [open, setOpen] = React.useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);
     console.log(customer.active)
     
     return (
          <div>
               {
                    customer.status === "active" ? 
                    <Button
                         onClick={handleOpen}
                         variant="contained"
                         sx={{mx:2}}
                         color="success"
                         size='small'
                    >
                    Inactive
                    </Button>
                    :
                    <Button
                         onClick={handleOpen}
                         variant="contained"
                         sx={{mx:2}}
                         color="success"
                         size='small'
                    >
                    Active
                    </Button>

               }
               {/* <CustomerModal customer={customer} open={open} handleClose={handleClose}></CustomerModal> */}
          </div>
     );
};

export default CustomerUpdate;