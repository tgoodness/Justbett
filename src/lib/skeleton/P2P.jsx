import React from 'react'
import Skeleton from "@material-ui/lab/Skeleton";
import '../style/skeleton/style.scss';

function P2P() {
    return (
        <div className="p2p">
            <div className="top-header">
                <Skeleton width={50} height={40} className="circle" />
                <Skeleton height={40} width={50} />
            </div>

            <div className="switch-control mt-3">
                <Skeleton height={20} className="circle" />
                <Skeleton />
            </div>

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
