import React from 'react';
import { X } from 'lucide-react';

const CookieConsent = ({ onClose }) => {
  const handleAccept = () => {
    onClose();
  };

  const handleDeny = () => {
    onClose();
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md bg-white rounded-xl shadow-lg border border-gray-200 p-6 z-50">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
      >
        <X className="w-5 h-5" />
      </button>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        This site uses cookies
      </h3>
      
      <p className="text-sm text-gray-600 mb-4">
        We and selected third parties use cookies (or similar technologies) for technical purposes, to enhance and analyze site usage, to support our marketing efforts, and for other purposes described below.
      </p>
      
      <p className="text-sm text-gray-600 mb-6">
        By clicking "Accept all", you agree to the storing of cookies on your device for these purposes.
      </p>
      
      <div className="flex space-x-3">
        <button 
          onClick={handleDeny}
          className="btn-outline flex-1"
        >
          Deny
        </button>
        <button 
          onClick={handleAccept}
          className="btn-secondary flex-1"
        >
          Accept all
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;