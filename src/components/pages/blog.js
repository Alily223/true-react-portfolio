import React, { Component, useEffect } from "react";
import axios from "axios";
import ReactHtmlParser from 'react-html-parser';

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
      .get("http://127.0.0.1:5000/blog/getblogs")
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
      const parsedHtml = ReactHtmlParser(blogItem.description);
      const content = parsedHtml.filter(item => React.isValidElement(item));
      return (
        <div key={blogItem.id}>
            <div className="title">{blogItem.title}</div>
            <div className="description">{content}</div>
        </div>
      );
    });
    return (
      <div>
        {blogRecords}
      </div>
    );
  }
}
