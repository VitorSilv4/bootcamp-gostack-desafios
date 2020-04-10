import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 120px;
  margin-top: 20px;

   ul {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
    list-style: none;
  }

  ul li {
    background: #fff;
    padding: 12px;
    border-radius: 8px;
    position: relative;
  }
  
 ul li button {
    position: absolute;
    right: 0px;
    top: 0px;
    border: 0;
    background: transparent;
  }

  ul li button:hover {
    opacity: 0.8;
  }

  ul li strong {
    display: block;
    font-size: 10px;
    color: #7159c1;
  }

  ul li p + strong {
    margin-top: 12px;
  }

  ul li p {
    color: #737380;
    line-height: 21px;
    font-size: 10px;
  }

  ul li ul {
    width: 100%;
    top: 0;
    margin-left: -10px;
    display: flex;
    justify-content: flex-start;
  }

  ul li ul li {
    color: #737380;
    font-size: 10px;
  }
`;
