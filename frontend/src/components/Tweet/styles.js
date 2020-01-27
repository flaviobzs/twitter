import styled from 'styled-components';

export const Container = styled.li`
  padding: 20px 20px 0;
  margin: 20px 0 0;
  border-top: 1px solid #eee;

  :first-child {
    margin-top: 0;
    padding-top: 0;
    border: 0;
  }
  p {
    margin: 15px 0;
    font-size: 14px;
    line-height: 20px;
  }

  button {
    border: 0;
    background: transparent;

    display: flex;
    align-items: center;
    color: #697882;
    cursor: pointer;

    img {
      margin-right: 5px;
    }

    :hover {
      opacity: 0.7;
    }
  }
`;
