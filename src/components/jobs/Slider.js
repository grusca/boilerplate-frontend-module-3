import React, { Component } from 'react';
// import PropTypes from 'prop-types';

const styles = {
  root: {
    width: 300,
  },
  slider: {
    padding: '22px 0px',
  },
};

class Slider extends React.Component {
  state = {
    value: 1,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Slider
          className={classes.slider}
          value={value}
          min={0}
          max={6}
          step={1}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

// Slider.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default Slider;

