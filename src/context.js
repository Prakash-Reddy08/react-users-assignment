import { createContext, useContext, useEffect, useState } from "react";
import FetchUsers from "./api/FetchUsers";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [details, setDetails] = useState({});
    const toggleLike = (id) => {
        const tempUsers = users.map((user) => {
            if (user.id === id) {
                return { ...user, isLiked: !user.isLiked }
            }
            else {
                return user;
            }
        })
        setUsers(tempUsers);
    }

    const editUserDetails = (id, data) => {
        const currUser = users.map((user) => {
            if (user.id === id) {
                return { ...user, ...data }
            }
            return user;
        });
        setUsers(currUser);
    }

    const deleteUser = (id) => {
        const newUsers = users.filter((user) => {
            return user.id !== id;
        })
        setUsers(newUsers);
    }
    const openModal = (id) => {
        setIsModalOpen(true);
        const currUser = users.filter((user) => {
            return id === user.id;
        });
        setDetails(currUser);
    }
    const closeModal = () => {
        setIsModalOpen(false);
        setDetails({});
    }

    useEffect(() => {
        setIsLoading(true);
        FetchUsers().then((res) => {
            const userData = res.data.map((user) => {
                return { ...user, isLiked: false }
            })
            setUsers(userData);
            setIsLoading(false);
        }).catch((err) => {
            setIsLoading(false);
            console.log(err);
        })
    }, [])

    return (
        <AppContext.Provider value={{
            users,
            isLoading,
            toggleLike,
            deleteUser,
            isModalOpen,
            openModal,
            closeModal,
            details,
            editUserDetails
        }}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, useGlobalContext };