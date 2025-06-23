import { useState } from 'react';
import './App.css';

import UpdateStatusForm from './components/UpdateStatusForm';
import GetStatusForm from './components/GetStatusForm';
import ArchiveList from './components/ArchiveList';

function App() {
  const [apiResponse, setApiResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [archiveList, setArchiveList] = useState([]);
  

  const handleUpdateSubmit = async (flightId, newStatus) => {
    setIsLoading(true);
    setApiResponse(null);
    setError(null);

    const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/update-status`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ flightId, newStatus }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to update status.');
      setApiResponse(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetStatusSubmit = async (flightId) => {
    setIsLoading(true);
    setApiResponse(null);
    setError(null);

    const fullUrl = `${import.meta.env.VITE_API_BASE_URL}/status/${flightId}`;

    try {
      const response = await fetch(fullUrl);
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to get status.');
      setApiResponse(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFetchArchive = async () => {
    setIsLoading(true);
    setApiResponse(null);
    setArchiveList([]);
    setError(null);

    const archiveUrl = `${import.meta.env.VITE_API_BASE_URL}/archive`;

    try {
      const response = await fetch(archiveUrl);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch archive.');
      }
      setArchiveList(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="container">
      <header>
        <h1>Flight Status Broadcaster</h1>
        <p>A full-stack, event-driven serverless application.</p>
      </header>

      <UpdateStatusForm onUpdate={handleUpdateSubmit} isLoading={isLoading} />
      
      <GetStatusForm onGetStatus={handleGetStatusSubmit} isLoading={isLoading} />

      <ArchiveList 
        archiveList={archiveList} 
        onFetchArchive={handleFetchArchive} 
        isLoading={isLoading} 
      />
      
      <div className="response-area">
        {apiResponse && <h2>API Response</h2>}
        {isLoading && <p>Loading...</p>}
        {error && <div className="error-message">Error: {error}</div>}
        {apiResponse && (
          <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
        )}
      </div>
    </div>
  );
}

export default App;