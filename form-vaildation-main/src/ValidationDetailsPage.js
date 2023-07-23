import React from 'react';
import './ValidationDetailsPage.css'; // Import the CSS file for styling


const ValidationDetailsPage = ({ userDetails }) => {
  return (
    <div className="validation-details-page">
      <h1 className="validation-details-title">Validation Details</h1>
      <div className="validation-details-container">
        <p className="validation-details-field">
          <span className="validation-details-label">Name:</span>{' '}
          {userDetails.name}
        </p>
        <p className="validation-details-field">
          <span className="validation-details-label">Email:</span>{' '}
          {userDetails.email}
        </p>
        <p className="validation-details-field">
          <span className="validation-details-label">Mobile Number:</span>{' '}
          {userDetails.phnumber}
        </p>
        <p className="validation-details-field">
          <span className="validation-details-label">Address:</span>{' '}
          {userDetails.location}
        </p>

      </div>
    </div>
  );
};

export default ValidationDetailsPage;