import React, { Component } from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helper";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class Order extends Component {
  static propTypes = {
    fishes: PropTypes.object,
    order: PropTypes.object,
    deleteOrder: PropTypes.func,
  };
  renderOder = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === "available";
    const cssTransitionProps = {
      classNames: "order",
      key,
      timeout: { enter: 500, exit: 500 },
    };
    if (!fish) return null;
    if (!isAvailable) {
      return (
        <li key={key}>
          Sorry {fish ? fish.name : "fish"} is no longer available
        </li>
      );
    }
    return (
      <CSSTransition {...cssTransitionProps}>
        <li key={key}>
          <span>
            <TransitionGroup component="span" className="count">
              <CSSTransition {...cssTransitionProps}>
                <span>{count}</span>
              </CSSTransition>
            </TransitionGroup>
            lbs {fish.name}
            {formatPrice(count * fish.price)}
            <span className="orderCloseBtn" style={{ margin: "30px" }}>
              <button onClick={() => this.props.deleteOrder(key)}>
                &times;
              </button>
            </span>
          </span>
        </li>
      </CSSTransition>
    );
  };
  render() {
    const orderId = Object.keys(this.props.order);
    const total = orderId.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === "available";
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <TransitionGroup component="ul" className="order">
          {orderId.map(this.renderOder)}
        </TransitionGroup>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
