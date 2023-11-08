import React, { useState, useEffect } from 'react';

function GithubInfo({ username }) {
  const [userData, setUserData] = useState(null);
  const [userRepos, setUserRepos] = useState([]);
  const [displayedName, setDisplayedName] = useState('');
  const [displayedBio, setDisplayedBio] = useState('');

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(setUserData)
      .catch(console.error);

    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(setUserRepos)
      .catch(console.error);
  }, [username]);

  useEffect(() => {
    if (userData) {
      const nameInterval = setInterval(() => {
        if (displayedName.length < userData.name.length) {
          setDisplayedName(userData.name.slice(0, displayedName.length + 1));
        } else {
          clearInterval(nameInterval);
        }
      }, 50); // adjust speed as needed

      const bioInterval = setInterval(() => {
        if (displayedBio.length < userData.bio.length) {
          setDisplayedBio(userData.bio.slice(0, displayedBio.length + 1));
        } else {
          clearInterval(bioInterval);
        }
      }, 50); // adjust speed as needed

      return () => {
        clearInterval(nameInterval);
        clearInterval(bioInterval);
      };
    }
  }, [userData, displayedName, displayedBio]);

  if (!userData) return <div>Loading...</div>;

  return (
    <div>
      <h1 className='glow'>{displayedName}</h1>
      <p className='glow'>{displayedBio}</p>
    </div>
  );
};

export default GithubInfo;