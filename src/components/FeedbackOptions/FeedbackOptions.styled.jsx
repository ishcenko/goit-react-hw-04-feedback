import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* gap: 10px; */
`;

export const Button = styled.button`
  background: radial-gradient(circle, #fbfb05, #fb94c9);
  border: 1px solid #000;
  border-radius: 8px;
  cursor: pointer;
  display: block;
  font-size: 24px;
  height: 45px;
  margin: 20px auto;
  text-align: center;
  transition: -webkit-transform 1s;
  transition: transform 1s;
  transition: transform 1s, -webkit-transform 1s;
  width: 150px;
  box-shadow: 0 1px 7px rgba(255, 255, 255, 0.3);

  &:hover,
  &:focus {
    background: radial-gradient(circle, #48fa17, #f21c8b);
    color: #fff;
    padding: 10px;
    -webkit-transform: scale(1.25);
    transform: scale(1.25);
  }
`;
