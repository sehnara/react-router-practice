import React from 'react';
import { useHistory, useParams } from 'react-router';

const profileData = {
    sehoon : {
        name : '강세훈',
        desc : '미녀는 석류를 좋아해'
    },
    chizu :{
        name : 'tomioka chizu',
        desc : 'maybe... she is the best cute girl in Osaka,Japan',
    }
}

const About = (props) => {
    const history = useHistory();
    const {userName} = useParams();
    const profile = profileData[userName];
  
    
    const handleClick =()=>{
        history.push("/home");
    }
    return(
        <>
            <h1>About</h1>
            <button onClick={handleClick}>go to home</button>
            {profile&&
              <>
                <h3>{userName} {profile.name}</h3>
                <p>{profile.desc}</p>
              </>
            }
        </>
    );
};

export default About;