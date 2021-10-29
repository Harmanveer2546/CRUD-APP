
import { FormControl,InputLabel,FormGroup,Input,Button ,makeStyles,Typography} from "@material-ui/core";
import { useState,useEffect } from "react";
import { addUsers } from "../service/api";
import { useHistory, useParams  } from 'react-router-dom';
import { getUsers, editUser } from '../service/api';


const useStyles=makeStyles({

  container:{
      width:'50%'  ,
      margin :'5% 0 0 25%' ,
      '& > *': {
        marginTop: 20
    }
  }

})

const initialvalues={
    name:'' ,
    username:'' ,
    email:'' ,
    phone:''
}



const EditUser=()=>{
      const classes=useStyles()  ;
      const [user,setUser]=useState(initialvalues) ;
      const {name,username,email,phone}=user ;
      const { id } = useParams();
      let history = useHistory();


      useEffect(() => {
        loadUserDetails();
    }, []);


    const loadUserDetails = async() => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        const response = await editUser(id, user);
        history.push('/all');
    }




      const onValueChange=(e)=>{
        console.log(e.target.value) ;
        setUser({...user, [e.target.name]: e.target.value})
        console.log(user)
    
    }

   





    return (
    
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit User </Typography>
         <FormControl>
             <InputLabel>Name</InputLabel>
             <Input onChange={(e)=>onValueChange(e)} name='name' value={name}/>
             </FormControl>

             <FormControl>
             <InputLabel>UserName</InputLabel>
             <Input  onChange={(e)=>onValueChange(e)} name='username' value={username} />
             </FormControl>


             <FormControl>
             <InputLabel>Email</InputLabel>
             <Input onChange={(e)=>onValueChange(e)} name='email' value={email}/>
             </FormControl>



             <FormControl>
             <InputLabel>Phone</InputLabel>
             <Input onChange={(e)=>onValueChange(e)} name='phone' value={phone}/>
             </FormControl>


         <Button  onClick={()=>editUserDetails()}  variant="contained" color="primary">Edit User </Button>


        </FormGroup>
     
    )
    
    
    
    }
    
    export default EditUser ;