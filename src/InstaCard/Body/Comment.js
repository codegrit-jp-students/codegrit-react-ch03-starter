import React from 'react';
import PropTypes from 'prop-types'

const Comment = ({ username, comment }) => (
  <li className="poster-comment">
    <a href className="commenter-name">
      {username}
    </a>
    <span className="commenter-comment">
      {comment}
    </span>
  </li>
);

Comment.defaultProps = {
  username: 'username',
  comment: 'comment'
}
Comment.propsTypes = {
  username: PropTypes.string,
  comment: PropTypes.string,
}
export default Comment;
