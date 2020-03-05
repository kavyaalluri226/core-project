import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
    <div className = "jumborton">
        <h1> React-Redux project</h1>
        <p> Creating responsive web apps</p>
        <Link to = "about" className = "btn btn-primary btn-lg">
            Learn more
        </Link>
    </div>
);

export default HomePage;