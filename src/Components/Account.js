// AccountModal.js
import React from 'react';

const AccountModal = ({ isOpen, onClose, username, ranking }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-md shadow-md max-w-sm w-full">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Account</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">&times;</button>
                </div>

                <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex items-center justify-center">
                        {/* Icône de photo de profil (remplacez par une vraie image si nécessaire) */}
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Profile"
                            className="w-full h-full rounded-full"
                        />
                    </div>
                    <div>
                        <p className="text-lg font-medium">{username}</p>
                        <p className="text-sm text-gray-500">General Ranking: #{ranking}</p>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">General Ranking</h3>
                    <p className="text-gray-700">Your current position in the global leaderboard is #{ranking}.</p>
                </div>
            </div>
        </div>
    );
};

export default AccountModal;
