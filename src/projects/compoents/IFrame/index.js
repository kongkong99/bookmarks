/**
 * title: 基础 Modal
 * desc: 这是 antd Modal 组件的基础示例
 */

import React from 'react';
import './index.less';

class IFrame extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      width = '100%',
      minWidth,
      height = 800,
      src = '',
      id = '',
    } = this.props;
    if (!src) return null;
    return (
      <div style={{ width, height }} className="iframe-wrapper">
        <iframe
          id=""
          width={width}
          height={height - 15}
          src={src}
          className="custom-iframe"
          style={{ minWidth: minWidth || width }}
        ></iframe>
      </div>
    );
  }
}

export default IFrame;
