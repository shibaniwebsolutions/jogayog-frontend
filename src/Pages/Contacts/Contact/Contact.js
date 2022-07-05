import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ContactDetails from '../ContactDetails/ContactDetails/ContactDetails';
import ContactUpdate from '../ContactUpdate/ContactUpdate/ContactUpdate';



function Row(props) {
     const { contact } = props;
     const [open, setOpen] = React.useState(false);

     return (
     <React.Fragment>
          <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
               <IconButton
               aria-label="expand row"
               size="small"
               onClick={() => setOpen(!open)}
               >
               {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
               </IconButton>
          </TableCell>
          <TableCell align="center">{contact.title}</TableCell>
          <TableCell align="center">{contact.price}</TableCell>
          <TableCell align="center">{contact.sold}</TableCell>
          <TableCell align="center">{contact.description}</TableCell>
          <TableCell align="center">{contact.views}</TableCell>
          </TableRow>
          <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
               <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 2, display:'flex' }}>
                         <ContactUpdate contact={contact}></ContactUpdate>
                         <ContactDetails contact={contact}></ContactDetails>
                    </Box>
               </Collapse>
          </TableCell>
          </TableRow>
     </React.Fragment>
     );
     }
const Contact = ({conatct}) => {
     return (
          <>
              <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                    <TableHead>
                         <TableRow>
                         <TableCell />
                         <TableCell align="center">Title</TableCell>
                         <TableCell align="center">Price</TableCell>
                         <TableCell align="center">Sold</TableCell>
                         <TableCell align="center">Description</TableCell>
                         <TableCell align="center">Views</TableCell>
                         </TableRow>
                    </TableHead>
                    <TableBody>
                         {conatct.map((conatct) => (
                              <Row key={conatct._id} conatct={conatct} />
                              ))}
                    </TableBody>
                    </Table>
               </TableContainer> 
          </>
     );
};

export default Contact;