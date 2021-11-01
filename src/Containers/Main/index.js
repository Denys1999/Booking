import FormSearch from '../../Components/FormSearch'

export default function Main(props){
    const{setAllData}=props;
    return (
       <>
       <FormSearch setAllData={setAllData}/>
          
       </>
    )
    
}