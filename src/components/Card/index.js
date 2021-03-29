  
import React from "react";
import "./style.css";

function UserCard(props) {
  console.log(props.name);
  return (
    <div className="col-md-3">
    <div className="card">
      <div className="img">
        <img alt={props.name} src={props.image} className="rounded"/>
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Email:</strong> {props.email}
          </li>
          <li>
            <strong>Phone:</strong> {props.phone}
            </li>
          <li>
            <strong>Location:</strong> {props.city}
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default UserCard;