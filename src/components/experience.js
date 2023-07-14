import React from 'react';

class Experience extends React.Component {
  // create a form with the following fields: company name, position title, main tasks, date started, date ended
  render() {
    return (
      <div className='experience'>
        <h2>Experience</h2>
        <form>
          <label>
            Company Name:
            <input type='text' name='companyName' />
          </label>
          <label>
            Position Title:
            <input type='text' name='positionTitle' />
          </label>
          <label>
            Main Tasks:
            <input type='text' name='mainTasks' />
          </label>
          <label>
            Date Started:
            <input type='text' name='dateStarted' />
          </label>
          <label>
            Date Ended:
            <input type='text' name='dateEnded' />
          </label>
        </form>
      </div>
    );
  }
}

export default Experience;
