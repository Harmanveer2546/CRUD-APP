
import { getUsers } from "../service/api";
import { useEffect ,useState} from "react";

import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core' ;
import { Link } from 'react-router-dom';
import { deleteUser } from "../service/api";

const useStyles=makeStyles({
    table:{
        width:'90%' ,
        margin:'50px 0 0 50px'
    } ,

    thead:{
        '& > *':{
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    }  ,
    row: {
        '& > *': {
            fontSize: 18
        }
    }

})





const AllUsers=()=>{
    const classes=useStyles() ;
    const [users, setUsers] = useState([]);
useEffect(()=>{
 getAllUsers() ;
},[users])


const getAllUsers=async()=>{
    const response=await getUsers()  ;
    console.log(response.data)   ;
    setUsers(response.data)  ;
}

const DeleteUser=async(user)=>{

     await deleteUser(user)  ;
     getAllUsers();

}


return (

   <Table className={classes.table}>
       <TableHead>

    <TableRow className={classes.thead}>
      <TableCell>ID</TableCell>
      <TableCell>Name</TableCell> 
     <TableCell>UserName</TableCell>
     <TableCell>Email</TableCell>
     <TableCell>Phone</TableCell>
     <TableCell></TableCell>
     <TableCell></TableCell>
    </TableRow>

       </TableHead>
     {

        users.map(user=>(


        
            <TableRow className={classes.row}>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell> 
           <TableCell>{user.username}</TableCell>
           <TableCell>{user.email}</TableCell>
           <TableCell>{user.phone}</TableCell>
           <TableCell>
               <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`} >Edit</Button>
               <Button color="secondary" variant="contained" onClick={() => DeleteUser(user._id)}>Delete</Button>
           </TableCell>
          </TableRow>


        ))











     }

  <TableBody>








  </TableBody>







   </Table>
)



}

export default AllUsers ;