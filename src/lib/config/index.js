import React, { Suspense, lazy } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import FallBack from '../control/error-page//FallBack';
import useWindowSize from '../service/UseWindowSize';

const Home = lazy(() => import('../../components/home/Home'));
const About = lazy(() => import('../../components/home/About'));
const Contact = lazy(() => import('../../components/home/contact/Contact'));
const Register = lazy(() => import('../../components/home/register/Register'));
const Login = lazy(() => import('../../components/home/login/Login'));
const ForgotPassword = lazy(() => import('../../components/home/forgot-password/ForgotPassword'));
const ResetPassword = lazy(() => import('../../components/home/reset-password/ResetPassword'));

//Dashboard
const Dashboard = lazy(() => import('../../components/dashboard/dashboard/Dashboard'));
const Games = lazy(() => import('../../components/dashboard/games/Games'));
const ActiveGames = lazy(() => import('../../components/dashboard/active-games/ActiveGames'));
const PlaceBetSoccer = lazy(() => import('../../components/dashboard/place-bet/soccer/PlaceBet'));
const PlaceBetColor = lazy(() => import('../../components/dashboard/place-bet/color/PlaceBet'));
const PendingGames = lazy(() => import('../../components/dashboard/pending-games/PendingGames'));
const GameHistory = lazy(() => import('../../components/dashboard/game-history/GameHistory'));
const GameDetails = lazy(() => import('../../components/dashboard/game-details/GameDetails'));
const Withdraw = lazy(() => import('../../components/dashboard/withdraw/Withdraw'));
const Activities = lazy(() => import('../../components/dashboard/activities/Activites'));
const Settings = lazy(() => import('../../components/dashboard/settings/Settings'));
const Profile = lazy(() => import('../../components/dashboard/profile/Profile'));
const Wallet = lazy(() => import('../../components/dashboard/wallet/Wallet'));

//Iclass group
const GroupInfo = lazy(() => import('../../components/dashboard/group/play-station/group-info/GroupInfo'));
const PlayStation = lazy(() => import('../../components/dashboard/group/play-station/PlayStation'));

const PageNotFound = lazy(() => import('../../lib/control/error-page/PageNotFound'));

function Index() {
  //Switch viewport
  const [width] = useWindowSize();
  const GameComponent = width < 767 ? ActiveGames : Dashboard;

  return (
    <Suspense fallback={<FallBack />}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/reset-password" component={ResetPassword} />

          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/active-games" component={GameComponent} />
          <PrivateRoute path="/games" component={Games} />
          <PrivateRoute path="/place-bet/soccer/:groupId?" component={PlaceBetSoccer} />
          <PrivateRoute path="/place-bet/color/:groupId?" component={PlaceBetColor} />
          <PrivateRoute path="/pending-games" component={PendingGames} />
          <PrivateRoute path="/game-history" component={GameHistory} />
          <PrivateRoute path="/game-details/:groupId" component={GameDetails} />

          <PrivateRoute path="/withdraw" component={Withdraw} />
          <PrivateRoute path="/activities" component={Activities} />
          <PrivateRoute path="/settings" component={Settings} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/wallet" component={Wallet} />

       
          <PrivateRoute path="/group-info" component={GroupInfo} />
          <PrivateRoute path="/group/play-station/:groupId" component={PlayStation} />

          <PrivateRoute path="/*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default Index;
