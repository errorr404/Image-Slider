import React from 'react';
import './tabTitle.scss';

const TabTitle = (props) => {
    const {title} = props;
    return <div className="tabTitle">{title}</div>
}
export default TabTitle;