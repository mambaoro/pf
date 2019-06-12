import { Container } from 'unstated';

class Sidebar extends Container {
  state = {
    isOpen: false,
  };

  handleToggle() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }
}

export default Sidebar;
