import { makeStyles } from '@material-ui/styles';

const useStylesHeader = makeStyles(theme=>{
    return{
      
            root:{
                display:"flex",
                alignItems:"center",
                justifyContent:"space-between",
                boxShadow:' 12px 10px 24px 4px rgba(0, 0, 0, 0.2)',
                flexWrap:"wrap",
                borderRadius:50,
            

                [theme.breakpoints.down('sm')]: {
                    flexWrap:"wrap",
                    justifyContent:'center',
                  },
                
            },
            list:{
                marginBottom:5,
                paddingLeft:0,
                display:"flex",
                listStyleType: "none",
                textDecoration: "none",
                margin:' 0 5px',
            },
         }
    }
    
);
  export default  useStylesHeader;