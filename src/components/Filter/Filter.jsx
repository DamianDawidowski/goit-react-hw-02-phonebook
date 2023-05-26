import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Filter.module.css';

export class Filter extends Component {
  render() {
    const { filter, executeFilter } = this.props;
    return (
      <div className={css.filter}>
        <input
          type="text"
          name="filter"
          className={css.filterInput}
          value={filter}
          onChange={executeFilter} 
        />
      </div>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  executeFilter: PropTypes.func,
};