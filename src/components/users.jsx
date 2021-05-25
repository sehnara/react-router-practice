import React from 'react';
import { useHistory, useLocation } from 'react-router';
import qs from 'qs';

const Users = (props) => {
    const history = useHistory(); 
    const location = useLocation();
    const query = qs.parse(location.search, {ignoreQueryPrefix:true});
    const detail = query.detail === 'true';

    const handleClick = () =>{
        history.push("/home");
    }
    return(
        <>
            <h1>Users</h1>
            <button onClick={handleClick}>go to home!</button>

            <h1>소개</h1>
            <p>리액트 라우터 쓰바라시 데쓰</p>
            {!detail && <p>추가적인 정보가 어쩌고리 저쩌고리</p>}
        </>
    );
};

export default Users;