import React from 'react';

class Education extends React.Component {
  render() {
    const { schoolName, titleOfStudy, dateAttended, handleChange } = this.props;

    return (
      <div className='education'>
        <h2>Education</h2>
        <label htmlFor='schoolName'>
          School Name:
          <input
            type='text'
            name='schoolName'
            id='schoolName'
            placeholder='Enter your school name'
            value={schoolName}
            onChange={handleChange}
          />
        </label>

        <label htmlFor='titleOfStudy'>
          Title of Study:
          <input
            type='text'
            name='titleOfStudy'
            id='titleOfStudy'
            placeholder='Enter your title of study'
            value={titleOfStudy}
            onChange={handleChange}
          />
        </label>

        <label htmlFor='dateAttended'>
          Date Attended:
          <input
            type='text'
            name='dateAttended'
            id='dateAttended'
            placeholder='e.g. 2019-2021'
            value={dateAttended}
            onChange={handleChange}
          />
        </label>
      </div>
    );
  }
}

export default Education;
