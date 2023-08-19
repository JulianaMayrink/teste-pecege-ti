import styled, { css } from 'styled-components';

const ButtonComponent = ({ onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default ButtonComponent;

const Button = styled.button`
  border: none;
  cursor: pointer;
  padding: 8px 25px;
  border-radius: 8px;

  /* ${({ theme: { colors } }) => css`
    font-size: 16px;
    background-image: linear-gradient(
      to right,
      ${colors.primary},
      ${colors.secondary},
      ${colors.primary}
    );
    background-size: 200% 100%;
    background-position: left center;

    &:hover {
      font-weight: bold;
      background-position: right center;
    } */
  `}/* ${({ disabled }) =>
    disabled &&
    css`
      cursor: no-drop;

      ${({ theme: { colors } }) => css`
        background-image: linear-gradient(
          to right,
          ${colors.auxiliary.gray},
          ${colors.auxiliary.white},
          ${colors.auxiliary.gray}
        );

        &:hover {
          font-weight: normal;
          background-position: left center;
        }
      `}
    `};

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}; */
`;
