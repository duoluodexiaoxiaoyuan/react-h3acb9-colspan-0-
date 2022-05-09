import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Tag, Space } from 'antd';
const sharedOnCell = (_, index) => {
  if (index === 4) {
    return { colSpan: 0 };
  }
};
// 在合并行的时候注意要把下面的列变为0否则就会挤到右边
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    onCell: (_, index) => {
      console.log(index);
      if (index === 0) {
        return { rowSpan: 3 };
      } else {
        return { colSpan: 0 };
      }
    },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    age: 42,
    address: 'Sidney No. 1 Lake Park',
  },
];

export default () => <Table columns={columns} dataSource={data} />;
