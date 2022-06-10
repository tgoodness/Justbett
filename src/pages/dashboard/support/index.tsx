import { Icon } from '@iconify/react';
import Pageview from '../../../core-ui/dashboard/Pageview';
import Header from '../../../core-ui/dashboard/Header';
import './style.scss';

function Support() {
  return (
    <>
      <Header title="Support">
        <h5>Support</h5>
      </Header>
      <Pageview>
        <div className="add-money">
          <a href="mailto:hi@justbett.com">
            <div>
              <h5>
                <Icon icon="ant-design:customer-service-outlined" />
                <span> Call us</span>
              </h5>
              <span></span>
            </div>
          </a>

          <a href="mailto:hi@justbett.com">
            <div>
              <h5>
                <Icon icon="line-md:email" />
                <span> Send an Email</span>
              </h5>
              <span></span>
            </div>
          </a>
          <a href="mailto:hi@justbett.com">
            <div>
              <h5>
                <Icon icon="akar-icons:chat-dots" />
                <span>Chat with us</span>
              </h5>
              <span></span>
            </div>
          </a>
        </div>
      </Pageview>
    </>
  );
}

export default Support;
