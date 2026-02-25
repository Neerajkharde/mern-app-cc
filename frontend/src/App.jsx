import { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './App.css';

function App() {
    const [editingUser, setEditingUser] = useState(null);
    const [refreshKey, setRefreshKey] = useState(0);

    const handleSave = () => {
        setEditingUser(null);
        setRefreshKey((prev) => prev + 1);
    };

    const handleEdit = (user) => {
        setEditingUser(user);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCancel = () => {
        setEditingUser(null);
    };

    return (
        <div className="app">
            <header>
                <h1>User Management (MERN CRUD)</h1>
            </header>
            <main>
                <UserForm
                    editingUser={editingUser}
                    onSave={handleSave}
                    onCancel={handleCancel}
                />
                <UserList
                    onEdit={handleEdit}
                    refreshKey={refreshKey}
                />
            </main>
        </div>
    );
}

export default App;
