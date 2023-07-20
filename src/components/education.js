import React from 'react';

class Education extends React.Component {
  render() {
    const { schoolname, studied, attended, handleChange } = this.props;

    return (
      <div className='education'>
        <h2>Education</h2>
        <label htmlFor='schoolname'>
          School Name:
          <input
            type='text'
            name='schoolname'
            id='schoolName'
            placeholder='Enter your school name'
            value={schoolname}
            onChange={handleChange}
          />
        </label>

        <label htmlFor='studied'>
          Title of Study:
          <input
            type='text'
            name='studied'
            id='studied'
            placeholder='Enter your title of study'
            value={studied}
            onChange={handleChange}
          />
        </label>

        <label htmlFor='attended'>
          Date Attended:
          <input
            type='text'
            name='attended'
            id='attended'
            placeholder='e.g. 2019-2021'
            value={attended}
            onChange={handleChange}
          />
        </label>
      </div>
    );
  }
}

export default Education;
