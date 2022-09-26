import React from 'react'
import classes from './Registrations.module.css'
import 'antd/dist/antd.css';
import { Space, Table, Tag, Button } from 'antd';

function Registrations() {

    const data = [
        {
            'first': 'Souvik',
            'second': 'Mondal',
            'Gender': 'MALE',
            'Number': '7283920362',
            'Email': 'sadihfi@idbnbnd.com',
            'College': 'Indian Institute of Bangkok, Russia',
            'City': 'Amritsar',
            'State': 'Kada Road',
            'Selected': 'No'
        },
        {
            'first': 'Shiva',
            'second': 'Bhakto',
            'Gender': 'MALE',
            'Number': '7283920362',
            'Email': 'sadihfi@idbnbnd.com',
            'College': 'Indian Institute of Bangkok, Russia',
            'City': 'Amritsar',
            'State': 'Kada Road',
            'Selected': 'No'
        },
        {
            'first': 'Mia',
            'second': 'Khalifa',
            'Gender': 'FEMALE',
            'Number': '7283920362',
            'Email': 'sadihfi@idbnbnd.com',
            'College': 'Indian Institute of Bangkok, Russia',
            'City': 'Amritsar',
            'State': 'Kada Road',
            'Selected': 'Yes'
        },
        {
            'first': 'jONNY',
            'second': 'sINS',
            'Gender': 'MALE',
            'Number': '7283920362',
            'Email': 'sadihfi@idbnbnd.com',
            'College': 'Indian Institute of Bangkok, Russia',
            'City': 'Amritsar',
            'State': 'Kada Road',
            'Selected': 'Yes'
        }
    ]

    const columns = [
        {
            title: 'First Name',
            dataIndex: 'first',
            key: 'first',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Last Name',
            dataIndex: 'second',
            key: 'second',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Gender',
            dataIndex: 'Gender',
            key: 'Gender',
        },
        {
            title: 'Number',
            dataIndex: 'Number',
            key: 'Number',
        },
        {
            title: 'Email',
            dataIndex: 'Email',
            key: 'Email',
        },
        {
            title: 'College',
            dataIndex: 'College',
            key: 'College',
        },
        {
            title: 'City',
            dataIndex: 'City',
            key: 'City',
        },
        {
            title: 'State',
            dataIndex: 'State',
            key: 'State',
        },
        {
            title: 'Selection',
            key: 'Selected',
            dataIndex: 'Selected',
            render: (_, record) => (
                <Space size="middle" onClick={()=>{handleClick()}}>
                    <div>{record.Selected === "No" ? `Not Selected` : `Selected`}</div>
                </Space>
            ),
        },
        {
            title: 'Edit Selection',
            key: 'Selected',
            dataIndex: 'Selected',
            render: (_, record) => (
                <Space size="middle">
                    <a>{record.Selected === "No" ? `Select ${record.first}` : `Remove ${record.first}`}</a>
                </Space>
            ),
        },
    ];

    const handleClick=()=>{
        // for toggling selection
    }

    return (
        <div className={classes.Registrations}>
            <div className={classes.head}>Registrations for Campus Ambassador Programme</div>
            <div className={classes.list}>
                <Table columns={columns} dataSource={data} />
            </div>
            <Button type="primary" size='large'>LOG OUT</Button>
        </div>
    )
}

export default Registrations