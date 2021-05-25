import React from 'react';
import { useHistory } from 'react-router';

const Home = (props) => {
  const history = useHistory();
  const handleClick =()=>{
    history.push("/about");
  }
  return(
      <>
        <h1>Home sweet</h1>
        <button onClick={handleClick}>go to About!</button>
      </>
  );
};

export default Home;