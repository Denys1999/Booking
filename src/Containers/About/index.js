import { useState } from "react";
import MainComp from "../../Components/MainComp/MainComp";

export default function About(props){
    const[done,setDone]=useState(0);

    return (
        <MainComp instate={done} func={setDone}/>
    )

}