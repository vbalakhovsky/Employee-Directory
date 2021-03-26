import axios from "axios";
const QueryUrl = "https://randomuser.me/api/?inc=name,email,phone,picture,location,city";



export default {
  search: function() {
    return axios.get(QueryUrl);
  }
};