import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'Open Sans', sans-serif; /* Use a more readable font */

  .education-text {
    h2 {
      display: inline-block;
      margin-bottom: 4rem;
      font-size: 4rem; /* Increase the font size */
      margin-top: 0rem;
      color: var(--green);
      line-height: 1.5; /* Add line height for better spacing */
    }

    h3 {
      margin-top: 2rem;
      font-size: 2.5rem; /* Increase the font size */
      color: var(--green);
      line-height: 1.5; /* Add line height for better spacing */
    }

    p {
      font-size: 2rem; /* Increase the font size */
      letter-spacing: 0.1rem;
      font-weight: 500;
      line-height: 1.8; /* Increase line height for better readability */
      max-width: 800px; /* Limit the max width for better readability */
      margin: 0 auto; /* Center the paragraphs */
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.5rem; /* Adjust gap between list items */
      margin: 2rem 0;
      padding: 0;
      list-style: none; /* Remove default list styling */
    }

    li {
      font-size: 1.8rem;
      letter-spacing: 0.1rem;
      font-weight: 500;
      line-height: 2.8rem; /* Increased line height for readability */
      padding: 0 1rem; /* Add horizontal padding for better spacing */
      border: 1px solid var(--green); /* Optional: add border for better visibility */
      border-radius: 0.5rem; /* Optional: add border radius */
    }

    strong {
      font-weight: bold;
    }
  }

  @media (max-width: 960px) {
    .education-text {
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    .education-text {
      text-align: center;
    }
  }
`;
