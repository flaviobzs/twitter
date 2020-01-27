import React, { useState } from 'react';

import { Container } from './styles';

import twitterLogo from '../../assets/twitter.svg';

export default function Login({ history }) {
  const [username, setUsername] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    if (!username.length) return;

    localStorage.setItem('@GoTwitter:username', username);

    history.push('/timeline');
  }

  return (
    <Container>
      <img src={twitterLogo} alt="GoTwitter" />
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Nome de usuário"
        />
        <button type="submit">Entrar</button>
      </form>
    </Container>
  );
}
