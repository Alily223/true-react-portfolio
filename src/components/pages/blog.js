import React, { Component, useEffect } from "react";
import axios from "axios";

export default class blog extends Component {
  constructor() {
    super();

    this.state = {
      blogItems: [],
      isLoading: true,
    };

    this.getBlogItems = this.getBlogItems.bind(this);
  }

  getBlogItems() {
    axios
      .get("http://127.0.0.1:5000/users")
      .then((response) => {
        console.log("getting", response.data);
        this.setState({
          blogItems: response.data
        });
      })
      .catch((error) => {
        console.log("getBlogItems error", error);
      });
  }

  componentDidMount() {
    this.getBlogItems();
  }

  render() {
    const blogRecords = this.state.blogItems.map(blogItem => {
      return <div key={blogItem.id}>{blogItem.username} -- {blogItem.password}</div>
    })
    return (
      <div>
        {blogRecords}
      </div>
    );
  }
}
