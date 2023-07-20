import React from 'react';

class Table extends React.Component {
  render() {
    return (
      <div className='review'>
        <h2>Output</h2>
        <table>
          <tbody>
            {Object.keys(this.props.value).map(key => {
              return (
                <tr key={key}>
                  <td>{key}</td>
                  {/* Update the output values to be the values from the form */}
                  <td>{this.props.value[key]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
