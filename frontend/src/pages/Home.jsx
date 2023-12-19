import React from "react";
import Header from '../components/Header';
import { UserService } from '../services/UserService';

const Home = () =>{
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        participation: '',
      });
    
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };
    
    async function postUser() {
    UserService.postUser(user)
        .then(() => {
            toast.success('User cadastrado com sucesso!');
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
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        postUser();
    };

    return (
        <Header onSubmit={handleSubmit} onChange={handleChange} value={user}></Header>
    );
}

export default Home;