import React from 'react';

class Personal extends React.Component {
  render() {
    const { handleChange } = this.props;

    return (
      <div className='personal'>
        <h2>Personal Information</h2>
        <label htmlFor='firstName'>
          First Name:
          <input
            type='text'
            name='firstName'
            id='firstName'
            placeholder='Enter your first name'
            value={FormData.firstName}
            onChange={handleChange}
          />
        </label>

        <label htmlFor='lastName'>
          Last Name:
          <input
            type='text'
            name='lastName'
            id='lastName'
            placeholder='Enter your last name'
            value={FormData.lastName}
            onChange={handleChange}
          />
        </label>

        <label htmlFor='email'>
          Email:
          <input
            type='text'
            name='email'
            id='email'
            placeholder='Enter your email'
            value={FormData.email}
            onChange={handleChange}
          />
        </label>

        <label htmlFor='phone'>
          Phone:
          <input
            type='text'
            id='phone'
            name='phone'
            placeholder='Enter your phone number'
            value={FormData.phone}
            onChange={handleChange}
          />
        </label>
      </div>
    );
  }
}

export default Personal;
