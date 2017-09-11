import React from 'react';
import { getFunName } from '../helpers';

class SelectorStore extends React.Component {
  goToStore(e) {
    e.preventDefault();
    console.log('You change the url'); 
    const storeId = this.storeInput.value;
    console.log(`Going to ${storeId}`);
    this.context.router.transitionTo(`/store/${storeId}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={(e) => {this.goToStore(e)}}>
        <h2>Please enter a Store</h2>
        <input type="text" required placeholder="Store name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input }} />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

SelectorStore.contextTypes = {
  router: React.PropTypes.object
}

export default SelectorStore;