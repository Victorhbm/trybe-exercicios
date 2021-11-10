import React from 'react';

class Input extends React.Component {
  render() {
    const { name, type, value, onChange } = this.props;

    return (
      <label for="nome">
        {name}:
        <input 
          id={name} 
          name={name} 
          type={type} 
          value={value}
          onChange={onChange}
        />
      </label>
    );
  }
}

export default Input;