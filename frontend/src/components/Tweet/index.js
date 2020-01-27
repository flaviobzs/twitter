import React from 'react';

import api from '../../services/api';

import { Container } from './styles';

import like from '../../assets/like.svg';

export default function Tweet({ tweet }) {
  async function handleLike(_id) {
    await api.post(`likes/${_id}`);
  }

  return (
    <Container>
      <strong>{tweet.author}</strong>
      <p>{tweet.content}</p>
      <button type="button" onClick={() => handleLike(tweet._id)}>
        <img src={like} alt="Like" />
        {tweet.likes}
      </button>
    </Container>
  );
}
