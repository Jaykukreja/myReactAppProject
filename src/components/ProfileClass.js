import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    console.log("profileConstructor");
    super(props);

    this.state = {
      userInfo: {
        name: "dummyName",
        bio: "dummyBio",
      },
      count:0
    };
  }

  async componentDidMount() {

    console.log("heylo ji ")
    const data = await fetch("https://api.github.com/users/jayKukreja");
    const jsonData = await data.json();
    this.setState(
      {
        userInfo : jsonData
      }
    )
    console.log("json data", jsonData);
    console.log("profileComponentDid Mount" + this.props.name);
  }

  componentDidUpdate() {
    console.log("Child componentDidUpdate" + this.props.name)
  }
  render() {
    console.log("profileRender" + this.props.name);
    const { count } = this.state;
    return (
      <div>
        <h1>Profile Class Component</h1>
        <h3>Name: {this.state.userInfo.name}</h3>
        <h3>Bio: {this.state.userInfo.bio}</h3>
        <h3>count : {count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: 1,
            });
          }}
        >
          Set Count
        </button>
      </div>
    );
  }
}

export default ProfileClass;
