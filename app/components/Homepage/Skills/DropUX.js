import { Container } from 'unstated';

class Drop extends Container {
  state = {
    isDropped: false,
  };

  toggleDrop() {
    this.setState(prevState => ({
      isDropped: !prevState.isDropped,
    }));
  }
}

export default Drop;
