import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import links from "../../_helpers/config";
import useStylesHeader from "./style";
import logo from './img/logo.png'

export default function Header(){
    const classes = useStylesHeader()
    return(
        <header className={classes.root}>
            <img src={logo} width={100} height={100}  alt="logo"/>
            <ul className={classes.list}>
                <li className={classes.list}>
                <Button variant="contained" color="primary"><Link className={classes.list} to={links.main}>Main</Link></Button>
                
                </li>
                <li className={classes.list}>
                <Button variant="contained" color="primary"><Link className={classes.list} to={links.about}>About</Link></Button>


                </li>
                <li className={classes.list}>
                <Button variant="contained" color="primary"><Link className={classes.list} to={links.mybook}>Mybook</Link></Button>
                </li>
            </ul>
        </header>
    ) ;
}