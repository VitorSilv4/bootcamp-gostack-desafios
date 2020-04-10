import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background: #f0f0f5;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  
   form {
    width: 100% !important;
    display: flex;
    flex-direction: column;
    padding: 20px;
    max-width: 1020px;
  }

  form input {
    margin-top: 8px;
    width: 100%;
  }

  form button {
    width: 100%;
    height: 50px;
    background: #7159c1;
    border-radius: 8px;
    font-weight: 700;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    transition: filter 0.2s;
  }
`;
