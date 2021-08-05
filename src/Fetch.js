import React from "react";
import axios from "axios";
import Image from "./Image";
import "./Fetch.css";

class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      post: [],
      error: ""
    };
  }

  componentDidMount() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        this.setState({ loading: false });
        this.setState({ post: response.data });
        this.setState({ error: "" });
      })
      .catch(() => {
        this.setState({ loading: false });
        this.setState({ post: [] });
        this.setState({ error: "Something went wrong..." });
      });
  }

  render() {
    return (
      <div className="grid-tem">
        {this.state.loading ? (
          <div className="loader"></div>
        ) : (
          this.state.post.map((posts) => {
            return (
              <div>
                <Image posts={posts} />
              </div>
            );
          })
        )}
      </div>
    );
  }
}

export default Fetch;
