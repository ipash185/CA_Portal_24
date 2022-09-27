import React, { useRef, useState } from 'react'
import classes from './Registrations.module.css'
import 'antd/dist/antd.css';
import { SearchOutlined } from '@ant-design/icons';
import { Space, Table, Tag, Button, Input } from 'antd';
import Highlighter from 'react-highlight-words';

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
            'Selected': 'No',
            'Selection': 'Pending'
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
            'Selected': 'No',
            'Selection': 'Completed'
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
            'Selected': 'Yes',
            'Selection': 'Completed'
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
            'Selected': 'Yes',
            'Selection': 'Completed'
        }
    ]

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div
                style={{
                    padding: 8,
                }}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const columns = [
        {
            title: 'First Name',
            key: 'first',
            dataIndex: 'first',
            ...getColumnSearchProps('first' ),
        },
        {
            title: 'Last Name',
            key: 'second',
            dataIndex: 'second',
            ...getColumnSearchProps('second' ),
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
            ...getColumnSearchProps('Number'),
        },
        {
            title: 'Email',
            dataIndex: 'Email',
            key: 'Email',
            ...getColumnSearchProps('Email'),
        },
        {
            title: 'College',
            dataIndex: 'College',
            key: 'College',
            ...getColumnSearchProps('College'),
        },
        {
            title: 'City',
            dataIndex: 'City',
            key: 'City',
            ...getColumnSearchProps('City'),
        },
        {
            title: 'State',
            dataIndex: 'State',
            key: 'State',
            ...getColumnSearchProps('State'),
        },
        {
            title: 'Selection',
            key: 'Selection',
            dataIndex: 'Selection',
            filters: [
                {
                    text: 'Pending',
                    value: 'Pending',
                },
                {
                    text: 'Completed',
                    value: 'Completed',
                },
            ],
            onFilter: (value, record) => record.Selection.startsWith(value),
            filterSearch: true,
            render: (_, record) => (
                <Space size="middle" onClick={() => { handleClick() }}>
                    <a>{record.Selection}</a>
                </Space>
            ),
        },
        {
            title: 'Result',
            key: 'Selected',
            dataIndex: 'Selected',
            filters: [
                {
                    text: 'Selected',
                    value: 'Yes',
                },
                {
                    text: 'Not Selected',
                    value: 'No',
                },
            ],
            onFilter: (value, record) => record.Selected.startsWith(value),
            filterSearch: true,
            render: (_, record) => (
                <Space size="middle" onClick={() => { handleClick() }}>
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
        }
    ];

    const handleClick = () => {
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