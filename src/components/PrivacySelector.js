// src/components/PrivacySelector.js
import React from 'react';

const PrivacySelector = ({ isPublic, setIsPublic }) => {
  return (
    <div className="flex items-center">
      <label className="mr-2">Public</label>
      <input
        type="checkbox"
        checked={isPublic}
        onChange={() => setIsPublic(!isPublic)}
        className="toggle-checkbox"
      />
      <label className="ml-2">Private</label>
    </div>
  );
};

export default PrivacySelector;
