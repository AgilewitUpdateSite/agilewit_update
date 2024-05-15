import Header from '../Header/Header'
import DeskTopHeader  from '../DeskTopHeader/DeskTopHeader'
import BottomPage from '../BottomPage/BottomPage'
import Options from '../Assets/Options.svg'
import Chaticon from '../Assets/Chaticon.svg'
import "./Counsulting.css"
const Counsulting = () => {
    return (
        <div className='HomeTopLayer'>
        <Header />
        <DeskTopHeader />
        <div className="HomeSecondLayer">
        <img src={Options} alt="Options Icons" className="HomeOptionsIcon" />
        <div className="SubHomeSecondLayer">
            <BottomPage/>
            <BottomPage/>
            <BottomPage/>
            <BottomPage/>

        </div> 
        <img src={Chaticon} alt="Chat" className="HomeOptionsIcon"/> 
        </div>  
        </div>
    )
}

export default Counsulting
