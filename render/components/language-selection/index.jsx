'use babel';

import React                  from 'react';
import { connect }            from 'react-redux';
import { SelectLanguage }     from 'actions';
import { bindActionCreators } from 'redux';

class LanguageSelection extends React.Component {

  render() {
    return(
      <select onChange={this.handleChange.bind(this)} value={this.props.currentLocale.id}>
        {this.props.locales.map(locale =>
            <option
              key={locale.id}
              value={locale.id}>
              {locale.label}
            </option>
        )}
      </select>
    );
  }

  handleChange(event){
    let selectedId = event.target.value;
    let selectedLocale = this.props.locales.filter(locale => locale.id === selectedId);
    if ( selectedLocale.length > 0){
      this.props.selectLanguage(selectedLocale[0]);
    }
  }

}

function mapStateToProps(state){
  return {
    locales: state.locales,
    currentLocale: state.selectedLanguage
  }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectLanguage: SelectLanguage}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(LanguageSelection);
