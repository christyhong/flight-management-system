import { useState } from "react";

function GetStatusForm({ onGetStatus, isLoading }) {
  const [getStatusFlightId, setGetStatusFlightId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onGetStatus(getStatusFlightId);
  };

  return (
    <form className="get-form" onSubmit={handleSubmit}>
      <h2>Get Single Flight Status</h2>
      <div className="form-group">
        <label htmlFor="getStatusFlightId">Flight ID</label>
        <select
          id="getStatusFlightId"
          value={getStatusFlightId}
          onChange={(e) => setGetStatusFlightId(e.target.value)}
        >
          <option value="" disabled selected>
            Select flight
          </option>
          <option value="UA456">UA456</option>
          <option value="DL789">DL789</option>
          <option value="AA123">AA123</option>
          <option value="SWA123">SWA123</option>
          <option value="ML472">ML472</option>
        </select>
      </div>
      <button type="submit" className="submit-btn" disabled={isLoading}>
        {isLoading ? "Fetching..." : "Get Status"}
      </button>
    </form>
  );
}

export default GetStatusForm;
