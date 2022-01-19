import { Text,Button } from '@chakra-ui/react';
import DrawerExample from './Drawer';
import { useContext,useEffect,useState } from 'react';
import { AppContext } from '../appContext/AppContextProvider';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

export default function Nav(){
    const {location,s} = useContext(AppContext)
    const navigate = useNavigate()
  useEffect(()=>{
      const name = JSON.parse(localStorage.getItem("username"))
      const token = JSON.parse(localStorage.getItem("token"))
      setToken(token);
      setName(name);
  },[s])
 
    const [token,setToken] = useState("")
    const [name,setName] = useState("")
    return(
        <>
        <div style={{display:"flex",flexDirection:"column",position:"fixed",width:"100%",backgroundColor:"white", paddingTop:"15px", paddingBottom:"15px"}}>
        <div style={{display:"flex" ,flexDirection:"row"}}>
        <div style={{width:"200px",display:"flex",flexDirection:"row",marginLeft:"10px"}}>
            <DrawerExample />
            <img onClick={()=>{navigate("/")}} style={{height:"50px"}} src="https://www.kindpng.com/picc/m/600-6000026_royal-brothers-logo-hd-png-download.png" alt="logo" />
        </div>
        <div style={{display:"flex" ,flexDirection:"row",width:"55%",alignItems:"center",justifyContent:"space-evenly"}}>
        <div>
            <Link to="/bikes"><Text fontSize="16px" fontWeight="700">Tariff</Text></Link>
            </div>
            <div>
            </div>
            <div style={{display:"flex",flexDirection:"row",width:"140px"}}>
            <Text fontSize="16px" fontWeight="700">What's New?</Text>
            <img style={{height:"8px",marginTop:"11px",marginLeft:"20px"}} src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/Vector%20(1).png" alt="arrow"></img>
            </div>
            <div>
            <Text fontSize="16px" fontWeight="700">Carrers</Text>
            </div>
            <div  style={{display:"flex",flexDirection:"row",width:"200px"}}>
            <Text fontSize="16px" fontWeight="700">Partner With Us</Text>
            <img style={{height:"8px",marginTop:"11px",marginLeft:"20px"}} src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/Vector%20(1).png" alt="arrow"></img>
            </div>
        </div>
        <div>
            <div style={{height:"40px",width:"200px",display:"flex",flexDirection:"row",marginLeft:"10px",border:"1px solid black",marginTop:"10px",borderRadius:"4px",borderColor:"#FDB605"}}>
            <img style={{height:"80%",marginLeft:"10px",marginTop:"4px"}} src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/Vector%20(2).png" alt="location"></img>
                <Text  fontSize="13px" fontWeight="500" marginTop="10px" marginLeft="18px">{location}</Text>
                <img style={{height:"8px",marginTop:"15px",position:"absolute",zIndex:"-100",marginLeft:"13%"}} src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/Vector%20(1).png" alt="arrow"></img>
            </div>
        </div>
        <div style={{marginLeft:"30px", marginRight:"10px", width:"200px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
        {token===""?
        <>
            <Button height="50px" width="90px" backgroundColor="transparent">Login</Button>
            <Button height="50px" width="90px" backgroundColor="#FDB605"> Sign up</Button>
            </>
            :
            <Button height="45px" width="180px" backgroundColor="transparent" border="1px solid #FDB065">{name}</Button>}
        </div>
        </div>
        </div>
        </>
    )
}