import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F2F5;
    --shape: #FFFFFF;
    --red: #E52E4D;
    --primary: #6CAE76;
    --primary-light: #62e977;
    --green: #33CC95;
    --text-title: #363F5F;
    --text-body: #7A7A7A;
    --input-background: #e7e9ee;
    --input-border-color: #d7d7d7;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%
    }

    @media (max-width: 720px) {
      font-size: 87.5%
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;

  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    
    cursor: not-allowed;
  }

  .react-modal-overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0, 0.5)
  }

  .react-modal-content {
    max-width: 576px;
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding: 3rem;

    background: var(--background);

    border-radius: 0.25rem;

    position: relative;

    animation: openModal .3s ease-out forwards;

    @keyframes openModal {
      from {
        opacity: 0;
        transform: translateY(25%)
      } 
      
      to {
        opacity: 1;
        transform: translateY(0%)
      }
    }
  }

  .react-modal-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;

    border: 0;
    background: transparent;

    transition: filter .3s ease;

    &:hover {
      filter: brightness(0.8);
    }
  }

  @media (max-width: 600px) {
    .react-modal-content {
      max-width: 90%;
    }
  }
`
