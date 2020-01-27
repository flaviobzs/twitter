import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import twitterLogo from '../../assets/twitter.svg';

import Tweet from '../../components/Tweet';

import { TimelineWrapper } from './styles';

export default function Timeline() {
  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState('');

  useEffect(() => {
    async function loadTweets() {
      const response = await api.get('/tweets');

      setTweets(response.data);
    }

    loadTweets();
  }, [tweets]);

  async function handleNewTweet(e) {
    if (e.keyCode !== 13) return;

    const content = newTweet;

    const author = localStorage.getItem('@GoTwitter:username');

    await api.post('tweets', { content, author });

    setNewTweet('');
  }

  return (
    <TimelineWrapper>
      <img src={twitterLogo} alt="GoTwitter" />

      <form>
        <textarea
          value={newTweet}
          onChange={e => setNewTweet(e.target.value)}
          onKeyDown={e => handleNewTweet(e)}
          placeholder="O que está acontecendo?"
        ></textarea>
      </form>

      <ul className="tweet-list">
        {tweets.map(tweet => (
          <Tweet key={tweet._id} tweet={tweet} />
        ))}
      </ul>
    </TimelineWrapper>
  );
}
