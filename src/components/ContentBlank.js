import React from 'react';
import {Table} from 'antd';

function ContentBlank(){
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name'
            },
            {
                title: 'Age',
                dataIndex: 'age'
            },
            {
                title: 'Address',
                dataIndex: 'address'
            }
        ];
        const dataSources = [
            {
                key: 1,
                name: 'Bigya',
                age: 21,
                address: 'Lalitpur'
            },
            {
                key: 2,
                name: 'Another Bigya',
                age: 21,
                address: 'Lalitpur'
            }
        ];
        return (
            <>
                <Table columns={columns} dataSource={dataSources} />
            </>
        );
}

export default ContentBlank;
