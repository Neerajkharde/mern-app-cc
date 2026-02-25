import { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../api/userService';

function UserList({ onEdit, refreshKey }) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchUsers();
    }, [refreshKey]);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const res = await getUsers();
            setUsers(res.data);
            setError('');
        } catch (err) {
            setError('Failed to fetch users.');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this user?')) return;
        try {
            await deleteUser(id);
            setUsers(users.filter((u) => u._id !== id));
        } catch (err) {
            alert('Failed to delete user.');
        }
    };

    if (loading) return <p className="info">Loading users...</p>;
    if (error) return <p className="error">{error}</p>;

    return (
        <div className="user-list">
            <h2>All Users</h2>
            {users.length === 0 ? (
                <p className="info">No users found. Add one above!</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                                    <button className="btn-edit" onClick={() => onEdit(user)}>
                                        Edit
                                    </button>
                                    <button className="btn-delete" onClick={() => handleDelete(user._id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default UserList;
