import React, { useState, useEffect } from 'react';
import {
    Left, Body, Right, Button, Icon, Title, Content,
    List, ListItem, Thumbnail, Text
} from 'native-base'
import MyHeader from './Header';
import axios from 'axios';


const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get('https://reqres.in/api/users?page=2');
            console.log(data.page);
            setUsers(data.data);
        }
        getData();
    },[]);

    const renderedUser = users.map((user) => {
        return (
            <ListItem thumbnail key={user.id}>
                <Left>
                    <Thumbnail square source={{ uri: `${user.avatar}` }} />
                </Left>
                <Body>
                    <Text>{`${user.first_name} ${user.last_name}`}</Text>
                    <Text note numberOfLines={1}>{user.email}</Text>
                </Body>
                <Right>
                    <Button transparent>
                        <Text>View</Text>
                    </Button>
                </Right>
            </ListItem>
        );
    });

    return (
        <>
            <MyHeader />
            <Content>
                <List>
                    {renderedUser}
                </List>
            </Content>
        </>
    );
}

export default Home;
