import React from 'react';
import {Skeleton, Divider} from 'antd';

function ContentActive(){
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

export default ContentActive;
