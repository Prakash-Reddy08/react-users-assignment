import React from 'react'
import Loading from './components/Loading';
import { useGlobalContext } from './context';
import { Row, Col, Card } from 'antd';
import styled from 'styled-components';
import { MailOutlined, PhoneOutlined, HeartFilled, HeartOutlined, DeleteFilled, GlobalOutlined, EditOutlined } from '@ant-design/icons';
import UserModal from './components/UserModal';

const HomePage = () => {
    const { isLoading, users, toggleLike, openModal, details, deleteUser } = useGlobalContext();
    if (isLoading) {
        return <Loading />
    }

    return (
        <Wrapper>
            <Row>
                {
                    users.map((user) => {
                        return (<Col key={user.id} xs={24} sm={24} md={8} lg={8} xl={6}>
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
                        </Col>)
                    })
                }
                <UserModal details={details} />
            </Row >
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .imageContainer{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        background-color: #F5F5F5;
    }
    .image{
        width: 200px;
        height: 200px;
    }
`

export default HomePage
