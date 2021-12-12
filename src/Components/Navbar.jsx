import { AppBar, Toolbar, makeStyles ,Button} from '@material-ui/core';
import { NavLink,useHistory } from 'react-router-dom';


const useStyle = makeStyles({
    header: {
        background: '#111111'
    },
    tabs: {
        color: '#FFFFFF',
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 20
    }
})

const NavBar = () => {
    const classes = useStyle();
    let history=useHistory() ;
    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar>
            <NavLink className={classes.tabs}  to={process.env.PUBLIC_URL + '/'} exact>Code for Interview</NavLink>
                <NavLink className={classes.tabs}  to={process.env.PUBLIC_URL + '/all'} exact>All Users</NavLink>
                <NavLink className={classes.tabs} to="add" exact>Add User</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;


 
