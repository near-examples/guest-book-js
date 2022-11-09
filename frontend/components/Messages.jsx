import React from 'react';
import PropTypes from 'prop-types';

export default function Messages({ messages }) {
  return (
    <>
      <h2>Messages</h2>
      {messages.map((title, i) =>
        <p key={i} className={title.premium ? 'is-premium' : ''}>
          <strong>{title.sender}</strong>:<br/>
          {title.text}
        </p>
      )}
    </>
  );
}

Messages.propTypes = {
  messages: PropTypes.array
};
