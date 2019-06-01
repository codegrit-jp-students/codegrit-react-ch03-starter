import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import ThemeSwitcher from './ThemeSwitcher';
import PropTypes from 'prop-types'

var classNames = require('classnames');
class index extends Component {
  state = {
    theme: 'light', // 'light'または'dark'
  }

  onSwitchTheme = (theme, e = null) => {
    if (e) e.preventDefault();
    this.setState({ theme })
  }

  render() {
    /* themeを基にarticleのclassを、変更します。
      themeが'light'なら'insta-card'、
      themeが'dark'なら'insta-card insta-card-dark'と
      クラス名が変わるようにします。
    */
    var articleClass = classNames({
      'insta-card': true,
      'insta-card-dark': this.state.theme === 'dark'
    })
    return (
      <div className="card-wrapper">
        <ThemeSwitcher theme={this.state.theme} switchTheme={(e) => this.onSwitchTheme(e)} />
        <article className={articleClass}>
          <Header />
          <Body />
        </article>
      </div>
    );
  }
}

index.defaultProps = {
  theme: 'light',
  className: 'insta-card',
}
index.propsTypes = {
  theme: PropTypes.string,
  className: PropTypes.string
}

export default index