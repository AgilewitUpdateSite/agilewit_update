
import Header from "../Header/Header";
import DesktopHeader from '../DeskTopHeader/DeskTopHeader';
import ServiceHeaders from '../ServiceHeaders/ServiceHeaders';
import BottomPage from '../BottomPage/BottomPage';
import './TimeSheet.css';


const Employs=[
    {Name:"Sidd",
        userame:"siddhumsd@gmail.com",
        password:"ThalaDhoni",
        Type:"Employ"

    },
    {Name:"SidduT",
        userame:"   ",
        password:"Thala",
        Type:"Employe"

    },
    {Name:"Siddu",
        userame:"tsiddu@gmail.com",
        password:"Dhoni@07",
        Type:"Admin"

    },
]


const Result=Employs.filter((each)=>each.userame==="tsiddu@gmail.com"&&each.password==="Dhoni@07")

const TimeSheet = () => {

    return (
        <div className='HomeTopLayer'>
            <Header />
            <DesktopHeader />
            <div className='SubHomeSecondLayer'>
                <ServiceHeaders ServiceHeadersInfo="TimeSheet" />
              
                <h1>TimeSheet</h1>
                {Result.map((each)=>  <div key={each.userame}>
                        <p>{each.Name}</p>
                        {each.Type === "Admin" ? <p>AdminComponent</p> : <p>EmployeeComponent</p>}
                    </div>)}
              
                <BottomPage />
            </div>
        </div>
    );
};

export default TimeSheet;
