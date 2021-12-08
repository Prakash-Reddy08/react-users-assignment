import axios from "axios";

const FetchUsers = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response
}

export default FetchUsers;