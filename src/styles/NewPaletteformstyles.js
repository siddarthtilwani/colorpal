import { DRAWER_WIDTH } from "../Constants";
import sizes from "./sizes";
const drawerWidth = DRAWER_WIDTH;
const styles = theme => ({
    root: {
        display: 'flex',
    },
    
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        
    },
    drawerPaper: {
        width: drawerWidth,
        display:"flex",
        alignItems:"center",
        
    },
    drawerHeader: {
        width:'100%',
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        height: `calc(100vh - 64px)`,
        flexGrow: 1,
        padding: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    textvalid:{
        display:'flex',
        flexDirection:'row'
    },
    container:{
        width: "90%",
        height:'100%',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    Buttons:{ marginRight:'1rem',
width:'100%',[sizes.down('xs')]:{
    marginRight:'0.5rem'
}
    },
    Button:{
        width:'50%',
        margin:'0 0.5rem',
        [sizes.down('md')]:{
            marginRight:'0 0.2rem',
            padding:'0.3rem'
        }
    }
});
export default styles