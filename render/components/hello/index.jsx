'use babel';

import React from 'react';
import {connect} from 'react-redux';

class Hello extends React.Component {
  render() {
    return (
      <div className="greeting">
        {this.props.message.text}
      </div>);
  }
}

function mapStateToProps(state){
  return {
    message: state.messages.filter((msg) => msg.locale === state.selectedLanguage.id)[0]
  }
}

export default connect(mapStateToProps)(Hello);
