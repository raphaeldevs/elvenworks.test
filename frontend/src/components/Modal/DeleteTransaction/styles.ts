import styled from 'styled-components'

import { darken } from 'polished'

interface ActionButtonProps {
  color: 'green' | 'red'
}

const colors = {
  green: '#33CC95',
  red: '#E52E4D'
}

export const Container = styled.form`
  max-width: 100%;

  h2 {
    margin-bottom: 2rem;

    color: var(--text-title);
    font-size: 1.5rem;
  }
`

export const ActionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  align-items: center;

  gap: 0.5rem;
`

export const Button = styled.button<ActionButtonProps>`
  width: 100%;
  height: 3rem;

  margin-top: 1rem;

  background: ${props => colors[props.color]};

  border: 0;
  border-radius: 0.25rem;

  color: #fff;

  font-size: 1rem;
  font-weight: 600;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`

export const Field = styled.span`
  h5 {
    color: ${darken(0.15, '#969CB2')};

    font-weight: 400;
  }

  span {
    display: flex;
    align-items: center;

    color: var(--text-title);

    &.withdraw {
      color: var(--red);
    }

    &.deposit {
      color: var(--green);
    }

    font-size: 1.1rem;

    img {
      width: 1.5rem;
      height: 1.5rem;

      margin-right: 0.5rem;
    }
  }
`

export const FieldGroup = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(2, 1fr);

  gap: 2rem;

  margin: 3rem 0 1rem;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`
