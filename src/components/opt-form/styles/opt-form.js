import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  max-width: 500px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;

  @media (max-width: 1450px) {
    max-width: 450px;
    height: 60px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  background: #e50914;
  color: #fff;
  padding: 0 32px;
  font-size: 30px;
  font-weight: 400;
  border: 0;
  cursor: pointer;

  &:hover {
    background: #f40612;
  }

  img {
    margin-left: 15px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 950px) {
      width: 16px;
    }
  }

  @media (max-width: 1450px) {
    max-width: 215px;
    height: 60px;
    font-size: 22.5px;
  }

  @media (max-width: 950px) {
    height: 40px;
    max-width: 180px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: 500;
  }

  @media (max-width: 350px) {
    font-size: 14px;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  color: #fff;
  text-align: center;

  @media (max-width: 950px) {
    font-size: 23px;
    line-height: 22px;
  }

  @media (max-width: 350px) {
    margin-top: 0;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
