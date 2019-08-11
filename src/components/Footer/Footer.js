import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    return (
      <AuthConsumer>
        {
          ({isAuthorized, email})=>{
            const content = isAuthorized ?  `Вы вошли как ${email}`:  `Вы гость в этой системе`;

            return(
              <p className="footer-message t-footer">{content}</p>
            )
          }
        }
      </AuthConsumer>
    );
  }
}

export default Footer;
