import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  padding: 50px 0 0 0;
  margin: auto;
  max-width: 800px;
  flex-direction: column;

  @media (max-width: 950px) {
    padding: 70px 30px;
    max-width: 500px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 28%) 15%;
  grip-gap: 15px;

  @media (max-width: 950px) {
    grid-template-columns: repeat(auto-fill, 70%) 30%;
  }

  @media (max-width: 445px) {
    grid-template-columns: repeat(auto-fill, 100%);
  }
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: none;
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Break = styled.p`
  flex-basis: 100%;
  height: 0;
`;
