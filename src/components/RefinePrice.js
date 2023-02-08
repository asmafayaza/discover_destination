import React, { Component } from "react";
import { PriceFilter } from "../styles/SearchStyle";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

class RefinePrice extends Component {
    render() {
        const { maxValue, minValue, price, filterByPrice } = this.props;
        return (
            <div className="price-container">
                <PriceFilter>
                    <div className="price-wrapper">
                        <div className="price-title">
                            <h4 className="title">Filter Price</h4>
                        </div>
                        <div className="price-button">
                            <InputRange
                                className="price-range"
                                value={price}
                                maxValue={maxValue}
                                minValue={minValue}
                                onChange={(price) => filterByPrice(price)}
                            />
                        </div>
                    </div>
                </PriceFilter>
            </div>
        );
    }
}

export default RefinePrice;
