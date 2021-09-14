import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 165px 60px;
  align-self: center;
`;

export const Title = styled.h1`
  color: #fff;
  max-width: 800px;
  font-size: 64px;
  font-weight: 700;
  margin: auto;

  @media (max-width: 1450px) {
    font-size: 50px;
  }

  @media (max-width: 550px) {
    font-size: 28px;
  }
`;

export const SubTitle = styled.h2`
  color: #fff;
  font-size: 26px;
  margin: 16px auto;
  font-weight: 400;

  @media (max-width: 550px) {
    font-size: 18px;
  }
`;
