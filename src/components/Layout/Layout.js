import React, { PureComponent } from 'react';
import './Layout.css';
import { AuthConsumer } from '../../contexts/Auth';
import SectionTitle from '../SectionTitle';

class Layout extends PureComponent {

  renderHeader = (HeaderComp)=> {
    return (
      <header className="header">
        <SectionTitle className="header__title">Header</SectionTitle>
        <div className="header__content">
          <HeaderComp />
        </div>
      </header>
    );
  };

  renderFooter = (FooterComp) => {
    return (
      <footer className="footer">
        <SectionTitle className="header__title">Footer</SectionTitle>
        <div className="header__content">
          <FooterComp />
        </div>
      </footer>
    );
  };

  renderMain = (content) =>{
    const {header,footer} = this.props;
    const classForMain = `main${header ? ' main--with-header': ''}${footer ? ' main--with-footer': ''}`;

    return (
      <main className={classForMain}>
        <SectionTitle className="main__title section-title">Main</SectionTitle>
          {content}
      </main>
    );
  };

  render() {

    const {header,footer, children} = this.props;
    if(footer){
      this.setState({footer: true})
    }
    if(header){
      this.setState({header: true})
    }

    return (
        <React.Fragment>
          {header && this.renderHeader(header)}
          {children && this.renderMain(children)}
          {footer && this.renderFooter(footer)}
        </React.Fragment>
    );
  }
}

export default Layout;
