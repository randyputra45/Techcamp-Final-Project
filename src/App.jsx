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
import StartScreening from "./pages/StartScreening";
import StartHealthtest from "./pages/StartHealthtest";
import DetilPembayaran from "./pages/DetilPembayaran";
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

function App() {
  return (
    <>
      <main>
        <Router>
          <Switch>
            <Route exact path="/" component={Landingpage } />

            {/* Info Layanan */}
            <Route exact path="/infolayanan" component={Landinginfo } />
            <Route exact path="/infolayanan/konsultasi" component={LandingKonseling } />
            <Route exact path="/infolayanan/webinar" component={LandingWebinar } />
            <Route exact path="/infolayanan/coachingmurid" component={LandingCoaching } />
            <Route exact path="/infolayanan/pusatdyslexia" component={LandingDyslexia } />
            <Route exact path="/infolayanan/blog" component={LandingBlog } />
            <Route exact path="/infolayanan/teskesehatan" component={LandingTesKesehatan } />

            {/* Landing Page */}
            <Route exact path="/partnership" component={Partnership} />
            <Route exact path="/aboutus" component={TentangKami} />
            <Route exact path="/feedback" component={Feedback} />

            {/* Authentication */}
            <Route exact path="/login" component={Login } />
            <Route exact path="/register" component={Register1 } />
            <Route path="/verify" component={Register3 } />
            <Route exact path="/register/success" component={Register4 } />
            
            {/* Expert */}
            <Route path="/home" component={Home} />
            <Route exact path="/experts" component={MenuExpert } />
            <Route exact path="/experts/:id" component={ExampleExpert } />

            {/* Blog */}
            <Route exact path="/blogs" component={MenuBlog} />
            <Route exact path="/blogs/:id" component={ExampleBlog} />

            {/* Webinar */}
            <Route exact path="/webinars" component={MenuWebinar} />
            <Route exact path="/webinars/:id" component={ExampleWebinar} />
            <Route exact path="/webinars/user/:id" component={ProfileWebinar} />

            {/* Payment Page */}
            <Route exact path="/payment" component={TransaksiPembayaran} />
            <Route exact path="/payment/webinar" component={PembayaranWebinar} />
            <Route exact path="/payment/scanqr" component={ScanQR} />
            <Route exact path="/payment/status" component={DetilPembayaran} />
            <Route exact path="/payment/success" component={OrderCompelete} />

            {/* Screening & HealthTest */}
            <Route exact path="/screening" component={StartScreening} />
            <Route exact path="/screening/start" component={ExampleScreening} />
            <Route exact path="/screening/result" component={ExampleHasilScreening} />
            <Route exact path="/healthtest" component={MenuHealthTest} />
            <Route exact path="/healthtest/intro" component={StartHealthtest} />
            <Route exact path="/healthtest/start" component={ExampleHealthTest} />
            <Route exact path="/healthtest/result" component={ExampleHasilHealthTest} />

            {/* Coaching */}
            <Route exact path="/coaching" component={MenuCoaching} />
            <Route exact path="/coaching/:id" component={ExampleCoaching} />
            <Route exact path="/payment/coaching" component={PembayaranCoaching} />

            {/* Konseling */}
            <Route exact path="/counseling" component={MenuKonseling} />
            <Route exact path="/counseling/pricing" component={Paket} />

            {/* Dyslexia */}
            <Route exact path="/dyslexia" component={MenuDyslexia} />
            <Route exact path="/dyslexia/pricing" component={PaketDyslexia} />
            <Route exact path="/dyslexia/payment" component={PembayaranDyslexia} />

            {/* Profile */}
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profile/notification" component={ProfileNotification} />
            <Route exact path="/profile/layanan" component={ProfilLayanan} />
            <Route exact path="/profile/webinar" component={ProfileWebinar} />
            <Route exact path="/profile/blog" component={ProfileBlog} />
            <Route exact path="/profile/gantiemail" component={ProfilGantiEmail} />
            <Route exact path="/profile/gantipass" component={ProfilGantiPass} />
            <Route exact path="/profile/gantinomor" component={ProfilGantiNomor} />
          </Switch>
        </Router>
      </main>
    </>
  );
}

export default App;
