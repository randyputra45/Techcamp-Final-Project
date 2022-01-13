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
import Paket2 from "./pages/PaketDyslexia"
import MenuHealthTest from "./pages/MenuHealthTest";
import ExampleHasilHealthTest from "./pages/ExampleHasilHealthTest";
import MobilePhoneTable from "./pages/MobilePhoneTable";
import OrderCompelete from "./pages/OrderCompelete"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Paket from "./pages/PaketKonseling";
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
import PaketKonseling from "./pages/PaketKonseling";
import PaketDyslexia from "./pages/PaketDyslexia";

function App() {
  return (
    <>
      <main>
        <Router>
          <Switch>
            <Route exact path="/" component={Landingpage } />
            <Route exact path="/infolayanan" component={Landinginfo } />
            <Route exact path="/infolayanan/konsultasi" component={LandingKonseling } />
            <Route exact path="/infolayanan/webinar" component={LandingWebinar } />
            <Route exact path="/infolayanan/coachingmurid" component={LandingCoaching } />
            <Route exact path="/infolayanan/pusatdyslexia" component={LandingDyslexia } />
            <Route exact path="/infolayanan/blog" component={LandingBlog } />
            <Route exact path="/infolayanan/teskesehatan" component={LandingTesKesehatan } />
            <Route exact path="/login" component={Login } />
            <Route exact path="/register" component={Register1 } />
            <Route path="/verify" component={Register3 } />
            <Route exact path="/register/success" component={Register4 } />
            <Route exact path="/experts" component={MenuExpert } />
            <Route exact path="/experts/:id" component={ExampleExpert } />
            <PrivateRoute path="/home" component={Home} />
            <PrivateRoute exact path="/blogs" component={MenuBlog} />
            <PrivateRoute exact path="/blogs/:id" component={ExampleBlog} />
            <PrivateRoute exact path="/webinars" component={MenuWebinar} />
            <PrivateRoute exact path="/webinars/:id" component={ExampleWebinar} />
            <PrivateRoute exact path="/webinars/user/:id" component={ProfileWebinar} />
            <PrivateRoute exact path="/pricing/konseling" component={PaketKonseling} />
            <PrivateRoute exact path="/pricing/dyslexia" component={PaketDyslexia} />
            <PrivateRoute exact path="/screening" component={StartScreening} />
            <PrivateRoute exact path="/screening/start" component={ExampleScreening} />
            <PrivateRoute exact path="/screening/result" component={ExampleHasilScreening} />
            <PrivateRoute exact path="/healthtest" component={StartHealthtest} />
            <PrivateRoute exact path="/healthtest/start" component={ExampleHealthTest} />
            <PrivateRoute exact path="/healthtest/result" component={ExampleHasilHealthTest} />
            <PrivateRoute exact path="/payment" component={TransaksiPembayaran} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <Route exact path="/layanan/pusatdyslexia" component={MenuDyslexia} />
            <Route exact path="/layanan/coaching" component={MenuCoaching} />
            <Route exact path="/layanan/konsultasi" component={MenuKonseling} />
            <Route exact path="/pricing" component={Paket} />
            <Route exact path="/pricing2" component={Paket2} />
            <Route exact path="/payment" component={TransaksiPembayaran} />
            <Route exact path="/payment/scanqr" component={ScanQR} />
            <Route exact path="/payment/success" component={OrderCompelete} />
            <Route exact path="/profile/notification" component={ProfileNotification} />
            <Route exact path="/invoice" component={DetilPembayaran} />
            <Route exact path="/partnership" component={Partnership} />
            <Route exact path="/16" component={TentangKami} />
            <Route exact path="/feedback" component={Feedback} />


            {/* <Route path="/home" component={Home} />
            <Route exact path="/blogs" component={MenuBlog} />
            <Route exact path="/blogs/:id" component={ExampleBlog} />
            <Route exact path="/webinar" component={MenuWebinar} />
            <Route exact path="/webinar/:id" component={ExampleWebinar} />
            <Route exact path="/webinar/user/:id" component={ProfileWebinar} />
            <Route exact path="/konseling" component={MenuKonseling} />
            <Route exact path="/pusatdsylexia" component={MenuDyslexia} />
            <Route exact path="/coaching" component={MenuCoaching} />
            <Route exact path="/pricing" component={Paket} />
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
            <Route exact path="/profile/layanan" component={ProfilLayanan} />
            <Route exact path="/profile/webinar" component={ProfileWebinar} />
            <Route exact path="/profile/blog" component={ProfileBlog} />
            <Route exact path="/profile/gantiemail" component={ProfilGantiEmail} />
            <Route exact path="/profile/gantipass" component={ProfilGantiPass} />
            <Route exact path="/profile/gantinomor" component={ProfilGantiNomor} />
            <Route exact path="/invoice" component={DetilPembayaran} /> */}
          </Switch>
        </Router>
      </main>
    </>
  );
}

export default App;
