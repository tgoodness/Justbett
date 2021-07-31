import React from 'react';
import Pageview from '../../../lib/layout/dashboard/Pageview';
import { Link } from 'react-router-dom';
import '../../../lib/style/dashboard/games.scss';

import Soccer from '../../../lib/assets/games/soccer.svg';
import Color from '../../../lib/assets/games/color.svg';

function Games () {
    return (
        <Pageview title="Games">
            <div className="games-page">
                <div className="games">
                    <div className="row">

                        <div className="col-6 ">
                            <Link to="/place-bet/soccer">
                                <div className="game">
                                    <div className="game-icon">
                                        <img src={ Soccer } alt="Soccer Icon" className="img-fluid" />
                                    </div>
                                    <div className="game-title">Soccer</div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-6">
                            <Link to="/place-bet/color">
                                <div className="game">
                                    <div className="game-icon">
                                        <img src={ Color } alt="Soccer Icon" className="img-fluid" />
                                    </div>
                                    <div className="game-title">Color</div>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </Pageview>
    );
}

export default Games;
