import sizes from "./sizes";
import bg from './bg.svg'
 export default{
    "@global":{
        '.fade-enter': {
            opacity: 0,
        },
        '.fade-enter-active': {
            opacity: 1,
            transition: 'opacity 2000ms ease-in',
        },
        '.fade-exit': {
            opacity: 1
        },
        '.fade-exit-active ':{
            opacity: 0,
            transition: 'opacity 2000ms ease-out'
        }
        
    },
    root:{
        backgroundColor:"blue",
        height:"100vh",
        display:"flex",
        alignItems:'flex-start',
        justifyContent:"center",
        backgroundColor:'#394bad',
backgroundImage:`url(${bg})`,
overflow:'scroll'
       
        },
        heading:{
fontSize:'2rem'
        },
        container:{
            width: "50%",
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            flexWrap: "wrap",
            [sizes.down('xl')]:{
                width: "80%"
            },
            [sizes.down('xs')]:{
                width: "75%"
            }
        },
        nav:{
        display:"flex",
        width:"100%",
        justifyContent:"space-between",
        color:"white",
        alignItems:'center',
        "& a":{
            color:'white'
        }
        }
        ,
        palettes:{
            boxSizing:"border-box",
            width:"100%",
            display:"grid",
            gridTemplateColumns:"repeat(3, 30%)",
            gridGap:"2.5rem",
            "& a":{
                textDecoration:"none"
            },
            [sizes.down('md')]:{
                gridTemplateColumns:'repeat(2,80%)'
        
        },
            [sizes.down('xs')]:{
                gridTemplateColumns:'repeat(1,100%)',
                gridGap:'1.4rem'
        
        }}
}