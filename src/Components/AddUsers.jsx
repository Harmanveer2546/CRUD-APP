
import { FormControl,InputLabel,FormGroup,Input,Button ,makeStyles,Typography} from "@material-ui/core";
import { useState } from "react";
import { addUsers } from "../service/api";
import { useHistory } from 'react-router-dom';


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



const AddUsers=()=>{
      const classes=useStyles()  ;
      const [user,setUser]=useState(initialvalues) ;
      const {name,username,email,phone}=user ;
      let history = useHistory();

      const onValueChange=(e)=>{
        console.log(e.target.value) ;
        setUser({...user, [e.target.name]: e.target.value})
        console.log(user)
    
    }

    const addUserDetials=async()=>{
        await addUsers(user)  ;
        history.push('./all')  ;
    }





    return (
    
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add User </Typography>
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


         <Button  onClick={()=>addUserDetials()}  variant="contained" color="primary">Add User </Button>


        </FormGroup>
     
    )
    
    
    
    }
    
    export default AddUsers ;