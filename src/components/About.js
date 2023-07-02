import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import ProfileFunctional from "./Profile";
import React from "react";

//this was functional component
// const About2 = () => {
//     return (
//         <div>
//             <h1>This is About Us Page</h1>
//             <p>welcome here.</p>
//             {/* <Outlet/> */}

//             <ProfileClass name={"JayeshClass"}/>
//             <ProfileFunctional name={"JayeshFunctional"}/>

//         </div>
//     )
// };

class About extends React.Component {
  constructor(props) {
    console.log("Parent- aboutConstructor");
    super(props);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Timer started ");
    },1000);
    console.log("Parent - aboutComponentDid Mount");
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    console.log("Parent ComponentWillunMount")
  }

  render() {
    console.log("parent -aboutRender");
    return (
      <div>
        <h1>This is About Us Page</h1>
        <p>welcome here.</p>
        {/* <Outlet/> */}
        <ProfileClass name={"1ST CHILD"} />
        <ProfileClass name={"2ND CHILD"} />
      </div>
    );
  }
}
export default About;

// const Footer = () => {
//     return <h4>Footer</h4>;
//   };

// export default Footer;
