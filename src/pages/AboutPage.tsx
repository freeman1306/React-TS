import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const history = useHistory();

  return (
    <div>
      <h1>About</h1>
      <button className="btn" onClick={() => history.push('/')}>
        back to the list
      </button>
    </div>
  );
};
