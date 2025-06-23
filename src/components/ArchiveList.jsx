function ArchiveList({ archiveList, onFetchArchive, isLoading }) {
  return (
    <div className="archive-section">
      <h2>Recent Status Change History</h2>
      <p>Click the button to see the last 10 status change events.</p>
      <button className="submit-btn" onClick={onFetchArchive} disabled={isLoading}>
        {isLoading ? 'Fetching...' : 'Fetch Recent Changes'}
      </button>
      {archiveList.length > 0 && (
        <ul>
          {archiveList.map((file) => (
            <li key={file.fileName}>
              <strong>File:</strong> {file.fileName.replace('archive/', '')}
              <br />
              <span>
                <strong>Date:</strong> {new Date(file.lastModified).toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ArchiveList;