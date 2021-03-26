import React, { Component } from "react";
import API from "../utils/API";
import UserCard from "../components/Card";

class Discover extends Component {
  state = {
    results: null,
    order: "descending"
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.loadNextUser();
  }

  handleBtnClick = event => {
    if (this.state.order === "ascending") {
      this.setState({...this.state, order: "descending"})
      let x = this.state.results;
      var desSort  = x.sort(function(a, b) {
        var textA = a.name.first.toUpperCase();
        var textB = b.name.first.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
      this.setState({results: desSort})
    } else if (this.state.order === "descending") {
      this.setState({...this.state, order: "ascending"})
      let x = this.state.results;
      var ascSort  = x.sort(function(a, b) {
        var textA = a.name.first.toUpperCase();
        var textB = b.name.first.toUpperCase();
        return (textA < textB) ? 1 : (textA > textB) ? -1 : 0;
    });
      console.log(ascSort);
      this.setState({results: ascSort})
    } else {console.log("Error with state")}
  };

  loadNextUser = () => {
    API.getRandomUser()
      .then(res =>
        {this.setState({
          results: res.data.results
        }); 
      console.log(res.data.results)}
      )
      .catch(err => console.log(err));
  };

  render() {
    if (!this.state.results) {
      return <div />
  }
  
  return (
    <div className="container">
        <div>
          <h3 className="text-center">
            Employee Directory
          </h3>
          <div className="row"> 
          <div className ="col-md-2">

          </div>
      <div className="col-md-2">
        <table>
          <th>
            <button className="btn-danger" onClick={this.handleBtnClick}>Sort by Name - {this.state.order}</button>
          </th>
        </table>
      </div>
      </div>
    <div className="row"> 
          {this.state.results.map(user => (
      <UserCard
        name={user.name.title + " " +  user.name.first + " " + user.name.last}
        key={user.id}
        image={user.picture.large}
        email={user.email}
        phone={user.phone}
        handleBtnClick={this.handleBtnClick}
      />
  ))}
  </div>
  </div>
        </div>
      );
    } 
  }


export default Discover;