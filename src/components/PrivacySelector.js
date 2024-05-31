// src/components/PrivacySelector.js
import React from 'react';

const PrivacySelector = ({ isPublic, setIsPublic }) => {
  return (
    <div className="privacy-selector">
      <label>
        <input
          type="radio"
          value="public"
          checked={isPublic}
          onChange={() => setIsPublic(true)}
        />
        Public
      </label>
      <label>
        <input
          type="radio"
          value="private"
          checked={!isPublic}
          onChange={() => setIsPublic(false)}
        />
        Private
      </label>
    </div>
  );
};

export default PrivacySelector;
