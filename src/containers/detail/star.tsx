import React from 'react';
import { Rate } from 'antd';

const Star: React.FC = () => <Rate allowHalf disabled count={5} defaultValue={4.5} />;

export default Star;