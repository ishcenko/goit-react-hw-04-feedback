import styled from 'styled-components';

export const Container = styled.div`
  width: 450px;
  min-height: 500px;
  border-radius: 25px;
  background-image: linear-gradient(
    36deg,
    hsla(4, 74%, 86%, 0.5) 10%,
    #b0f8c6 30%,
    #ade4f8 45%,
    #f8dfa0
  );
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  border: 1px solid black;
  padding: 50px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 50px;
`;
