import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectuser } from '../actions';
import { bindActionCreators } from 'redux';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: null };
  }

  getPeople = (people, searchText) => searchText ? people.filter(item => item.name.toLowerCase().indexOf(searchText) > -1) : people;
  handleItemClick = (index) => {
    this.setState({ activeIndex: index });
  }

  render() {
    const { peoples, selectuser } = this.props;
    return (
      <div>
        {peoples.map((people, i) => <div style={this.state.activeIndex === i ? { color: 'red', borderColor: 'red' } : null} onClick={() => { this.handleItemClick(i); selectuser(people) }} className="navItems" key={i}><span>{people.get("name")}</span><span>►</span></div>)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    peoples: state.getIn(["peoples"])
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectuser }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(UserList);

