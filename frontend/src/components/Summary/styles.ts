import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 2rem;

  transform: translateY(-50%);

  overflow-x: auto;

  div {
    padding: 1.5rem 2rem;

    border-radius: 0.25rem;

    color: var(--text-title);

    background: var(--shape);

    &.highlight-background {
      background: var(--green);

      color: #fff;
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;

      margin-top: 1rem;

      font-weight: 500;
      font-size: 2rem;

      line-height: 3rem;

      white-space: nowrap;
    }
  }

  @media (max-width: 280px) {
    grid-template-columns: repeat(3, 100%);
  }
`
