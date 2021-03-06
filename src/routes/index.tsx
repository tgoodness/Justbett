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
const Withdraw = lazy(() => import('../pages/dashboard/withdraw'));
const Settings = lazy(() => import('../pages/dashboard/settings'));
const Profile = lazy(() => import('../pages/dashboard/profile/Profile'));
const AddMoney = lazy(() => import('../pages/dashboard/add-money'));
const Referrals = lazy(() => import('../pages/dashboard/referrals'));
const Support = lazy(() => import('../pages/dashboard/support'));

//Games
const PlaceBetSoccer = lazy(() => import('../pages/dashboard/place-bet/soccer'));
const PlaceBetColor = lazy(() => import('../pages/dashboard/place-bet/color'));
const PlaceBetPool = lazy(() => import('../pages/dashboard/place-bet/pool'));
const PoolPlayStation = lazy(() => import('../pages/dashboard/place-bet/pool/play-station/index'));

//Game
const Games = lazy(() => import('../pages/dashboard/games'));
const ActiveGames = lazy(() => import('../pages/dashboard/ongoing-games'));
const GameHistory = lazy(() => import('../pages/dashboard/game-history'));
const GameDetails = lazy(() => import('../pages/dashboard/game-details'));

const BankTransfer = lazy(() => import('../pages/dashboard/add-money/bank-transfer'));
const Card = lazy(() => import('../pages/dashboard/add-money/card'));

//Iclass group
const GroupInfo = lazy(() => import('../pages/dashboard/group/play-station/group-info'));
const PlayStation = lazy(() => import('../pages/dashboard/group/play-station'));
const PageNotFound = lazy(() => import('../components/error-page/NotFound'));

const Index = () => {
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
            path="place-bet/color"
            element={
              <Private>
                <PlaceBetColor />
              </Private>
            }
          >
            <Route
              path=":categoryId"
              element={
                <Private>
                  <PlaceBetColor />
                </Private>
              }
            />

            <Route
              path=""
              element={
                <Private>
                  <PlaceBetColor />
                </Private>
              }
            />
          </Route>

          <Route
            path="place-bet/pool"
            element={
              <Private>
                <PlaceBetPool />
              </Private>
            }
          />

          <Route
            path="place-bet/pool/play-station"
            element={
              <Private>
                <PoolPlayStation />
              </Private>
            }
          />

          <Route
            path="/history"
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

          <Route
            path="/support"
            element={
              <Private>
                <Support />
              </Private>
            }
          />

          <Route
            path="/referrals"
            element={
              <Private>
                <Referrals />
              </Private>
            }
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Index;
