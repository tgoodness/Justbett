import React from 'react'
import Skeleton from "@material-ui/lab/Skeleton";
import '../style/skeleton/style.scss';

function P2P() {
    return (
        <div className="p2p">
          
            <div className="skeleton-group">
                <Skeleton variant="circle" width={66} height={55} className="circle" />
                <Skeleton height={70} className="rect" />
            </div>
            <div className="skeleton-group">
                <Skeleton variant="circle" width={66} height={55} className="circle" />
                <Skeleton height={70} className="rect" />
            </div>
            <div className="skeleton-group">
                <Skeleton variant="circle" width={66} height={55} className="circle" />
                <Skeleton height={70} className="rect" />
            </div>
        </div>
    )
}

export default P2P
