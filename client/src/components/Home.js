import React from "react";
import { Link } from "react-router-dom";
import { Header, Image, Container } from "semantic-ui-react";

const Home = () => (
  <div>
    <Container style={{ display: "flex", marginTop: "30px" }}>
      <Header as="h2" textAlign="center">
        Welcome to the gratitude tracker!
      </Header>
      <Header
        style={{
          marginTop: "100px",
          border: "5px solid black"
        }}
      >
        <Image
          style={{ height: "300px", width: "300px" }}
          src={require("../images/blog_pic.jpg")}
          alt="blog pic"
        />
        <Image
          style={{ height: "300px", width: "300px" }}
          src={require("../images/gratitude.jpg")}
          alt="gratitude"
        />
      </Header>
      <Link style={{ fontSize: "20px" }} to="/blogs">
        Go to blog posts
      </Link>
    </Container>
  </div>
);

export default Home;
