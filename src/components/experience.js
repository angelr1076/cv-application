import React from 'react';

class Experience extends React.Component {
  // create a form with the following fields: company name, position title, main tasks, date started, date ended
  render() {
    const {
      companyName,
      positionTitle,
      mainTasks,
      dateStarted,
      dateEnded,
      handleChange,
    } = this.props;

    return (
      <div className='experience'>
        <h2>Experience</h2>
        <label htmlFor='companyName'>
          Company Name:
          <input
            type='text'
            name='companyName'
            id='companyName'
            placeholder='Enter your company name'
            value={companyName}
            onChange={handleChange}
          />
        </label>

        <label htmlFor='positionTitle'>
          Position Title:
          <input
            type='text'
            name='positionTitle'
            id='positionTitle'
            placeholder='Enter your position title'
            value={positionTitle}
            onChange={handleChange}
          />
        </label>

        <label htmlFor='mainTasks'>
          Main Tasks:
          <input
            type='text'
            name='mainTasks'
            id='mainTasks'
            placeholder='Enter your main tasks'
            value={mainTasks}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='dateStarted'>
          Date Started:
          <input
            type='date'
            name='dateStarted'
            id='dateStarted'
            placeholder='e.g. 10/20/2020'
            value={dateStarted}
            onChange={handleChange}
          />
        </label>

        <label htmlFor='dateEnded'>
          Date Ended:
          <input
            type='date'
            name='dateEnded'
            id='dateEnded'
            placeholder='e.g. 10/20/2023'
            value={dateEnded}
            onChange={handleChange}
          />
        </label>
      </div>
    );
  }
}

export default Experience;
