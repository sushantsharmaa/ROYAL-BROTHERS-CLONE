import styles from "./css/location2.module.css";
import {Button} from "@chakra-ui/react"
import { useContext } from "react";
import {AppContext} from "../appContext/AppContextProvider"
import { Link } from "react-router-dom"
export default function Location2(){
    const {setTerms} = useContext(AppContext)
return(
    <div className={styles.main} >
    <div className={styles.Terms}>
    <div className={styles.TermH}>
    <p>Terms and Condition</p>
    </div>
    <div className={styles.notez}>
        <p>Note</p>
    </div>
    <div className={styles.terms1}>
    <ul className={styles.termj}>
    <li>Following documents need to uploaded -
    <ol className={styles.olas}>
        <li>Valid driving license.</li>
        <li>Any one of the following IDs - Aadhaar | Passport</li>
    </ol>
      </li>
<li>Original Driving license is to be deposited before picking up the vehicle and the same Will be returned once the vehicle is dropped.</li>
<li>A ride cannot commence until and unless required documents are submitted and verified. Cancellation policy will apply if proper documents are not uploaded for verification.</li>
<li>If you have signed up on Royal brothers platform from a different phone number than the phone number used for your Aadhaar card, then please upload any of the following documents additionally.</li>
<li>1) Voter ID, Bank passbook or statement, Passport</li>
<li>The customer has to deposit refundable security deposit for certain bikes to take a ride with us. The refund usually takes 5-7 working days to reflect in the source account from the date of invoice.</li>
<li>Fuel cost is not included in the rental amount.</li>
<li>Extra km beyond limit is chargeable at 4 for Honda Activa 4G per km. The charges mentioned is exclusive of tax.</li>
<li>The speed limit is 75 kmph or speed limit specified by the governing authority, whichever is lesser. Overspeeding fine of 200 is applicable after every 3 counts of overspeeding. This is exclusive of taxes and any other fines applied by the governing authority.</li>
<li>Delay fee of  100 along with 2X of the rental charges per hour will be charged for vehicle being returned after the grace period of 30 mins.</li>
    </ul>
    </div>
    <div className={styles.redMo}>
    <a href="/" >read more...</a>
    </div>
    <div className={styles.accepTer}>
    <input type="checkbox"></input>
    <p>I agree to terms & condition</p>
    </div>
    <div className={styles.accepTer}>
    <input type="checkbox"></input>
    <p>I agree to upload valid driving license and ID proof before the ride starts</p>
    </div>
    <Link to="/payment"><Button marginLeft="35px" width="170px" backgroundColor="#FDB605" onClick={()=>setTerms(false)}>PROCEED</Button></Link>
    </div>
    </div>
)
}