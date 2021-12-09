import React from 'react'
import Loading from './components/Loading';
import { useGlobalContext } from './context';
import { Row } from 'antd';
import styled from 'styled-components';
import UserModal from './components/UserModal';
import Cards from './components/Cards';

const HomePage = () => {
    const { isLoading, users } = useGlobalContext();
    if (isLoading) {
        return <Loading />
    }

    return (
        <Wrapper>
            <Row>
                {
                    users.map((user) => {
                        return (
                            <Cards key={user.id} user={user} />
                        )
                    })
                }
                <UserModal />
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
