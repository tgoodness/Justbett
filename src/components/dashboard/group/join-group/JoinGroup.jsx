import React from 'react';
import { Link } from 'react-router-dom';

import Pageview from '../../../../lib/layout/dashboard/group/Pageview';
import Button from '../../../../lib/control/Button';
import '../../../../lib/style/dashboard/group/join-group.scss';

function JoinGroup() {
    return (
        <Pageview>
            <div className="join-group">
                <div className="join-group-card">
                    <h6>Do you want to join this group?</h6>

                    <div className="btn__group">
                        <Button className="btn btn-black" label="No"/>
                        <Link to="/group/place-bet/soccer/1" className="btn btn-warning" >Yes</Link>
                    </div>

                </div>
            </div>
        </Pageview>
    );
}

export default JoinGroup;
