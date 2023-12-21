import React, {useState, useEffect} from "react";
import Header from '../components/Header';
import Table from "../components/Table";
import DonutChart from "../components/DonutChart";
import { UserService } from '../services/UserService';

const Home = () =>{
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
                getUser();
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

    async function putUser(userData) {
        UserService.putUser(userData)
            .then(() => {
                console.log('User atualizado com sucesso!');
                getUser();
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
        e.preventDefault();
        postUser();
        setInputUser(
            {
                firstName: '',
                lastName: '',
                participation: '',
            }
        )
    };

    const handleUpdate = (e, userData) => {
        e.preventDefault();
        console.log("userData: ",userData)
        putUser(userData)
    }

    useEffect(() => {
        getUser();
      }, []);
    
    return (
        <>
        <Header onSubmit={handleSubmit} onChange={handleChange} value={inputUser}></Header>
        <div className="text-center mt-9">
            <h1 className="text-7xl font-sans">Data</h1>
            <p className="text-3xl mt-2">Enter your first name, last name and participation, then press send</p>
        </div>
        <div className="flex flex-wrap mt-3">
            <div className="flex-1">
                <Table onBlur={handleUpdate} data={user} />
            </div>
            <div className="flex-1">
                <DonutChart data={user}/>
            </div>
        </div>
        </>
    );
}

export default Home;