import {useState} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Header from './Components/Header';
import About from './Containers/About';
import Main from './Containers/Main';
import MyBook from './Containers/MyBook';
import links from './_helpers/config';
import { createTheme,ThemeProvider } from '@material-ui/core/styles';
import {isEmpty} from 'lodash';
import Hotels from './Components/Hotels/Index';

const theme = createTheme({
  palette:{
    primary:{
      main: '#1312123d',
    },
    secondary:{
      main:'#25b9ca',
    },
  },
  overrides: {
    MuiButton: {
      textPrimary:{
        '@global':{
          a:{
            textDecpration:'none !important',
          }
        }

      },
    }
  }
});



function App() {
  const style={marginTop:20}
  const [allData,setAllData] = useState({});
  return (
   <BrowserRouter>
   <ThemeProvider theme={theme}>
     <Header/>
   <main style={style} >
    <Switch>
      <Route exact path={links.main}>
        {isEmpty(allData)=== true ? <Main setAllData={setAllData}/>: <Hotels res={allData}/> }
          
      </Route>
      <Route  path={links.about}>
          <About/>
      </Route>
      <Route path={links.mybook}>
          <MyBook/>
      </Route>
    </Switch>
   </main>
   </ThemeProvider>
    
   </BrowserRouter>
  );
}

export default App;
