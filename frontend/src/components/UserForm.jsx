import { useState, useEffect } from 'react';
import { createUser, updateUser } from '../api/userService';

const initialForm = { name: '', email: '', age: '' };

function UserForm({ editingUser, onSave, onCancel }) {
    const [form, setForm] = useState(initialForm);
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (editingUser) {
            setForm({ name: editingUser.name, email: editingUser.email, age: editingUser.age });
        } else {
            setForm(initialForm);
        }
    }, [editingUser]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (!form.name || !form.email || !form.age) {
            setError('All fields are required.');
            return;
        }
        setSubmitting(true);
        try {
            if (editingUser) {
                await updateUser(editingUser._id, form);
            } else {
                await createUser(form);
            }
            setForm(initialForm);
            onSave();
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="user-form">
            <h2>{editingUser ? 'Edit User' : 'Add New User'}</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        value={form.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input
                        type="number"
                        name="age"
                        placeholder="Enter age"
                        value={form.age}
                        onChange={handleChange}
                        min="0"
                    />
                </div>
                <div className="form-actions">
                    <button type="submit" className="btn-primary" disabled={submitting}>
                        {submitting ? 'Saving...' : editingUser ? 'Update User' : 'Add User'}
                    </button>
                    {editingUser && (
                        <button type="button" className="btn-cancel" onClick={onCancel}>
                            Cancel
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}

export default UserForm;
