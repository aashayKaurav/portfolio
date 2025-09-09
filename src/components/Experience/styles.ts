import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  font-family: 'Open Sans', sans-serif;

  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 4rem;
    color: var(--green);
  }

  .timeline {
    position: relative;
    margin: 0 auto;
    padding: 2rem 0;
    width: 90%;
  }

  /* Vertical line */
  .timeline::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 3px;
    background: #ccc;
    transform: translateX(-50%);
  }

  .timeline-item {
    position: relative;
    width: 50%;
    padding: 1.5rem 2rem;
  }

  .timeline-item.left {
    left: 0;
    text-align: right;
  }

  .timeline-item.right {
    left: 50%;
    text-align: left;
  }

  .timeline-item::before {
    content: "";
    position: absolute;
    top: 25px;
    width: 18px;
    height: 18px;
    background: var(--green);
    border-radius: 50%;
    z-index: 1;
  }

  .timeline-item.left::before {
    right: -11px;
  }

  .timeline-item.right::before {
    left: -11px;
  }

  .timeline-item .content {
    padding: 1rem;
  }

  .company {
    display: block;
    font-size: 1.4rem;
    color: #666;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.6rem;
    line-height: 1.8;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .timeline::before {
      left: 20px;
    }

    .timeline-item {
      width: 100%;
      padding-left: 3.5rem;
      text-align: left !important;
    }

    .timeline-item.left, 
    .timeline-item.right {
      left: 0;
    }

    .timeline-item::before {
      left: 0;
    }

    .timeline-item .content {
      max-width: 100%;
    }
  }
`;
