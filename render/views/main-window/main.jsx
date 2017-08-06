'use babel';

import React from 'react';
import {Hello, LanguageSelection} from 'components';

export default class MainView extends React.Component {
  render() {
    return (
      <div>
        <LanguageSelection/>
        <Hello/>
      </div>
    );
  }
}
