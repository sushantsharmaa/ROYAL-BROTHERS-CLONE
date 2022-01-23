import { Button } from "@mui/material"

export const Upi = ()=>{
    return <div>
    
    <div style={{marginLeft:"40%", width:"100%", padding:"40px"}}>
          <div >
          <span style={{ marginLeft:"20%"}}>Enter your VPA</span>
          <br/>
          <br/>
          <br/>
          <input style={{border:"1px solid gray"}} type="text" placeholder="yourname@bankname" />
          </div>
           <br/>
          <button  style={{background:"#FFC600", color:"black", marginLeft:"20%"}} variant="contained" size="medium">
           pay now
          </button>

    </div>

    </div>
}