import React, { Component } from 'react';
import classNames from 'classnames';
import { isPositiveInteger } from '../lib/input-helpers';
import './Settings.css';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.handleInputUpdate = this.handleInputUpdate.bind(this);
  }

  handleInputUpdate(evt) {
    const {
      target: { name, value, checked }
    } = evt;
    const { updateSetting } = this.props;
    const val = name === 'oversample' ? checked : parseInt(value, 10);
    updateSetting(name, val);
  }

  render() {
    const { expanded, width, height, oversample, interval } = this.props;

    if (!expanded) return <div className="Settings" />;

    return (
      <div
        className={classNames('Settings', { 'Settings-expanded': expanded })}
      >
        <div>Image Width</div>
        <input
          className={classNames('Settings-input', {
            'Settings-input-error': !isPositiveInteger(width)
          })}
          type="number"
          name="width"
          aria-label="image width"
          value={isNaN(width) ? '' : width}
          onChange={this.handleInputUpdate}
        />
        <div>Image Height</div>
        <input
          className={classNames('Settings-input', {
            'Settings-input-error': !isPositiveInteger(height)
          })}
          type="number"
          name="height"
          aria-label="image height"
          value={isNaN(height) ? '' : height}
          onChange={this.handleInputUpdate}
        />
        <div>Interval (ms)</div>
        <input
          className={classNames('Settings-input', {
            'Settings-input-error': !isPositiveInteger(interval)
          })}
          type="number"
          name="interval"
          aria-label="frame interval"
          value={isNaN(interval) ? '' : interval}
          onChange={this.handleInputUpdate}
        />
        <div className="check-box Settings-input-checkbox">
          <input
            type="checkbox"
            name="oversample"
            aria-label="oversample image"
            checked={oversample}
            onChange={this.handleInputUpdate}
          />
          <span>Oversample</span>
        </div>
      </div>
    );
  }
}

export default Settings;
