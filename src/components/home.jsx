import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import _with from './with';

const Home = (props) => {
  const history = useHistory();
  console.log(history);

  const goBack = ()=>{
    history.goBack();
  }
  const goForward = () =>{
    history.goForward();
  }
  const handleClick =()=>{
    history.push("/about");
  }

  useEffect(()=>{
    const block = history.block("정말 떠나실건가요?");
    return ()=>{
      block();
    };
  },[history]);
  return(
      <>
        <h1>Home sweet</h1>
        <button onClick={handleClick}>go to About!</button>

        <hr />
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goForward}>앞으로가기</button>
        <_with/>
      </>
  );
};

export default Home;