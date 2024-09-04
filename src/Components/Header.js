// Header.js
import React, { useState } from 'react';
import RegisterModal from './Register'; // Importer le composant modal
import LoginModal from './Login'; // Importer le composant modal
import AccountModal from './Account'; // Importer le composant modal

const Header = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const handleRegisterClick = () => {
    setIsRegisterOpen(true); // Ouvrir le modal
  };

  const handleLoginClick = () => {
    setIsLoginOpen(true); // Ouvrir le modal
  };

  const handleAccountClick = () => {
    setIsAccountOpen(true); // Ouvrir le modal
  };

  const handleCloseRegisterModal = () => {
    setIsRegisterOpen(false); // Fermer le modal
  };

  const handleCloseLoginModal = () => {
    setIsLoginOpen(false); // Fermer le modal
  };

  const handleCloseAccountModal = () => {
    setIsAccountOpen(false); // Fermer le modal
  };


  return (
    <>
      <div className="flex justify-between items-center py-2 px-2 w-full">
        <div className="flex-1">
          <button
          type="account"
          onClick={handleAccountClick}
          className="w-20 h-6 bg-slate-300 rounded-md text-center text-sm"
          >
            Account
          </button>
        </div>
        <div className="flex-1 text-center">
          <h1 className="text-2xl font-bold">Wordle</h1>
        </div>
        <div className="flex-1 text-right">
          <button
            type="register"
            onClick={handleRegisterClick}
            className="w-20 h-6 bg-slate-300 rounded-md text-center text-sm ml-2"
          >
            Register
          </button>
          <button
          type="login"
          onClick={handleLoginClick}
          className="w-20 h-6 bg-slate-300 rounded-md text-center text-sm ml-2"
          >
            Login
          </button>
        </div>
      </div>

      <div className="border-b-2 border-lightgray mb-4 w-full"></div>

      {/* Afficher le modal Register */}
      <RegisterModal isOpen={isRegisterOpen} onClose={handleCloseRegisterModal} />
      <LoginModal isOpen={isLoginOpen} onClose={handleCloseLoginModal} />
      <AccountModal isOpen={isAccountOpen} onClose={handleCloseAccountModal} />
    </>
  );
};

export default Header;
