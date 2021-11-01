
import useStyleFormSearch from './style';
//Ui
import {useState} from 'react';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import DataPicker from '../Form/DataPicker';
import Select from '../Form/Select';
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button';
//Data Picker

export default function FormSearch(props){
   const style={padding:0}
   const {setAllData} = props;
   const[dist,setDist] = useState();
   const[checkIn,setCheckIn] = useState(new Date());
   const[checkOut,setCheckOut] = useState(new Date());
   const[children,setChildren] = useState(1);
   const[adults,setAdults] = useState(1);

    
    const classes=useStyleFormSearch()

    const onSubmit = e =>{
       e.preventDefault();
       setAllData({children,
         dist,
         adults,
         checkIn,
         checkOut})
    }
    const onChangeChildren = e =>{
       setChildren(e.target.value);
    }
    const onChangeAdults = e =>{
      setAdults(e.target.value);
   }
    return(
       <form onSubmit={onSubmit}>
          <Grid container className={classes.root} spacing={2}>
           <Grid item xs={12} md={3}>
              <Select dist={dist} setDist={setDist} label={'Destination'}/>
              {dist === null && <span style={{color:'#180eb2'}}>Enter hostels name</span>}
             
            </Grid>
               <Grid item xs={12} md={3} >
                  <FormControl fullWidth>
                     <DataPicker data={checkIn} setData={setCheckIn}  label={'Check-in'}/>
                  </FormControl>
               </Grid>
        <Grid item xs={12} md={3} >
           <FormControl fullWidth>
               <DataPicker  data={checkOut} setData={setCheckOut}  label={'Check-out'}/>
            </FormControl> 
        </Grid>

        <Grid item xs={12} md={3} >
            <Grid container spacing={2}>
               <Grid style={style} item xs={6} md={3} >
                  <FormControl fullWidth>
                        Adults
                   <Input disableUnderline={true}  value={adults} onChange={onChangeAdults} type={'number'} margin={'none'}/>
                  {adults===''&&<span style={{color:'#180eb2'}}>Please enter count of adults</span>}
                  </FormControl>
                </Grid>
        <Grid style={style} item xs={6} md={3} >
            <FormControl fullWidth>
                   Children
                  <Input disableUnderline={true} value={children} onChange={onChangeChildren} type={'number'} margin={'none'}/>
                  {children === '' && <span style={{color:'#180eb2'}}> Please enter count of childern,if you dont have press 0</span>}
            </FormControl>
          </Grid>
        <Grid item xs={12} md={3} >           
         <Button disabled={children===''||adults===''||dist===null|| checkIn===null || checkOut===null || dist===undefined} type={"submit"} variant="contained" color="primary" fullWidth>Search</Button>
                   
        </Grid>

        </Grid>
      </Grid>
          
           
   </Grid>
</form>
       
    )
} 
