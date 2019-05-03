import React from "react";
import BlogForm from "./BlogForm";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Header, Card, Image, Button } from "semantic-ui-react";

class Blogs extends React.Component {
  state = { showForm: false };

  blogs = () => {
    return this.props.blogs.map(blog => (
      <Card key={blog.id}>
        <Image src={blog.image_url} />
        <Card.Content>
          <Card.Header>{blog.title}</Card.Header>
          <Card.Meta>
            <span>{blog.author}</span>
          </Card.Meta>
          <Card.Description>{blog.body}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/blogs/${blog.id}`}>View Post</Link>
        </Card.Content>
      </Card>
    ));
  };

  toggleForm = () => this.setState({ showForm: !this.state.showForm });

  render() {
    const { showForm } = this.state;
    return (
      <Container>
        <Header as="h3">Blog Posts</Header>
        <Button style={{ marginBottom: "30px" }} onClick={this.toggleForm}>
          {showForm ? "Hide Form" : "Create a Post"}
        </Button>
        {showForm ? (
          <BlogForm closeForm={this.toggleForm} />
        ) : (
          <Card.Group itemsPerRow={4}>{this.blogs()}</Card.Group>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { blogs: state.blogs };
};

export default connect(mapStateToProps)(Blogs);
