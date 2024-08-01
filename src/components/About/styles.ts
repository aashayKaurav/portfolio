import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'Open Sans', sans-serif; /* Use a more readable font */


  .hard-skills {
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
    justify-content: center;
  }
  
  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 3.4rem;
    }
  }

  h2 {
    display: inline-block;
    margin-bottom: 2rem;
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

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
      img {
        margin-top: 2rem;
        width: 80%; /* Adjusted width for smaller screens */
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover {
          filter: grayscale(0);
        }
      }
    }
  }

  @media (max-width: 960px) {
    .about-content {
      display: block; /* Stack the content vertically on smaller screens */
      text-align: center;
    }

    .hard-skills {
      justify-content: center;
    }

    .about-image {
      display: flex;
      justify-content: center; /* Center the image horizontally */
      max-width: 100%;
      img {
        margin-top: 2rem;
        width: 80%; /* Adjusted width for smaller screens */
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover {
          filter: grayscale(0);
        }
      }
    }
  }
`;
