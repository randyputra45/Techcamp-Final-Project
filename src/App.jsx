import "./css/style.css";
import "./css/color.css";

// Page Routing
import React from "react";
import PrivateRoute from "./route/PrivateRoutes";
import ExampleBlog from "./pages/ExampleBlog";
import ExampleExpert from "./pages/ExampleExpert";
import ExampleWebinar from "./pages/ExampleWebinar";
import Home from "./pages/Home";
import Landingpage from "./pages/Landingpage";
import Landinginfo from "./pages/Landinginfo";
import Login from "./pages/Login";
import MenuBlog from "./pages/MenuBlog";
import MenuWebinar from "./pages/MenuWebinar";
import Notification from "./pages/ProfileNotification";
import TransaksiPembayaran from "./pages/TransaksiPembayaran";
import Profile from "./pages/Profile";
import ProfileBlog from "./pages/ProfileBlog";
import ProfileWebinar from "./pages/ProfileWebinar";
import Register1 from "./pages/Register1";
import Register2 from "./pages/Register2";
import Register3 from "./pages/Register3";
import Register4 from "./pages/Register4";
import Screening1 from "./pages/Screening1";
import ExampleHealthTest from "./pages/ExampleHealthTest";
import MenuExpert from "./pages/MenuExpert";
import Paket2 from "./pages/Paket2"
import MenuHealthTest from "./pages/MenuHealthTest";
import ExampleHasilHealthTest from "./pages/ExampleHasilHealthTest";
import MobilePhoneTable from "./pages/MobilePhoneTable";
import OrderCompelete from "./pages/OrderCompelete"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Paket from "./pages/Paket";
import ExampleScreening from "./pages/ExampleScreening";
import ExampleHasilScreening from "./pages/ExampleHasilScreening";
import MenuKonseling from "./pages/MenuKonseling";
import MenuDyslexia from "./pages/MenuDyslexia";
import MenuCoaching from "./pages/MenuCoaching";
import ProfileNotification from "./pages/ProfileNotification";
import ScanQR from "./components/ScanQR";
import DetilPembayaran from "./pages/DetilPembayaran";


function App() {
  return (
    <>
      <main>
        <Router>
          <Switch>
            <Route exact path="/" component={Landingpage } />
            <Route exact path="/landinginfo" component={Landinginfo } />
            <Route exact path="/login" component={Login } />
            <Route exact path="/register" component={Register1 } />
            <Route path="/verify" component={Register3 } />
            <Route exact path="/register/success" component={Register4 } />
            <Route path="/home" component={Home} />
            <Route exact path="/blogs" component={MenuBlog} />
            <Route exact path="/blogs/:id" component={ExampleBlog} />
            <Route exact path="/webinar" component={MenuWebinar} />
            <Route exact path="/webinar/:id" component={ExampleWebinar} />
            <Route exact path="/webinar/user/:id" component={ProfileWebinar} />
            <Route exact path="/konseling" component={MenuKonseling} />
            <Route exact path="/pusatdsylexia" component={MenuDyslexia} />
            <Route exact path="/coaching" component={MenuCoaching} />
            <Route exact path="/pricing" component={Paket} />
            <Route exact path="/pricing2" component={Paket2} />
            <Route exact path="/screening" component={ExampleScreening} />
            <Route exact path="/screening/result" component={ExampleHasilScreening} />
            <Route exact path="/healthtest" component={MenuHealthTest} />
            <Route exact path="/healthtest/test" component={ExampleHealthTest} />
            <Route exact path="/healthtest/result" component={ExampleHasilHealthTest} />
            <Route exact path="/payment" component={TransaksiPembayaran} />
            <Route exact path="/payment/scanqr" component={ScanQR} />
            <Route exact path="/payment/success" component={OrderCompelete} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profile/notification" component={ProfileNotification} />
            <Route exact path="/invoice" component={DetilPembayaran} />
          </Switch>
        </Router>
      </main>
    </>
  );
}

export default App;
