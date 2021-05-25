import React from 'react';
import { useHistory } from 'react-router';

const About = (props) => {
    const history = useHistory();
    const handleClick =()=>{
        history.push("/home");
    }
    return(
        <>
            <h1>About</h1>
            <button onClick={handleClick}>go to home</button>
        </>
    );
};

export default About;