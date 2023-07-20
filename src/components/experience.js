import React from 'react';

class Experience extends React.Component {
  // create a form with the following fields: company name, position title, main tasks, date started, date ended
  render() {
    const {
      company,
      position,
      duties,
      started,
      ended,
      handleChange,
    } = this.props;

    return (
      <div className='experience'>
        <h2>Experience</h2>
        <label htmlFor='company'>
          Company Name:
          <input
            type='text'
            name='company'
            id='company'
            placeholder='Enter your company name'
            value={company}
            onChange={handleChange}
          />
        </label>

        <label htmlFor='position'>
          Position Title:
          <input
            type='text'
            name='position'
            id='position'
            placeholder='Enter your position title'
            value={position}
            onChange={handleChange}
          />
        </label>

        <label htmlFor='duties'>
          Main Tasks:
          <input
            type='text'
            name='duties'
            id='duties'
            placeholder='Enter your main tasks'
            value={duties}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='started'>
          Date Started:
          <input
            type='date'
            name='started'
            id='started'
            placeholder='e.g. 10/20/2020'
            value={started}
            onChange={handleChange}
          />
        </label>

        <label htmlFor='ended'>
          Date Ended:
          <input
            type='date'
            name='ended'
            id='ended'
            placeholder='e.g. 10/20/2023'
            value={ended}
            onChange={handleChange}
          />
        </label>
      </div>
    );
  }
}

export default Experience;
