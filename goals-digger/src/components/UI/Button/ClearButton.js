import styled from 'styled-components';

const ClearButton = styled.button`
    font: inherit;
    padding: 0.5rem 1.5rem;
    border: 1px solid #eb7ab2;
    color: white;
    background: #eb7ab2;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
    cursor: pointer;

    &:focus {
        outline: none;
    }

    &:hover,
    &:active {
        background: #ac0e77;
        border-color: #ac0e77;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
    }
`;

export default ClearButton;
