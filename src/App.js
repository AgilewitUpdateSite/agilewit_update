import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './Home/Home';
import AboutUs from "./AboutUs/AboutUs"
import Counsulting from './Counsulting/Counsulting'
import MobileAppDevelopment from './MobileAppDevelopment/MobileAppDevelopment'
import ContactUs from './ContactUS/ContactUs'
function App() {
  return (
    <div>
     <BrowserRouter>
     <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/AboutUs" component={AboutUs}/>
      <Route exact path="/Consulting" component={Counsulting}/>
      <Route exact path="/MobileAppDevelopment" component={MobileAppDevelopment}/>
      <Route exact path="/ContactUs" component={ContactUs}/>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;