import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: white;
  color: black;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  color: darkviolet;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 800px;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Section = styled.section`
  width: 100%;
  max-width: 800px;
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: darkviolet;
  margin-bottom: 1rem;
  text-align: left;
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #333;
`;

export const Quote = styled.blockquote`
  font-size: 1.2rem;
  font-style: italic;
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  border-left: 4px solid darkviolet;
  color: #555;
  background-color: #f9f9f9;
  padding: 10px 15px;
  border-radius: 5px;
`;

export const QuoteAuthor = styled.cite`
  display: block;
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: violet;
  text-align: right;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;

  img {
    width: 100%;
    max-width: 800px;
    height: auto;
    border-radius: 10px;
  }
`;
