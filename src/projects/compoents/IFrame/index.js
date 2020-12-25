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
    const { width = '100%', height = 500, src = '' } = this.props;
    return <iframe id="" width={width} height={height} src={src}></iframe>;
  }
}

export default IFrame;
