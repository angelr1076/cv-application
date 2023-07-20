import React from 'react';
import './styles/style.css';
import Personal from './components/Personal';
import Experience from './components/Experience';
import Education from './components/Education';
import Table from './components/Table';

const initialFormData = {
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  studied: '',
  schoolname: '',
  studying: '',
  attended: '',
  company: '',
  position: '',
  duties: '',
  started: '',
  ended: '',
};

class App extends React.Component {
  state = {
    formData: initialFormData,
    isTableVisible: false,
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());

    this.setState({
      isTableVisible: true,
      formData: value,
    });

    e.target.reset();
  };

  handleChange = e => {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    const { formData, isTableVisible } = this.state;

    return (
      <div className='App'>
        <header className='App-header'>
          <h1>CV Application</h1>
        </header>

        <main>
          <form onSubmit={this.handleSubmit}>
            <Personal
              value={{
                firstname: formData.firstname,
                lastname: formData.lastname,
                email: formData.email,
                phone: formData.phone,
                handleChange: this.handleChange,
              }}
            />

            <Experience
              value={{
                company: formData.company,
                position: formData.position,
                duties: formData.duties,
                started: formData.started,
                ended: formData.ended,
                handleChange: this.handleChange,
              }}
            />

            <Education
              value={{
                studied: formData.studied,
                schoolname: formData.schoolname,
                studying: formData.studying,
                attended: formData.attended,
                handleChange: this.handleChange,
              }}
            />

            <button type='submit'>Submit</button>
          </form>

          {isTableVisible && <Table value={formData} />}
        </main>
      </div>
    );
  }
}

export default App;
