import React, {useState} from "react";
import Header from '../components/Header';
import Table from "../components/Table";
import { UserService } from '../services/UserService';

const Home = () =>{
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        participation: '',
      });
    
    async function postUser() {
        UserService.postUser(user)
            .then(() => {
                console.log('User cadastrado com sucesso!');
            })
            .catch(error => {
                if (error.response) {
                    console.error('Response error', error.response.status);
                } else if (error.request) {
                    console.error('Request error', error.request);
                } else {
                    console.error('Error', error.message);
                }
            });
    }

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        postUser();
    };

    const rows = [
        { id: 1, col1: 'Hello', col2: 'World' , col3: 20},
        { id: 2, col1: 'DataGridPro', col2: 'is Awesome', col3: 30 },
        { id: 3, col1: 'MUI', col2: 'is Amazing', col3:50 },
      ];

    return (
        <>
        <Header onSubmit={handleSubmit} onChange={handleChange} value={user}></Header>
        </>
    );
}

export default Home;