import React from 'react';

class Education extends React.Component {
  render() {
    return (
      <div className='education'>
        <h2>Education</h2>
        <form>
          <label>
            School Name:
            <input type='text' name='schoolName' />
          </label>

          <label>
            Title of Study:
            <input type='text' name='titleOfStudy' />
          </label>

          <label>
            Date Attended:
            <input
              type='text'
              name='dateAttended'
              placeholder='e.g. 2019-2021'
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Education;
