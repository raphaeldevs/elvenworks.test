import styled from 'styled-components'

export const Container = styled.header`
  background: var(--primary);
`

export const Content = styled.div`
  max-width: 1120px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding: 2rem 1rem 10rem;

  img {
    width: 40%;
  }

  button {
    height: 3rem;

    padding: 0 1rem;

    font-size: 1rem;

    color: #fff;

    background: var(--primary-light);

    border: 0;
    border-radius: 0.25rem;

    transition: filter 0.3s ease;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (min-width: 600px) {
    img {
      width: auto;
    }

    button {
      padding: 0 2rem;
    }
  }

  @media (max-width: 280px) {
    flex-direction: column;

    padding-bottom: 6rem;

    img {
      width: 100%;
    }

    button {
      width: 100%;

      margin-top: 1rem;
    }
  }
`
