import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import ThemeSwitcher from './ThemeSwitcher';

export default class extends Component {
  state = {
    theme: 'light', // 'light'または'dark'
    className: 'insta-card',
  }

  onSwitchTheme = (theme, e = null) => {
    if (e) e.preventDefault();
    this.setState({ theme })
    if (theme === 'light') {
      this.setState({ className: 'insta-card' })
    }
    if (theme === 'dark') {
      this.setState({ className: 'insta-card insta-card-dark' })
    }
  }

  render() {
    /* themeを基にarticleのclassを、変更します。
      themeが'light'なら'insta-card'、
      themeが'dark'なら'insta-card insta-card-dark'と
      クラス名が変わるようにします。
    */
    return (
      <div className="card-wrapper">
        <ThemeSwitcher theme={this.state.theme} switchTheme={(e) => this.onSwitchTheme(e)} />
        <article className={this.state.className}>
          <Header />
          <Body />
        </article>
      </div>
    );
  }
}