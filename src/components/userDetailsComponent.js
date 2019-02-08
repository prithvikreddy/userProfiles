import React, { Component } from 'react';
import { connect } from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';


class UserDetails extends Component {
  createTable = (rows, likes, disLikes) => {
    let table = []
    table.push(<thead key={0}><tr key={0}><td>Likes</td><td>Dislikes</td></tr></thead>);
    let tbody = [];
    // Outer loop to create parent
    for (let i = 0; i < rows; i++) {
      //Create the parent and add the children

      tbody.push(<tr key={i + 1}><td>{likes[i]}</td><td>{disLikes[i]}</td></tr>)
    }
    table.push(<tbody key={1}>{tbody}</tbody>);
    return table;
  }

  render() {
    let { selectedUser: user } = this.props;
    if (user) {
      user = user.toJS();
    }
    const rows = user ? user.Likes.length > user.Dislikes.length ? user.Likes.length : user.Dislikes.length : 0;
    return (
      user &&
      <div>
        <div className="align-center">
          <div className="user-details">
            <div>
              <img src={user.img} className="profile-img" alt="user" />
            </div>
            <div className="rating-container">
              <button className="send-message">Send Message</button>
              <StarRatingComponent
                name="rating"
                editing={false}
                renderStarIcon={() => <span>♥</span>}
                starCount={5}
                value={user.rating}
              />
            </div>
          </div>
          <div>{user.Description}</div>
        </div>
        <table>
          {this.createTable(rows, user.Likes, user.Dislikes)}
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedUser: state.getIn(["selectedUser"])
  }
}
export default connect(mapStateToProps)(UserDetails);
