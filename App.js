import React  from "react";
import ReactDOM from "react-dom/client";

const title = (
    <h1 id="title" key="h1">
        Namaste React
    </h1>
);

const HeaderComponent = () => {
    return (
        <div>
            {title}
            <h2>
                Hello1 
            </h2>
            <h2> how are </h2>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);