import React, { Component } from "react";
import API from "../utils/API";
import UserCard from "../components/Card";

class Engine extends Component {
  state = {
    results: null,
    order: "descending"
  };

  
  componentDidMount() {
    this.loadNextUser();
  }

  handleBtnClick = event => {
    if (this.state.order === "ascending") {
      this.setState({...this.state, order: "descending"})
      let x = this.state.results;
      var zaSort  = x.sort(function(a, b) {
        var textA = a.name.first.toUpperCase();
        var textB = b.name.first.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
      this.setState({results: zaSort})
    } else if (this.state.order === "descending") {
      this.setState({...this.state, order: "ascending"})
      let x = this.state.results;
      var azSort  = x.sort(function(a, b) {
        var textA = a.name.first.toUpperCase();
        var textB = b.name.first.toUpperCase();
        return (textA < textB) ? 1 : (textA > textB) ? -1 : 0;
    });
      console.log(azSort);
      this.setState({results: azSort})
    } else {console.log("Error")}
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
      <div className="col-md-10">
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
        name={user.name.first + " " + user.name.last}
        key={user.id}
        image={user.picture.medium}
        email={user.email}
        city={user.location.city}
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


export default Engine;


// const deleteUser = async (id) => {
//   const res = await fetch(`http://localhost:5000/tasks/${id}`, {
//     method: 'DELETE',
//   })
//   //We should control the response status to decide if we will change the state or not.
//   res.status === 200
//     ? setTasks(tasks.filter((task) => task.id !== id))
//     : alert('Error Deleting This Task')
// }