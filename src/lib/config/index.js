import React, { Suspense, lazy } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import FallBack from "../control/error-page//FallBack";
import useWindowSize from "../service/UseWindowSize";


const Home = lazy(() => import("../../components/home/Home"));
const About = lazy(() => import("../../components/home/About"));
const Contact = lazy(() => import("../../components/home/Contact"));
const Register = lazy(() => import("../../components/home/Register"));
const Login = lazy(() => import("../../components/home/Login"));
const ForgotPassword = lazy(() => import("../../components/home/ForgotPassword"));
const ResetPassword = lazy(() => import("../../components/home/ResetPassword"));

//Dashboard
const Dashboard = lazy(() => import("../../components/dashboard/Dashboard"));
const Games = lazy(() => import("../../components/dashboard/Games"));
const PlaceBet = lazy(() => import("../../components/dashboard/PlaceBet"));
const PendingGames = lazy(() => import("../../components/dashboard/PendingGames"));
const GameHistory = lazy(() => import("../../components/dashboard/GameHistory"));
const GameDetails = lazy(() => import("../../components/dashboard/GameDetails"));
const Withdraw = lazy(() => import("../../components/dashboard/Withdraw"));
const InviteFriends = lazy(() => import("../../components/dashboard/InviteFriends"));
const Settings = lazy(() => import("../../components/dashboard/Settings"));

const PageNotFound = lazy(() =>
  import("../../lib/control/error-page/PageNotFound")
);

function Index () {
  //Switch viewport
  const [ width ] = useWindowSize();
  const GameComponent = width < 767 ? Games : Dashboard;

  return (
    <Suspense fallback={ <FallBack /> }>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/about" component={ About } />
          <Route exact path="/contact" component={ Contact } />
          <Route exact path="/register" component={ Register } />
          <Route exact path="/login" component={ Login } />
          <Route exact path="/forgot-password" component={ ForgotPassword } />
          <Route exact path="/reset-password" component={ ResetPassword } />

          <PrivateRoute path="/dashboard" component={ Dashboard } />
          <PrivateRoute path="/games" component={ GameComponent } />
          <PrivateRoute path="/place-bet/:groupId?" component={ PlaceBet } />
          <PrivateRoute path="/pending-games" component={ PendingGames } />
          <PrivateRoute path="/game-history" component={ GameHistory } />
          <PrivateRoute path="/game-details/:groupId" component={ GameDetails } />

          <PrivateRoute path="/withdraw" component={ Withdraw } />
          <PrivateRoute path="/invite-friends" component={ InviteFriends } />
          <PrivateRoute path="/settings" component={ Settings } />
          <PrivateRoute path="/*" component={ PageNotFound } />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default Index;
