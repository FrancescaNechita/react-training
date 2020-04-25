import React, { Fragment, Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../logo.svg';

import './AppHeader.css'

export class AppHeader extends Component {
  unlistenHistory;

  constructor(props) {
    super(props);

    let tempState = {};
    this.props.menuItemNames.forEach(element => {
      tempState[element] = false;
    });

    this.state = tempState;
  }

  componentDidMount() {
    this.unlistenHistory = this.props.history.listen((location, action) => {
      console.log('changeLocation', location);

      this.props.menuItemNames.filter(i => location.pathname.indexOf(i) < 0)
        .forEach(i => {
          console.log(i);
          this.setState({ [i]: false });
        })
    })
  }

  componentWillUnmount() {
    this.unlistenHistory();
  }

  selectMenuItem($event, menuItemName) {
    this.setState(prevState => ({
      [menuItemName]: !prevState[menuItemName]
    }));

    this.props.menuItemNames.filter(i => i !== menuItemName)
      .forEach(i => {
        this.setState({ [i]: false });
      })
  }

  render() {
    console.log(this.props);
    const menuItems = this.props.menuItemNames.map(name => {
      let cssClasses = `app-menu-item ${this.state[name] ? "active" : ""}`
      return <Link to={`/${name}`} key={`menuItem${name}`} className={cssClasses}
        onClick={(e) => this.selectMenuItem(e, name)}>{name}</Link>
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
}

export default withRouter(AppHeader);
