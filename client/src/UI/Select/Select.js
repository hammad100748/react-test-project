import React, { Component } from "react";
import Select from "react-select";
import './Select.css'

const options = [
  { value: "price", label: "Price" },
  { value: "size", label: "Size" },
  { value: "id", label: "ID" }
];

class SortInput extends Component {
  state = {
    selectedOption: null
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    this.props.handleSortInputChange(selectedOption.value);
  };

  render() {
    const { selectedOption } = this.state;
    return (
        <div className="Select">
            <div className="Select--title">
                <h5>Sort by</h5>
            </div>
            <div className="Select--Input">
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
            />
          </div>
        </div>  
    );
  }
}

export default SortInput;
