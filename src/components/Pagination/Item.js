/**
 * @copyright   2010-2017, The Titon Project
 * @license     http://opensource.org/licenses/BSD-3-Clause
 * @link        http://titon.io
 */

import React, { PropTypes } from 'react';
import Component from '../../Component';
import bind from '../../decorators/bind';
import CONTEXT_TYPES from './contextTypes';
import MODULE from './module';

export default class Item extends Component {
  static module = MODULE;

  static contextTypes = CONTEXT_TYPES;

  static propTypes = {
    children: PropTypes.node,
    page: PropTypes.number.isRequired,
  };

  @bind
  handleOnClick(e) {
    e.preventDefault();

    this.getContext().goToPage(this.props.page);
  }

  render() {
    const { children, page } = this.props;
    const context = this.getContext();
    const key = this.getInternalElement().key;

    return (
      <li>
        <a
          href={context.url.replace('{{page}}', page)}
          className={this.formatChildClass('item', {
            'is-active': (key.match(/^\d$/) && context.currentPage === page),
            'is-first': (key === 'first'),
            'is-last': (key === 'last'),
            'is-next': (key === 'next'),
            'is-prev': (key === 'prev'),
          })}
          onClick={this.handleOnClick}
        >
          {children || page}
        </a>
      </li>
    );
  }
}
