import { Suspense, lazy } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Private from './Private';
import FallBack from '../components/error-page//FallBack';
import useWindowSize from '../helpers/UseWindowSize';

const Register = lazy(() => import('../pages/onboard/register'));
const Login = lazy(() => import('../pages/onboard/login'));
const ForgotPassword = lazy(() => import('../pages/onboard/forgot-password'));
const ResetPassword = lazy(() => import('../pages/onboard/reset-password'));

//Dashboard
const Dashboard = lazy(() => import('../pages/dashboard/dashboard'));
const Games = lazy(() => import('../pages/dashboard/games'));
const ActiveGames = lazy(() => import('../pages/dashboard/ongoing-games'));
const PlaceBetSoccer = lazy(() => import('../pages/dashboard/place-bet/soccer'));
const PlaceBetColor = lazy(() => import('../pages/dashboard/place-bet/color'));
const PendingGames = lazy(() => import('../pages/dashboard/pending-games'));
const GameHistory = lazy(() => import('../pages/dashboard/game-history'));
const GameDetails = lazy(() => import('../pages/dashboard/game-details'));
const Withdraw = lazy(() => import('../pages/dashboard/withdraw'));
const Activities = lazy(() => import('../pages/dashboard/activities'));
const Settings = lazy(() => import('../pages/dashboard/settings'));
const Profile = lazy(() => import('../pages/dashboard/profile/Profile'));
const AddMoney = lazy(() => import('../pages/dashboard/add-money'));
const BankTransfer = lazy(() => import('../pages/dashboard/add-money/bank-transfer'));
const Card = lazy(() => import('../pages/dashboard/add-money/card'));

//Iclass group
const GroupInfo = lazy(() => import('../pages/dashboard/group/play-station/group-info'));
const PlayStation = lazy(() => import('../pages/dashboard/group/play-station'));
const PageNotFound = lazy(() => import('../components/error-page/NotFound'));

const Index = (): JSX.Element => {
  //Switch viewport
  const [width] = useWindowSize();
  const GameComponent = width < 767 ? ActiveGames : Dashboard;

  return (
    <Suspense fallback={<FallBack />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          <Route
            path="/dashboard"
            element={
              <Private>
                <Dashboard />
              </Private>
            }
          />

          <Route
            path="/active-games"
            element={
              <Private>
                <GameComponent />
              </Private>
            }
          />

          <Route
            path="games/"
            element={
              <Private>
                <Games />
              </Private>
            }
          />

          <Route
            path="place-bet/soccer"
            element={
              <Private>
                <PlaceBetSoccer />
              </Private>
            }
          >
            <Route
              path=":playerId/:categoryId"
              element={
                <Private>
                  <PlaceBetSoccer />
                </Private>
              }
            />

            <Route
              path=""
              element={
                <Private>
                  <PlaceBetSoccer />
                </Private>
              }
            />
          </Route>

          <Route
            path="color/:playerId?/:catoryId?"
            element={
              <Private>
                <PlaceBetColor />
              </Private>
            }
          />

          <Route
            path="/pending-games"
            element={
              <Private>
                <PendingGames />
              </Private>
            }
          />

          <Route
            path="/game-history"
            element={
              <Private>
                <GameHistory />
              </Private>
            }
          />

          <Route
            path="/game-details/:groupId"
            element={
              <Private>
                <GameDetails />
              </Private>
            }
          />

          <Route
            path="/withdraw"
            element={
              <Private>
                <Withdraw />
              </Private>
            }
          />

          <Route
            path="/activities"
            element={
              <Private>
                <Activities />
              </Private>
            }
          />

          <Route
            path="/settings"
            element={
              <Private>
                <Settings />
              </Private>
            }
          />

          <Route
            path="/profile"
            element={
              <Private>
                <Profile />
              </Private>
            }
          />

          <Route
            path="/add-money/bank-transfer"
            element={
              <Private>
                <BankTransfer />
              </Private>
            }
          />

          <Route
            path="/add-money/card"
            element={
              <Private>
                <Card />
              </Private>
            }
          />
          <Route
            path="/add-money"
            element={
              <Private>
                <AddMoney />
              </Private>
            }
          />

          <Route
            path="/group-info"
            element={
              <Private>
                <GroupInfo />
              </Private>
            }
          />

          <Route
            path="/group/play-station/:groupId"
            element={
              <Private>
                <PlayStation />
              </Private>
            }
          />

          <Route
            path="/group/play-station/:groupId"
            element={
              <Private>
                <PageNotFound />
              </Private>
            }
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Index;
