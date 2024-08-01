import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0,0,0,0);
  .hero-text{
    & > p{
      font-size: 1.8rem;
    }
    h1{
      font-size: 7rem;
    }

    h3{
      color:var(--green);
      margin: 1rem 0;
    }

    
    p.small-resume {
      margin-bottom: 5rem;
    }
  }

  .social-media{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top:5rem;
    padding-left:1rem;

    img,span{
      font-size: 3rem;
      width: 3.5rem;
    }
  }


  .buttons {
    display: flex;
    gap: 2rem; /* Add space between buttons */
    margin-top: 5rem;

    .download-button {
      padding: 1.4rem 4rem;
      text-decoration: none;
      color: #fff;
      background-color: var(--green);
      border-radius: 5rem;
    }

    .contact-button {
      padding: 1.4rem 4rem;
      text-decoration: none;
      color: #fff;
      background-color: var(--green);
      border-radius: 5rem;
    }

    .button {
      padding: 1.4rem 4rem;
      text-decoration: none;
      color: #fff;
      background-color: var(--green);
      border-radius: 5rem;
      transition: background-color 0.3s, transform 0.3s;

      &:hover {
        background-color: var(--dark-green);
        transform: translateY(-2px); /* Slight lift effect */
      }
    }
  }

  .hero-image{
    img{
      max-width: 500px;
    }
  }


  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    .hero-text{

      h1{
        font-size: 5rem;
      }
    }
    
    .hero-image{
      display: none;
    }
  }

  @media(max-width: 600px){
    margin-top: 35%;
  }
  @media(max-width: 480px){
    margin-top: 45%;
  }
`