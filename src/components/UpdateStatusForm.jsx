import { useState } from 'react';

function UpdateStatusForm({ onUpdate, isLoading }) {
  const [flightId, setFlightId] = useState('SWA123');
  const [newStatus, setNewStatus] = useState('DELAYED');

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(flightId, newStatus);
  };

  return (
    <form className="update-form" onSubmit={handleSubmit}>
      <h2>Update Flight Status</h2>
      <div className="form-group">
        <label htmlFor="flightId">Flight ID</label>
        <input
          type="text"
          id="flightId"
          value={flightId}
          onChange={(e) => setFlightId(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="newStatus">New Status</label>
        <select
          id="newStatus"
          value={newStatus}
          onChange={(e) => setNewStatus(e.target.value)}
        >
          <option value="ON TIME">ON TIME</option>
          <option value="DELAYED">DELAYED</option>
          <option value="GROUNDED">GROUNDED</option>
          <option value="IN FLIGHT">IN FLIGHT</option>
          <option value="LANDED">LANDED</option>
        </select>
      </div>
      <button type="submit" className="submit-btn" disabled={isLoading}>
        {isLoading ? 'Updating...' : 'Update Flight Status'}
      </button>
    </form>
  );
}

export default UpdateStatusForm;