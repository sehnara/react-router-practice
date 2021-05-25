import React from 'react';
import { useHistory, useLocation, useRouteMatch, withRouter } from 'react-router';

const With = (props) => {
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();

  return(
    <>
      <h2>location</h2>
      <textarea value={JSON.stringify(location, null, 2)} readOnly></textarea>

      <h2>match</h2>
      <textarea value={JSON.stringify(match, null, 2)} readOnly></textarea>

      <h2>historty</h2>
      <textarea value={JSON.stringify(history, null, 2)} readOnly></textarea>
      
    </>
  );
};

export default withRouter(With);