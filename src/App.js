import React from 'react';
import './styles/style.css';
import Personal from './components/personal';
import Experience from './components/experience';
import Education from './components/education';

const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  schoolName: '',
  titleOfStudy: '',
  dateAttended: '',
  companyName: '',
  positionTitle: '',
  mainTasks: '',
  dateStarted: '',
  dateEnded: '',
};

function App() {
  const [formData, setFormData] = React.useState(initialFormData);

  const {
    firstName,
    lastName,
    email,
    phone,
    schoolName,
    titleOfStudy,
    dateAttended,
    companyName,
    positionTitle,
    mainTasks,
    dateStarted,
    dateEnded,
  } = formData;

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());
    setFormData(initialFormData);
    console.log({ value });
  }

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>CV Application</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <Personal
            firstName={firstName}
            lastName={lastName}
            email={email}
            phone={phone}
            handleChange={handleChange}
          />
          <Experience
            schoolName={schoolName}
            titleOfStudy={titleOfStudy}
            dateAttended={dateAttended}
            handleChange={handleChange}
          />
          <Education
            companyName={companyName}
            positionTitle={positionTitle}
            mainTasks={mainTasks}
            dateStarted={dateStarted}
            dateEnded={dateEnded}
            handleChange={handleChange}
          />
          <button type='submit'>Submit</button>
        </form>
      </main>
    </div>
  );
}

export default App;
