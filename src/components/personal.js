import React from 'react';

class Personal extends React.Component {
  render() {
    return (
      <div className='personal'>
        <h2>Personal Information</h2>
        <form>
          <label>
            First Name:
            <input type='text' name='firstName' />
          </label>

          <label>
            Last Name:
            <input type='text' name='lastName' />
          </label>

          <label>
            Email:
            <input type='text' name='email' />
          </label>

          <label>
            Phone:
            <input type='text' name='phone' />
          </label>
        </form>
      </div>
    );
  }
}

export default Personal;
