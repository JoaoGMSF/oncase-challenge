import React, {useState, useEffect} from "react";
import Header from '../components/Header';
import Table from "../components/Table";
import DonutChart from "../components/DonutChart";
import { UserService } from '../services/UserService';

const Home = () =>{
    const [newUser, setNewUser] = useState();
    const [inputUser, setInputUser] = useState({
        firstName: '',
        lastName: '',
        participation: '',
      });
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        participation: -1,
      });
    
    async function postUser() {
        UserService.postUser(inputUser)
            .then(() => {
                console.log('User cadastrado com sucesso!');
                setNewUser(true);

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

    async function getUser(){
        UserService.getUser()
        .then(response => {
          const { data } = response;
          const allUsers = data.map(tempUser => ({
            id: tempUser.id,
            firstName: tempUser.firstName,
            lastName: tempUser.lastName,
            participation: tempUser.participation,
            percentage: tempUser.percentage
          }));
          setUser(allUsers);
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
        setInputUser({
            ...inputUser,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        // e.preventDefault();
        postUser();
        setNewUser(false);
        setInputUser(
            {
                firstName: '',
                lastName: '',
                participation: '',
            }
        )
    };

    useEffect(() => {
        getUser();
      }, []);
    
    useEffect(() => {
        if (newUser) {
            getUser();
        }
    }, [newUser]);

    return (
        <>
        <Header onSubmit={handleSubmit} onChange={handleChange} value={inputUser}></Header>
        <div className="flex">
            <div className="flex-1">
                <Table data={user} />
            </div>
            <div className="flex-1">
                <DonutChart data={user}/>
            </div>
        </div>
        </>
    );
}

export default Home;