'use strict';

const React = require('react');
const Row = require('./Row');

class Table extends React.Component {
  render () {
    const rows = this.props.table.map((row, index) => (<Row key={index} row={row} onChange={this.props.onChange.bind(null, index)} onFocus={this.props.onFocus.bind(null, index)}/>));

    return (
      <table table={this.props.table} onBlur={this.props.onBlur} className='table'>
        <tbody>
          {rows}
        </tbody>
      </table>

    )
  }
}

module.exports = Table;
