import React from 'react';
import { CopyOutlined } from '@ant-design/icons';
import Pageview from '../../../lib/layout/dashboard/Pageview';
import '../../../lib/style/dashboard/wallet.scss';
import NGN from '../../../lib/assets/dashboard/ngn.png';

function Wallet () {
    return (
        <Pageview title="Wallet">
            <div className="wallet">
                <div className="existing-details">
                    <div className="bank-details">
                        <h5>TOBILOBA AKINYEMI O.</h5>
                        <h6>3030034509 <CopyOutlined /></h6>
                        <h6>POLARIS BANK</h6>
                    </div>

                    <div className="account-balance">
                        <img src={ NGN } alt="Nigeria Logo" />
                        <div>
                            <h5 className="mb-1">24,000.00</h5>
                            <h6>Acct. Balance</h6>
                        </div>
                    </div>
                </div>

                <h6 className="intruction"><span>Hello Tobiloba</span>, Kindly use the account details provided
                    above to top up your wallet.</h6>

                <div className="mt-4">
                    <button className="btn btn-block btn-black">Copy Account Details</button>
                </div>
            </div>
        </Pageview>
    );
}

export default Wallet;
