import styled from "styled-components";

export const Button = styled.button`
background-color: var(--blue-400);
color: var(--white);
padding: 1rem 2rem;
border-radius: 2rem;
font-size: 1.5rem;
transition: filter 200ms ease-in;

&:hover {
  filter: brightness(0.9);
}

@media (max-width: 1180px) {
  display: none;
}
`;