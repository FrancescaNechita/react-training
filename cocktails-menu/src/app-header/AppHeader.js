import React, { Fragment, Component } from 'react';
import logo from '../logo.svg';

import './AppHeader.css'

export class AppHeader extends Component {
  render() {
    const menuItems = this.props.menuItemNames.map(name =>
      <div className="app-menu-item">{name}</div>);

    return <Fragment>
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <label>Cocktails</label>
      </header>
      <div className="app-menu">
        { menuItems }
      </div>
    </Fragment>
  }
}
