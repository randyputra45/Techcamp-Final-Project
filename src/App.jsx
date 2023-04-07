import "./css/style.css";
import "./css/color.css";

import ScrollToTop from 'react-router-scroll-top'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


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
import MenuHealthTest from "./pages/MenuHealthTest";
import ExampleHasilHealthTest from "./pages/ExampleHasilHealthTest";
import MobilePhoneTable from "./pages/MobilePhoneTable";
import OrderCompelete from "./pages/OrderCompelete"
import Paket from "./pages/Paket";
import ExampleScreening from "./pages/ExampleScreening";
import ExampleHasilScreening from "./pages/ExampleHasilScreening";
import MenuKonseling from "./pages/MenuKonseling";
import MenuDyslexia from "./pages/MenuDyslexia";
import MenuCoaching from "./pages/MenuCoaching";
import ProfileNotification from "./pages/ProfileNotification";
import ScanQR from "./components/ScanQR";
import StartScreening from "./pages/StartScreening";
import StartHealthtest from "./pages/StartHealthtest";
import UserConseling from "./pages/UserConseling";
import LandingKonseling from "./pages/LandingKonseling";
import LandingWebinar from "./pages/LandingWebinar";
import LandingCoaching from "./pages/LandingCoaching";
import LandingDyslexia from "./pages/LandingDyslexia";
import LandingTesKesehatan from "./pages/LandingTesKesehatan";
import LandingBlog from "./pages/LandingBlog";
import ProfilLayanan from "./pages/ProfilLayanan";
import ProfilGantiNomor from "./pages/ProfilGantiNomor";
import ProfilGantiPass from "./pages/ProfilGantiPass";
import ProfilGantiEmail from "./pages/ProfilGantiEmail";
import Partnership from "./pages/Partnership";
import TentangKami from "./pages/TentangKami";
import Feedback from "./pages/Feedback";
import PembayaranWebinar from "./pages/TransaksiPembayaranWebinar";
import PaketKonseling from "./pages/PaketKonseling";
import PaketDyslexia from "./pages/PaketDyslexia";
import PembayaranDyslexia from "./pages/TransaksiPembayaranDyslexia";
import ExampleCoaching from "./pages/ExampleCoaching";
import PembayaranCoaching from "./pages/TransaksiPembayaranCoaching";
import ProfileEdit from "./pages/ProfileEdit";
import UserWebinar from "./pages/UserWebinar";
import UserCoaching from "./pages/UserCoaching";
import UserDyslexia from "./pages/UserDyslexia";
import ProfilGantiPassEmail from "./pages/ProfilGantiPassEmail";
import Response404 from "./pages/Response404";


function App() {
  return (
    <>
      <main>
        <Router >
          <ScrollToTop >
            <Switch>
              <Route exact path="/" component={Landingpage } />

              {/* Info Layanan */}
              <Route exact path="/infolayanan" component={Landinginfo } />
              <Route exact path="/infolayanan/konsultasi" component={LandingKonseling } />
              <Route exact path="/infolayanan/webinar" component={LandingWebinar } />
              <Route exact path="/infolayanan/coaching" component={LandingCoaching } />
              <Route exact path="/infolayanan/dyslexia" component={LandingDyslexia } />
              <Route exact path="/infolayanan/blogs" component={LandingBlog } />
              <Route exact path="/infolayanan/healthtest" component={LandingTesKesehatan } />

              {/* Landing Page */}
              <Route exact path="/partnership" component={Partnership} />
              <Route exact path="/aboutus" component={TentangKami} />
              <Route exact path="/feedback" component={Feedback} />

              {/* Authentication */}
              <Route exact path="/login" component={Login } />
              <Route exact path="/register" component={Register1 } />
              <Route exact path="/register/checkemail" component={Register3 } />
              <Route path="/verify" component={Register4 } />
              
              {/* Expert */}
              <Route exact path="/home" component={Home} />
              <Route exact path="/experts" component={MenuExpert } />
              <Route exact path="/experts/:id" component={ExampleExpert } />

              {/* Blog */}
              <Route exact path="/blogs" component={MenuBlog} />
              <Route exact path="/blogs/:id" component={ExampleBlog} />

              {/* Webinar */}
              <Route exact path="/webinars" component={MenuWebinar} />
              <Route exact path="/webinars/:id" component={ExampleWebinar} />
              <Route exact path="/webinar/payment" component={PembayaranWebinar} />

              {/* Payment Page */}
              <Route exact path="/payment/scanqr" component={ScanQR} />
              <Route exact path="/payment/success" component={OrderCompelete} />

              {/* Screening & HealthTest */}
              <Route exact path="/screening" component={StartScreening} />
              <Route exact path="/screening/start" component={ExampleScreening} />
              <Route exact path="/screening/result" component={ExampleHasilScreening} />
              <Route exact path="/healthtest/intro" component={MenuHealthTest} />
              <Route exact path="/healthtest" component={StartHealthtest} />
              <Route exact path="/healthtest/start" component={ExampleHealthTest} />
              <Route exact path="/healthtest/result" component={ExampleHasilHealthTest} />

              {/* Coaching */}
              <Route exact path="/coaching" component={MenuCoaching} />
              <Route exact path="/coaching/:id" component={ExampleCoaching} />
              <Route exact path="/coach/payment" component={PembayaranCoaching} />

              {/* Konseling */}
              <Route exact path="/counseling" component={MenuKonseling} />
              <Route exact path="/counseling/pricing" component={Paket} />
              <Route exact path="/counseling/payment" component={TransaksiPembayaran} />

              {/* Dyslexia */}
              <Route exact path="/dyslexia" component={MenuDyslexia} />
              <Route exact path="/dyslexia/pricing" component={PaketDyslexia} />
              <Route exact path="/dyslexia/payment" component={PembayaranDyslexia} />

              {/* Profile */}
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/profile/notification" component={ProfileNotification} />

              <PrivateRoute exact path="/profile/edit" component={ProfileEdit} />
\             <PrivateRoute exact path="/profile/conseling" component={UserConseling} />
              <PrivateRoute exact path="/profile/webinars" component={UserWebinar} />
              <PrivateRoute exact path="/profile/coaching" component={UserCoaching} />
              <PrivateRoute exact path="/profile/dyslexia" component={UserDyslexia} />
              <PrivateRoute exact path="/profile/blogs" component={ProfileBlog} />

              <Route exact path="/profile/changepass" component={ProfilGantiPassEmail} />
              <Route path="/passwordreset" component={ProfilGantiPass} />

              {/* Not Found */}
              <Route component={Response404} />
            </Switch> 
          </ScrollToTop>
        </Router>
      </main>
    </>
  );
}

export default App;
