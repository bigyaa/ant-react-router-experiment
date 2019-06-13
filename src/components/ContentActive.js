import React from 'react';
import {Skeleton, Divider} from 'antd';

class ContentActive extends React.Component {

    render() {
        return (
            <>
                <Skeleton avatar paragraph={{rows: 3}} active />
                <Divider/>
                <Skeleton avatar paragraph={{rows: 3}} active />
                <Divider/>
                <Skeleton avatar paragraph={{rows: 3}} active />
            </>
        );
    }
}

export default ContentActive;
