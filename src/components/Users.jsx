import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
const Users = () => {

    const loadedUser = useLoaderData();
    const [users, setUsers] = useState()
    const handleDelete = _id => {
        console.log('delete', _id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert("deleted successfully")
                    const remaining = users.filter(user => user._id !== _id);
                    setUsers(remaining)
                }
            })
    }

    return (
        <div>
            <h2>{users.length}</h2>
            <div>
                {users?.map(user => <p key={user._id}>{user.name}: {user.email}
                    <Link to={`/update/${user._id}`}></Link>
                    <button
                        onClick={() => handleDelete(user._id)}
                    >Update</button></p>)}
            </div>
        </div>
    );
};

export default Users;