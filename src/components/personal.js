import React from 'react';

class Personal extends React.Component {
  render() {
    const { firstname, lastname, email, phone, handleChange } = this.props;

    return (
      <div className='personal'>
        <h2>Personal Information</h2>
        <label htmlFor='firstName'>
          First Name:
          <input
            type='text'
            name='firstname'
            id='firstname'
            placeholder='Enter your first name'
            value={firstname}
            onChange={handleChange}
          />
        </label>

        <label htmlFor='lastName'>
          Last Name:
          <input
            type='text'
            name='lastname'
            id='lastname'
            placeholder='Enter your last name'
            value={lastname}
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
            value={email}
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
            value={phone}
            onChange={handleChange}
          />
        </label>
      </div>
    );
  }
}

export default Personal;
