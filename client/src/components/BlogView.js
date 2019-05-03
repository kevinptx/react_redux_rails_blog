import React from "react";
import BlogForm from "./BlogForm";
import { deleteBlog } from "../reducers/blogs";
import { connect } from "react-redux";
import { Header, Image, Container, Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

class BlogView extends React.Component {
  state = { showForm: false };

  toggleForm = () => this.setState({ showForm: !this.state.showForm });

  handleDelete = () => {
    const {
      blog,
      dispatch,
      history: { push }
    } = this.props;
    dispatch(deleteBlog(blog.id));
    push("/blogs");
  };

  render() {
    const { showForm } = this.state;
    const { blog = {} } = this.props;

    return (
      <Container>
        <div style={{ display: "flex", flexDirection: "column", width: "10%" }}>
          <Link style={{ margin: "5px" }} to="/blogs">
            View All Posts
          </Link>
          <Button
            style={{ margin: "5px" }}
            color="blue"
            onClick={this.toggleForm}
          >
            {showForm ? "Cancel" : "Edit"}
          </Button>
          <Button
            style={{ margin: "5px", marginBottom: "20px" }}
            color="red"
            onClick={this.handleDelete}
          >
            Delete
          </Button>
        </div>
        {showForm ? (
          <BlogForm {...blog} closeForm={this.toggleForm} />
        ) : (
          <div>
            <Header as="h3" textAlign="center">
              {blog.title}
            </Header>
            <Image src={blog.image_url} />
            <Table definition>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell />
                  <Table.HeaderCell />
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>Title</Table.Cell>
                  <Table.Cell>{blog.title}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Body</Table.Cell>
                  <Table.Cell>{blog.body}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Category</Table.Cell>
                  <Table.Cell>{blog.category}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Image URL</Table.Cell>
                  <Table.Cell>{blog.image_url}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (store, props) => {
  return {
    blog: store.blogs.find(b => b.id === parseInt(props.match.params.id))
  };
};

export default connect(mapStateToProps)(BlogView);
