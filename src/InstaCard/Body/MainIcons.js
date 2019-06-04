import React from 'react';
import HeartImg from '../../images/heart.png';
import HeartImgDark from '../../images/heart-gray.png';
import BubbleImg from '../../images/bubble.png';
import BubbleImgDark from '../../images/bubble-gray.png';
import BookmarkImg from '../../images/bookmark.png';
import BookmarkImgDark from '../../images/bookmark-gray.png';
import PropTypes from 'prop-types'

const MainIcons = ({ theme }) => (
  <div className="card-main-icons">
    <ul className="flex-container card-main-icons-left">
      <li className="icon-heart">
        <img
          alt="heart-icon"
          src={theme === 'light' ? HeartImg : HeartImgDark}
          height="30px"/>
      </li>
      <li className="icon-comment">
        <img 
          alt="bubble-icon"
          src={theme === 'light' ? BubbleImg : BubbleImgDark}
          height="30px"/>
      </li>
    </ul>
    <ul className="flex-container card-main-icons-right">
      <li className="icon-bookmark icons-right">
        <img 
          alt="bookmark-icon"
          src={theme === 'light' ? BookmarkImg : BookmarkImgDark}
          height="30px"/>
      </li>
    </ul>
  </div>
);
MainIcons.defaultProps = {
  theme: 'light',
}
MainIcons.propsTypes = {
  theme: PropTypes.string,
}
export default MainIcons;