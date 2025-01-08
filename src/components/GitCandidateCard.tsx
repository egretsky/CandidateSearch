import React from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

interface CandidateCardProps {
  candidate: Candidate;
  onSave: () => void;
  onSkip: () => void;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate, onSave, onSkip }) => {
    console.log(candidate)
  return (
    <div className="candidate-card">
      <img src={candidate.avatar_url} alt={`${candidate.name}'s avatar`} className="candidate-avatar" />
      <div className="candidate-info">
        <h2>Name:{candidate.name}</h2>
        <p>Username: {candidate.username}</p>
        <p>Location: {candidate.location || 'N/A'}</p>
        <p>Email: <a href={`mailto:${candidate.email}`}>{candidate.email || 'N/A'}</a></p>
        <p>Company: {candidate.company || 'N/A'}</p>
        <p>Bio: {candidate.bio || 'No bio available.'}</p>
      </div>
      <div className="candidate-actions">
        <button onClick={onSkip} className="skip-button">-</button>
        <button onClick={onSave} className="save-button">+</button>
      </div>
    </div>
  );
};

export default CandidateCard;