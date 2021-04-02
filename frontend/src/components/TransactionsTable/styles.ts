import styled from 'styled-components'

export const Container = styled.div`
  overflow-x: auto;

  table {
    width: 100%;

    border-spacing: 0 0.5rem;

    th,
    td {
      width: 100%;
    }

    th {
      padding: 1rem 2rem;

      text-align: left;

      color: var(--text-body);

      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;

      border: 0;

      background: var(--shape);

      color: var(--text-body);

      border-radius: 0.25rem;

      white-space: nowrap;

      button {
        display: inline-block;

        background: transparent;

        border: none;

        font-size: 0;

        & + button {
          margin-left: 1rem;
        }
      }

      &:first-child {
        color: var(--text-title);
      }

      &:last-child {
        text-align: center;
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`

export const TableIsEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 300px;

    margin-right: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: var(--text-body);
  }
`
