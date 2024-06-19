import React, { useState } from 'react'
import { inject, observer} from 'mobx-react';
import './App.css'

@inject('store')
@observer
class App extends React.Component {
  updateSearchText = (e) => {
    const {store} = this.props;
    store.setTerm(e.target.value)
  }
  render() {
    const { store } = this.props;
    const { term } = store;
    return (
      <>
        <p>Output: {store.term}</p>
        <input type="text" onChange={this.updateSearchText} />
      </>
    )
  }
}

export default App
