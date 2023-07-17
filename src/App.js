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
    // Reset state
    setFormData(initialFormData);

    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());
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
            value={{ firstName, lastName, email, phone, handleChange }}
          />
          <Experience
            value={{
              companyName,
              positionTitle,
              mainTasks,
              dateStarted,
              dateEnded,
              handleChange,
            }}
          />
          <Education
            value={{ schoolName, titleOfStudy, dateAttended, handleChange }}
          />
          <button type='submit'>Submit</button>
        </form>
      </main>
    </div>
  );
}

export default App;
