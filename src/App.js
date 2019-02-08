import React, { Component } from 'react';
import './App.css';
import UserDetails from './components/userDetailsComponent.js';
import UserList from './components/userListComponent.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { search } from './actions';

class App extends Component {

  render() {
    const { search } = this.props;

    return (
      <div className="flexContainer flexColumn fullHeight whiteBackground">
        <nav className="flexContainer">
          <ul className="nav flexItem flexStart">
            <div className="search-wrapper">
              <input type="text" className="search-box"
                onChange={(e) => search(e.target.value.toLowerCase())} />
            </div>
          </ul>
          <ul className="nav flexContainer flexEnd">
            Peter Hong &nbsp; <i className="material-icons">&#xE7FD;</i> <i className="material-icons">&#xE5C5;</i>
          </ul>
        </nav>
        <div className="flexContainer flexItem">
          <main className="flexItem whiteBackground main">
            <UserDetails />
          </main>
          <aside className="sidebar sidebarLeft">
            <UserList />
          </aside>
        </div>
      </div >
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ search }, dispatch);
}


export default connect(null, mapDispatchToProps)(App);

