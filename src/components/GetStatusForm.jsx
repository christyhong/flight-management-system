import { useState } from 'react';

function GetStatusForm({ onGetStatus, isLoading }) {
  const [getStatusFlightId, setGetStatusFlightId] = useState('SWA123');

  const handleSubmit = (e) => {
    e.preventDefault();
    onGetStatus(getStatusFlightId);
  };

  return (
    <form className="get-form" onSubmit={handleSubmit}>
      <h2>Get Single Flight Status</h2>
      <div className="form-group">
        <label htmlFor="getStatusFlightId">Flight ID</label>
        <input
          type="text"
          id="getStatusFlightId"
          value={getStatusFlightId}
          onChange={(e) => setGetStatusFlightId(e.target.value)}
        />
      </div>
      <button type="submit" className="submit-btn" disabled={isLoading}>
        {isLoading ? 'Fetching...' : 'Get Status'}
      </button>
    </form>
  );
}

export default GetStatusForm;