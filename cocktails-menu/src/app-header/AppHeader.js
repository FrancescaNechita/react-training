import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../logo.svg';

import './AppHeader.css'

export function AppHeader(props) {

  const intializeSelectedCategories = () => {
    let tempState = {};
    props.menuItemNames.forEach(element => {
      tempState[element] = false;
    });

    return tempState
  }

  const [selectedCategory, setSelectedCategory] = useState(intializeSelectedCategories());

  useEffect(() => {
    let unlistenHistory = props.history.listen((location, action) => {
      let tempState = {};
      props.menuItemNames.forEach(i => tempState[i] = location.pathname.indexOf(`/${i}`) >= 0);
      setSelectedCategory(tempState);
    });

    return () => {
      unlistenHistory();
    }
  });

  const selectMenuItem = ($event, menuItemName) => {
    let tempState = {};
    props.menuItemNames.forEach(i => {
      tempState[i] = false;
    });
    tempState[menuItemName] = true;

    setSelectedCategory(tempState);
  }

  const menuItems = props.menuItemNames.map(name => {
    let cssClasses = `app-menu-item ${selectedCategory[name] ? "active" : ""}`
    return <Link to={`/${name}`} key={`menuItem${name}`} className={cssClasses}
      onClick={(e) => selectMenuItem(e, name)}>{name}</Link>
  });

  return <Fragment>
    <header className="app-header">
      <Link to="/">
        <img src={logo} className="app-logo" alt="logo" />
        <label className="app-title">Cocktails</label>
      </Link>
    </header>
    <div className="app-menu">
      {menuItems}
    </div>
  </Fragment>
}

export default withRouter(AppHeader);
