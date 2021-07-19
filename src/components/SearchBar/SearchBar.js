import React, { Component } from "react";
// import { connect } from "react-redux";
// import { searchProducts } from "../../redux/action/products";
import Search from "../../asset/search.png";
// import axios from "axios";

export class SearchBar extends Component {
  // state = {
  //   query: "",
  //   result: "",
  // };

  // getSearchResults = async (props) => {
  //   await dispatch(searchProducts(this.state.query));
  // };

  // handleOnInputChange = (event) => {
  //   const query = event.target.value;
  //   this.setState({ query, loading: true, message: "" }, () => {
  //     this.getSearchResults(query);
  //   });
  // };

  render() {
    console.log(this.result);
    return (
      <div>
        <li className="nav-item">
          <form className="search">
            <input
              onChange={this.handleOnInputChange}
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button className="btn-search">
              <img src={Search} alt="logo-search" className="icon-search"></img>
            </button>
          </form>
        </li>
      </div>
    );
  }
}

export default SearchBar;
