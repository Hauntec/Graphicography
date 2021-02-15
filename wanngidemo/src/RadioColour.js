import React, { Component } from "react";

class RadioColour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColour: "Red",
      selectedIcon: "Fire"
    };
  }

  handleColourChange = (changeEvent) => {
    this.setState({
      selectedColour: changeEvent.target.value
    });
  };

  handleIconChange = (changeEvent) => {
    this.setState({
      selectedIcon: changeEvent.target.value
    });
  };

  render() {
    return (
      <div>
        <div class="wrapper">
          <div class="selectioncontainer">
            <div class="colour">
              <h2>1: Select a Colour</h2>
              {/* RED */}
              <input
                type="radio"
                checked={this.state.selectedColour === "Red"}
                name="colour"
                value="Red"
                onChange={this.handleColourChange}
              />
              <label for="red">
                {" "}
                <span class="red"></span>
              </label>
              {/* YELLOW */}
              <input
                type="radio"
                checked={this.state.selectedColour === "Yellow"}
                name="colour"
                value="Yellow"
                onChange={this.handleColourChange}
              />
              <label for="yellow">
                {" "}
                <span class="yellow"></span>
              </label>
              {/* GREEN */}
              <input
                type="radio"
                checked={this.state.selectedColour === "Green"}
                name="colour"
                value="Green"
                onChange={this.handleColourChange}
              />
              <label for="green">
                {" "}
                <span class="green"></span>
              </label>
              {/* BLUE */}
              <input
                type="radio"
                checked={this.state.selectedColour === "Blue"}
                name="colour"
                value="Blue"
                onChange={this.handleColourChange}
              />
              <label for="blue">
                {" "}
                <span class="blue"></span>
              </label>
              <p>{this.state.selectedColour}</p>
              <div class="icon">
                <h2>2: Select an Icon</h2>
                {/* FIRE */}
                <input
                  type="radio"
                  checked={this.state.selectedIcon === "Fire"}
                  name="icon"
                  value="Fire"
                  onChange={this.handleIconChange}
                />
                <label for="fire">
                  <img src={"images/Fire.svg"} alt="fire" />{" "}
                </label>
                {/* BIKE */}
                <input
                  type="radio"
                  checked={this.state.selectedIcon === "Bike"}
                  name="icon"
                  value="Bike"
                  onChange={this.handleIconChange}
                />
                <label for="bike">
                  <img src={"images/Bike.svg"} alt="bike" />
                </label>
                {/* MOUNTAIN */}
                <input
                  type="radio"
                  checked={this.state.selectedIcon === "Mountain"}
                  name="icon"
                  value="Mountain"
                  onChange={this.handleIconChange}
                />
                <label for="mountain">
                  <img src={"images/Mountain.svg"} alt="mountain" />
                </label>
                {/* THERMOMETER */}
                <input
                  type="radio"
                  checked={this.state.selectedIcon === "Thermometer"}
                  name="icon"
                  value="Thermometer"
                  onChange={this.handleIconChange}
                />
                <label for="thermometer">
                  <img src={"images/Thermometer.svg"} alt="thermometer" />
                </label>
                <p>{this.state.selectedIcon}</p>
              </div>
            </div>
          </div>
          <div class="buttoncontainer">
            <h2> Icon Design </h2>
            <div class="buttondesign">
              <img
                class="activecolour"
                src={"images/rec-" + this.state.selectedColour + ".svg"}
                alt="blue"
              />
              <img
                class="activeicon"
                src={"images/" + this.state.selectedIcon + ".svg"}
                alt="fire"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RadioColour;
