import { useState, useEffect } from "react";
import {Candidate} from "../interfaces/Candidate.interface";

const SavedCandidates: React.FC = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const storedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setSavedCandidates(storedCandidates);
  }, []);
  
  // Filter out the candidate to be removed and update local storage
  const handleRemove = (username: string) => {
    const updatedCandidates = savedCandidates.filter(candidate => candidate.username !== username); 
    setSavedCandidates(updatedCandidates); 
    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates)); 
  };  

  return (
    <div className="saved-candidates-page">
      <h1>Saved Candidates</h1>
      {savedCandidates.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>Bio</th>
              <th>Remove</th> {/* New column for the remove button */}
            </tr>
          </thead>
          <tbody>
            {savedCandidates.map((candidate, index) => (
              <tr key={index}>
                <td>
                  <img src={candidate.avatar_url} alt={`${candidate.name}'s avatar`} />
                </td>
                <td>{candidate.name}</td>
                <td>{candidate.location || 'N/A'}</td>
                <td><a href={`mailto:${candidate.email}`}>{candidate.email || 'N/A'}</a></td>
                <td>{candidate.company || 'N/A'}</td>
                <td>{candidate.bio || 'No bio available.'}</td>
                <td>
                  <button onClick={() => handleRemove(candidate.username)} className="remove-button">-</button> {/* Remove button */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No saved candidates yet.</p>
      )}
    </div>
  );
};
export default SavedCandidates;