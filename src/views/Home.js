import React from 'react';
import PropTypes from 'prop-types';

export default function Home({ user }) {
  return (
    <div>
    { user
      ? <h2 className='homeTitle'>Click the Team Link above to see the Greatest Footballers ever!</h2>
      : <h1>Login to Continue</h1>
    }
    </div>
  );
}

Home.propTypes = {
  user: PropTypes.any
};
