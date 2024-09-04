// RegisterModal.js
import React from 'react';

const RegisterModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-md shadow-md max-w-md w-full">
                <h2 className="text-xl font-semibold mb-4">Register</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="username">Username</label>
                        <input type="text" id="username" className="w-full px-3 py-2 border rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                        <input type="email" id="email" className="w-full px-3 py-2 border rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
                        <input type="password" id="password" className="w-full px-3 py-2 border rounded-md" />
                    </div>
                    <div className="flex justify-end">
                        <button type="button" onClick={onClose} className="mr-2 px-4 py-2 bg-gray-300 rounded-md">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterModal;
