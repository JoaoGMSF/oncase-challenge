import React, {useState, useEffect} from "react";
import Header from '../components/Header';
import Table from "../components/Table";
import DonutChart from "../components/DonutChart";
import { UserService } from '../services/UserService';
import ErrorHandling from "../services/ErrorHandling";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Home = () =>{
    const [inputUser, setInputUser] = useState({
        firstName: '',
        lastName: '',
        participation: '',
      });
    const [users, setUsers] = useState([]);
    
    async function postUser() {
        UserService.postUser(inputUser)
        .then(async () => {
            console.log('User cadastrado com sucesso!');
            await getUser();
            setInputUser({
                firstName: '',
                lastName: '',
                participation: '',
            })
            toast.success('User adicionado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        })
        .catch(error => {
            if (error.response) {
                const errorMessage = ErrorHandling.getErrorMessage(error.response.data)
                errorMessage.forEach((err)=>{
                    console.log("error message: ", err)
                    toast.error(err, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                    console.error('Response error', error.response.status);
                })
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
          setUsers(allUsers);
        })
        .catch(error => {
          if (error.response) {
            const errorMessage = ErrorHandling.getErrorMessage(error.response.data)
            errorMessage.forEach((err)=>{
                console.log("error message: ", err)
                toast.error(err, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                console.error('Response error', error.response.status);
            })
          } else if (error.request) {
            console.error('Request error', error.request);
          } else {
            console.error('Error', error.message);
          }
        });
    }

    async function putUser(userData) {
        await UserService.putUser(userData)
        .then(async () => {
            console.log('User atualizado com sucesso!');
            await getUser();
            toast.success('User atualizado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        })
        .catch(error => {
            if (error.response) {
                const errorMessage = ErrorHandling.getErrorMessage(error.response.data)
                errorMessage.forEach((err)=>{
                    console.log("error message: ", err)
                    toast.error(err, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                    console.error('Response error', error.response.status);
                })
            } else if (error.request) {
                console.error('Request error', error.request);
            } else {
                console.error('Error', error.message);
            }
        });
    }

    async function deleteUser(userId) {
        UserService.deleteUser(userId)
        .then(() => {
            console.log('User deletado com sucesso!');
            getUser();
            toast.success('User deletado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        })
        .catch(error => {
            if (error.response) {
                const errorMessage = ErrorHandling.getErrorMessage(error.response.data)
                errorMessage.forEach((err)=>{
                    console.log("error message: ", err)
                    toast.error(err, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                    console.error('Response error', error.response.status);
                })
            } else if (error.request) {
                console.error('Request error', error.request);
            } else {
                console.error('Error', error.message);
            }
        });
    }

    const handleChange = (e) => {
        setInputUser((inputUser)=>({
            ...inputUser,
            [e.target.name]: e.target.value,
        }));
    };

    console.log(inputUser)

    const handleSubmit = async (e) => {
        setInputUser({
            firstName: '',
            lastName: '',
            participation: '',
        })
        e.preventDefault();
        postUser();
    };

    const handleUpdate = (e, userData) => {
        e.preventDefault();
        putUser(userData)
    }

    const handleDelete = (e, userData) => {
        e.preventDefault();
        deleteUser(userData)
    }

    useEffect(() => {
        getUser();
      }, []);
    
    return (
        <>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />

        <Header onSubmit={handleSubmit} onChange={handleChange} value={inputUser}></Header>
        <div className="text-center mt-9">
            <h1 className="text-7xl font-sans">Data</h1>
            <p className="text-3xl mt-2">Enter your first name, last name and participation, then press send.</p>
            <p className="text-3xl mt-2">You can update and delete either.</p>
        </div>
        <div className="flex flex-wrap mt-3">
            <div className="flex-1">
                <Table onClick={handleDelete} onBlur={handleUpdate} data={users} />
            </div>
            <div className="flex-1">
                <DonutChart data={users}/>
            </div>
        </div>
        </>
    );
}

export default Home;