import { Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { useState } from "react"
export default function MainComp(props){
 const [count,setCount] = useState(0);
  return (
    <div>
      <Button variant="contained" color="primary"  onClick={()=> props.func(props.instate-1)} >Minus - 1</Button>
      <Button variant="contained" color="primary"  onClick={()=> props.func(props.instate+1)} >Plus + 1</Button>
      <Button variant="contained" color="primary"  onClick={()=> props.func(props.instate*2)} >Multiply  * 2 </Button>
      <Button variant="contained" color="primary"  onClick={()=> props.func(props.instate/2)} >Div  / 2 </Button>
      <Typography component="p">{props.instate}</Typography>
      <Typography component="p">You clicked: {count} times</Typography>
      <Button variant="contained" color="primary" onClick={()=> setCount(count+1)}>Just push me</Button>
      <Button variant="contained" color="primary" onClick={()=> setCount(count-1)}>Push me again</Button>
    </div>
  )
}