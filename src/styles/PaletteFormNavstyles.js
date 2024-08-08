import { DRAWER_WIDTH } from "../Constants";
import sizes from "./sizes";
const drawerWidth = DRAWER_WIDTH;
const styles=(theme)=>(
    {
        root:{
    displat:'flex'
        },
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            flexDirection:'row',
            justifyContent:"space-between",
        alignItems:'center',
            height:'64px'
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        hide: {
            display: 'none',
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        navBtn:{
    marginRight:'1rem',
    [sizes.down('xs')]:{
        marginRight:'0.5rem'
    }
        },
        btn:{
            margin:'0 0.5rem',
            [sizes.down('md')]:{
                marginRight:'0 0.2rem',
                padding:'0.3rem'
            }
        }
    })
    export default styles