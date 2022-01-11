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

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Paket from "./pages/Paket";
import ExampleScreening from "./pages/ExampleScreening";
import ExampleHasilScreening from "./pages/ExampleHasilScreening";

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
            <PrivateRoute path="/home" component={Home} />
            <PrivateRoute exact path="/blogs" component={MenuBlog} />
            <PrivateRoute exact path="/blogs/:id" component={ExampleBlog} />
            <PrivateRoute exact path="/webinar" component={MenuWebinar} />
            <PrivateRoute exact path="/webinar/:id" component={ExampleWebinar} />
            <PrivateRoute exact path="/webinar/user/:id" component={ProfileWebinar} />
            <PrivateRoute exact path="/pricing" component={Paket} />
            <PrivateRoute exact path="/screening" component={ExampleScreening} />
            <PrivateRoute exact path="/screening/result" component={ExampleHasilScreening} />
            <PrivateRoute exact path="/healthtest" component={ExampleHealthTest} />
            <PrivateRoute exact path="/healthtest/result" component={ExampleHasilHealthTest} />
            <PrivateRoute exact path="/payment" component={TransaksiPembayaran} />
            <PrivateRoute exact path="/profile" component={Profile} />
          </Switch>
        </Router>
      </main>
    </>
  );
}

export default App;
