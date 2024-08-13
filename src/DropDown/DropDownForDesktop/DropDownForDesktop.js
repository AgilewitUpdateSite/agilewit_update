import { Link } from 'react-router-dom'
import {DropDownContent} from '../../constant/DropDownContent'
import "../../DropDown/DropDown.css"

const DropDownForDesktop = () => {
    const{Expolre,Service,Product,AboutUS,CurrentOpening,Consulting,AppDevelopment,Training,Consen,Letsworktogether}=DropDownContent
    return (

       

                <div className="DropDownFirstLayer">
                    <div className="DropDownSecondLayer">
                        <h1>{Expolre}</h1>
                        <h1>{Service}</h1>
                        <h1>{Product}</h1>
                    </div>
<p>Sidd</p>
                    <div className="DropDownSecondLayer">
                        <div>

                            <Link className="LinkRemove" to="/AboutUs">
                                <p>{AboutUS}</p>
                            </Link>

                            <Link to="/Jobs" className="LinkRemove" >
                                <p>{CurrentOpening}</p>
                            </Link>
                        </div>
                        <div>
                            <Link to="/Consulting" className="LinkRemove" >
                                <p>{Consulting}</p>
                            </Link>
                            <Link className="LinkRemove" to="/MobileAppDevelopment" >
                                <p>{AppDevelopment}</p>
                            </Link>
                            <Link to="/Training" className="LinkRemove" >
                                <p>{Training}</p>
                            </Link>

                        </div>
                        <div>
                            <Link to="/Consen" className="LinkRemove" >
                                <p>{Consen}</p>
                            </Link>
                            <Link to="/TimeSheet" className='Links'>TIMESHEET

                        </Link>
                        </div>

                    </div>
                    <div className='LetsWorkTogetherContainer'>
                        <Link to="/ContactUs" className="LinkRemove">
                            <p className="LetWorktogethers" >{Letsworktogether}</p>
                        </Link>
                    </div>
                </div>

          
    )
}

export default DropDownForDesktop