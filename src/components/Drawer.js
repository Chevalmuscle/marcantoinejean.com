import React from "react";
import "./Drawer.scss";

class Drawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      contentHeight: 0,
    };

    this.contentRef = React.createRef();
  }

  handleTitleClick = () => {
    const contentHeight = this.contentRef.current.scrollHeight;
    this.setState((prevState) => ({
      active: !prevState.active,
      contentHeight: !prevState.active ? contentHeight : 0,
    }));
  };

  render() {
    const { title, children } = this.props;
    const drawerStyles = this.state.active ? "is-expanded" : "";

    return (
      <div className={`Drawer ${drawerStyles}`}>
        <div className="Drawer-title" onClick={this.handleTitleClick}>
          <div className="Drawer-arrow Drawer--rightArrow" />
          <span className="Drawer-titleText">{title}</span>
        </div>
        <div
          className={`Drawer-content ${drawerStyles}`}
          ref={this.contentRef}
          style={{ height: this.state.contentHeight }}
        >
          {children}
        </div>
      </div>
    );
  }
}

export { Drawer };
