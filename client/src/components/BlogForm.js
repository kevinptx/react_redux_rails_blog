import React from "react";
import { connect } from "react-redux";
import { updateBlog, addBlog } from "../reducers/blogs";
import { Form, TextArea, Dropdown } from "semantic-ui-react";

class BlogForm extends React.Component {
  intialState = {
    title: "",
    author: "",
    body: "",
    category: "",
    image_url: ""
  };

  state = { ...this.initialState };

  componentDidMount() {
    if (this.props.id) this.setState({ ...this.props });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleImage = e => {
    const image_url = e.target.currentSrc;
    this.setState({ image_url });
  };

  dropdownImageSelect = () => {
    const { image_url } = this.state;
    const images = [
      {
        text: "blue",
        value: "https://robohash.org/sitsequiquia.png?size=300x300&set=set1",
        image: {
          avatar: true,
          src: "https://robohash.org/sitsequiquia.png?size=300x300&set=set1"
        }
      },
      {
        text: "purple",
        value: "https://robohash.org/sitsequiquia.png?size=300x300&set=set2",
        image: {
          avatar: true,
          src: "https://robohash.org/sitsequiquia.png?size=300x300&set=set2"
        }
      },
      {
        text: "green",
        value: "https://robohash.org/sitsequiquia.png?size=300x300&set=set3",
        image: {
          avatar: true,
          src: "https://robohash.org/sitsequiquia.png?size=300x300&set=set3"
        }
      }
    ];
    return (
      <Dropdown
        name="image"
        placeholder="Select an Avatar"
        compact
        options={images}
        value={image_url}
        onChange={this.handleImage}
      />
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    const blog = { ...this.state };
    const { closeForm, dispatch } = this.props;
    const func = this.props.id ? updateBlog : addBlog;
    dispatch(func(blog));
    closeForm();
  };

  render() {
    const { title, body, author, category } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="title"
          required
          defaultValue={title}
          onChange={this.handleChange}
          label="Title"
        />
        <Form.Input
          name="body"
          as={TextArea}
          defaultValue={body}
          onChange={this.handleChange}
          label="Blog Body"
        />
        <Form.Input
          name="category"
          defaultValue={category}
          onChange={this.handleChange}
          label="Blog Category"
        />
        <Form.Input
          name="author"
          label="Author"
          defaultValue={author}
          onChange={this.handleChange}
          required
        />
        <Form.Input label="Image" control={this.dropdownImageSelect} />
        <Form.Button color="green">Save</Form.Button>
      </Form>
    );
  }
}

export default connect()(BlogForm);
