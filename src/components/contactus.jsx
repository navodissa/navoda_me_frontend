import React, { Component } from "react";
import axios from "axios";

class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      phone: 0,
      message: "",
    };
  }
  // React Lifecycle method. This will load right before anything loads
  //   componentDidMount() {
  //     axios.get("http://localhost:5000/users/").then((response) => {
  //       if (response.data.length > 0) {
  //         this.setState({
  //           users: response.data.map((user) => user.username),
  //           username: response.data[0].username,
  //         });
  //       }
  //     });
  //   }

  onChangeName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangePhone(e) {
    this.setState({ phone: e.target.value });
  }

  onChangeMessage(e) {
    this.setState({ message: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const contactus = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message,
    };

    console.log(contactus);

    axios
      .post("http://localhost:5000/contactus/add", contactus)
      .then((res) => console.log(res.data));

    window.location = "/contact";
  }

  render() {
    return (
      <form
        class="text-center border border-light w-50"
        action="#!"
        //style="width: 450px";
      >
        <p class="h4 mb-4">Contact us</p>

        <input
          type="text"
          id="defaultContactFormName"
          class="form-control mb-4"
          placeholder="Name"
        />

        <input
          type="email"
          id="defaultContactFormEmail"
          class="form-control mb-4"
          placeholder="E-mail"
        />

        <label>Subject</label>
        <select class="browser-default custom-select mb-4">
          <option value="" disabled>
            Choose option
          </option>
          <option value="1" selected>
            Feedback
          </option>
          <option value="2">Report a bug</option>
          <option value="3">Feature request</option>
          <option value="4">Feature request</option>
        </select>

        <div class="form-group">
          <textarea
            class="form-control rounded-0"
            id="exampleFormControlTextarea2"
            rows="3"
            placeholder="Message"
          ></textarea>
        </div>

        <div class="custom-control custom-checkbox mb-4">
          <input
            type="checkbox"
            class="custom-control-input"
            id="defaultContactFormCopy"
          />
          <label class="custom-control-label" for="defaultContactFormCopy">
            Send me a copy of this message
          </label>
        </div>

        <button class="btn btn-info btn-block" type="submit">
          Send
        </button>
      </form>
    );
  }
}

export default ContactUs;
