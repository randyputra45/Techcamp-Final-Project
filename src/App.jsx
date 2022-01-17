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
              <PrivateRoute exact path="/home" component={Home} />
              <PrivateRoute exact path="/experts" component={MenuExpert } />
              <PrivateRoute exact path="/experts/:id" component={ExampleExpert } />

              {/* Blog */}
              <PrivateRoute exact path="/blogs" component={MenuBlog} />
              <PrivateRoute exact path="/blogs/:id" component={ExampleBlog} />

              {/* Webinar */}
              <PrivateRoute exact path="/webinars" component={MenuWebinar} />
              <PrivateRoute exact path="/webinars/:id" component={ExampleWebinar} />
              <PrivateRoute exact path="/webinar/payment" component={PembayaranWebinar} />

              {/* Payment Page */}
              <PrivateRoute exact path="/payment/scanqr" component={ScanQR} />
              <PrivateRoute exact path="/payment/success" component={OrderCompelete} />

              {/* Screening & HealthTest */}
              <PrivateRoute exact path="/screening" component={StartScreening} />
              <PrivateRoute exact path="/screening/start" component={ExampleScreening} />
              <PrivateRoute exact path="/screening/result" component={ExampleHasilScreening} />
              <PrivateRoute exact path="/healthtest/intro" component={MenuHealthTest} />
              <PrivateRoute exact path="/healthtest" component={StartHealthtest} />
              <PrivateRoute exact path="/healthtest/start" component={ExampleHealthTest} />
              <PrivateRoute exact path="/healthtest/result" component={ExampleHasilHealthTest} />

              {/* Coaching */}
              <PrivateRoute exact path="/coaching" component={MenuCoaching} />
              <PrivateRoute exact path="/coaching/:id" component={ExampleCoaching} />
              <PrivateRoute exact path="/coach/payment" component={PembayaranCoaching} />

              {/* Konseling */}
              <PrivateRoute exact path="/counseling" component={MenuKonseling} />
              <PrivateRoute exact path="/counseling/pricing" component={Paket} />
              <PrivateRoute exact path="/counseling/payment" component={TransaksiPembayaran} />

              {/* Dyslexia */}
              <PrivateRoute exact path="/dyslexia" component={MenuDyslexia} />
              <PrivateRoute exact path="/dyslexia/pricing" component={PaketDyslexia} />
              <PrivateRoute exact path="/dyslexia/payment" component={PembayaranDyslexia} />

              {/* Profile */}
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/profile/notification" component={ProfileNotification} />

              <PrivateRoute exact path="/profile/layanan" component={ProfilLayanan} />
              <PrivateRoute exact path="/profile/conseling" component={UserConseling} />
              <PrivateRoute exact path="/profile/webinars" component={UserWebinar} />
              <PrivateRoute exact path="/profile/coaching" component={UserCoaching} />
              <PrivateRoute exact path="/profile/dyslexia" component={UserDyslexia} />
              <PrivateRoute exact path="/profile/blogs" component={ProfileBlog} />

              <PrivateRoute exact path="/profile/edit" component={ProfileEdit} />
              <Route exact path="/profile/changepass" component={ProfilGantiPassEmail} />
              <Route path="/passwordreset" component={ProfilGantiPass} />
            </Switch>
          </ScrollToTop>
        </Router>
      </main>
    </>
  );
}

export default App;
