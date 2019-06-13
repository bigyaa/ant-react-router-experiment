import React from 'react';
import {Skeleton, Divider} from 'antd';

class Content extends React.Component {

    render() {
        return (
            <>
                <Skeleton avatar paragraph={{rows: 3}}/>
                <Divider/>
                <Skeleton avatar paragraph={{rows: 3}}/>
                <Divider/>
                <Skeleton avatar paragraph={{rows: 3}}/>
            </>
        );
    }
}

export default Content;
