import React from "react";
import ReactDOM from "react-dom";
import styles from "./tooltip.module.css";

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: false,
      toggle: this.toggle.bind(this)
    };
  }
  toggle = () => {
    const tooltipNode = ReactDOM.findDOMNode(this);
    this.setState({
      opacity: !this.state.opacity,
      top: tooltipNode.offsetTop,
      left: tooltipNode.offsetLeft,
      width: tooltipNode.offsetWidth,
      msgSize: tooltipNode.children[1].children[1].offsetWidth
    });
  };
  render = () => {
    const style = {
      zIndex: this.state.opacity ? 1000 : -1000,
      opacity: +this.state.opacity,
      top: (this.state.top || 0) + 20,
      left:
        (this.state.left || 0) - (this.state.msgSize || 0) / 2 + (this.state.width || 0) / 2
    };
    return (
      <div>
        <span onMouseEnter={this.toggle} onMouseOut={this.toggle}>
          {this.props.children}
        </span>
        <div
          className={`${styles.tooltip} ${styles.bottom}`}
          style={style}
          role={`tooltip`}
        >
          <div
            className={styles.tooltipArrow}
            style={{
              borderBottomColor: `${this.props.bgColor || "#000000"}`
            }}
          />
          <div
            className={styles.tooltipInner}
            style={{
              textAlign: `${this.props.align || "center"}`,
              color: `${this.props.textColor || "#ffffff"}`,
              backgroundColor: `${this.props.bgColor || "#000000"}`
            }}
          >
            {this.props.msg}
          </div>
        </div>
      </div>
    );
  };
}

export default Tooltip;
