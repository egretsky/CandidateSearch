import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import {Candidate} from "../interfaces/Candidate.interface";
import CandidateCard from "../components/GitCandidateCard";

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]); 
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [candidate, setCandidate] = useState<Candidate>();


useEffect(() => {
  // fetch random gh users
  const fetchData = async () => {
    
    const data = await searchGithub(); 
    setCandidates(data); 
    const githubUser = await searchGithubUser(data[currentIndex].login);
    console.log(githubUser)
    setCandidate({name:githubUser.name, username:githubUser.login, location: githubUser.location, avatar_url: githubUser.avatar_url, email: githubUser.email, bio: githubUser.bio, company: githubUser.company })
  };
  fetchData(); 
}, [currentIndex]); 

//Add current candidate to the saved list and add to localStorage
const handleSave = async () => {
  if (candidate) {
    const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    savedCandidates.push(candidate); 
    localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates)); 

    // Got to next candidate
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
    if (nextIndex < candidates.length) {
      const githubUser = await searchGithubUser(candidates[nextIndex].username);
      setCandidate({
        name: githubUser.name,
        username: githubUser.login,
        location: githubUser.location,
        avatar_url: githubUser.avatar_url,
        email: githubUser.email,
        bio: githubUser.bio,
        company: githubUser.company,
      });
    } else {
      setCandidate(undefined); 
    }
  }
};

// Move to the next candidate without saving
const handleSkip = () => {
  setCurrentIndex(currentIndex + 1); 
};

if (candidates.length === 0) {
  return <p>Loading candidates...</p>; 
}

return (
  <div>
    {candidate ? (
      <CandidateCard
        candidate={candidate} 
        onSave={handleSave} 
        onSkip={handleSkip} 
      />
    ) : (
      <p>No more candidates available.</p> 
    )}
  </div>
);
};

export default CandidateSearch;