import './nav.css'
import { FaHeartbeat, FaStream} from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { BiGridAlt, BiStats, BiCog, BiLogOut} from "react-icons/bi";

function NavBar(){
    return(
        <>
            <nav>
                <ul>
                    <li className='burger'><a href="#" ><FaStream/></a></li>
                    <li className='Active'><a href="#"><BiGridAlt/></a></li>
                    <li><a href="#"><BiStats/></a></li>
                    <li><a href="#"><FaHeartbeat/></a></li>
                    <li><a href="#"><FaCalendar/></a></li>
                    <div className="indi"></div>
                </ul>
                <div className="ambany">
                    <a href="#"><BiCog/></a>
                    <a href="#"><BiLogOut/></a>
                </div>
            </nav>
        </>
    )
}

export default NavBar