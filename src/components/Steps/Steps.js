/**
 * @copyright   2010-2017, The Titon Project
 * @license     http://opensource.org/licenses/BSD-3-Clause
 * @link        http://titon.io
 */

import React, { PropTypes } from 'react';
import Component from '../../Component';
import Item from './Item';
import childrenOf from '../../prop-types/childrenOf';
import MODULE from './module';

export default class Steps extends Component {
  static module = MODULE;

  static defaultProps = {
    label: 'Stepped Navigation',
  };

  static propTypes = {
    children: childrenOf(Item),
    label: PropTypes.string,
  };

  render() {
    const { label, children } = this.props;

    return (
      <nav
        role="navigation"
        className={this.formatClass()}
        aria-label={label}
      >
        <ol>
          {children}
        </ol>
      </nav>
    );
  }
}
