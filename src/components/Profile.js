import { useEffect,useState } from "react";

const ProfileFunctional = (props) => {
    const count = useState(0);
    return(
        <div>
            <h1>Profile Component</h1>
            <h3>Name: {props.name}</h3>
            <h3>count : {count}</h3>
        </div>
    )
}

export default ProfileFunctional;