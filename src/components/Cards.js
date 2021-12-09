import React from 'react'
import { MailOutlined, PhoneOutlined, HeartFilled, HeartOutlined, DeleteFilled, GlobalOutlined, EditOutlined } from '@ant-design/icons';
import { Card, Col } from 'antd';
import { useGlobalContext } from '../context';

const Cards = ({ user }) => {
    const { toggleLike, openModal, deleteUser } = useGlobalContext();
    return (
        <Col xs={24} sm={24} md={8} lg={8} xl={6}>
            <Card style={{ margin: 15 }} bordered={true}
                cover={
                    <div className="imageContainer">
                        <img className="image" alt={user.name}
                            src={`https://avatars.dicebear.com/v2/avataaars/${user.name}.svg?options[mood][]=happy}`} />
                    </div>}
                actions={[
                    <div onClick={() => toggleLike(user.id)}>
                        {user.isLiked ? <HeartFilled style={{ color: "rgb(255,0,0)", fontSize: '20px' }} /> : <HeartOutlined style={{ color: "rgb(255,0,0)", fontSize: '20px' }} />}
                    </div>,
                    <EditOutlined key="edit" style={{ fontSize: '20px' }} onClick={() => openModal(user.id)} />,
                    <DeleteFilled style={{ fontSize: '20px' }} onClick={() => deleteUser(user.id)} />,
                ]}
            >
                <h3 style={{ color: '#262626', fontSize: "15px" }}>{user.name}</h3>
                <div style={{ display: 'flex', alignItems: "baseline", height: '1.8rem' }}>
                    <MailOutlined style={{ fontSize: '18px', color: "rgba(0,0,0,.65)" }} />
                    <p style={{ marginLeft: 7, color: "rgba(0,0,0,.65)", fontSize: '14px' }}>{user.email}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', height: '1.8rem' }}>
                    <PhoneOutlined style={{ fontSize: '18px', color: "rgba(0,0,0,.65)" }} />
                    <p style={{ marginLeft: 7, color: "rgba(0,0,0,.65)", fontSize: '14px' }}>{user.phone}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', height: '1.8rem' }}>
                    <GlobalOutlined style={{ fontSize: '18px', color: "rgba(0,0,0,.65)" }} />
                    <p style={{ marginLeft: 7, color: "rgba(0,0,0,.65)", fontSize: '14px' }}>{user.website}</p>
                </div>
            </Card>
        </Col>
    )
}

export default Cards
