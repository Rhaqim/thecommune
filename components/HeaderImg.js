import styled from '@emotion/styled'

const HeaderImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 10%;
    height: 10%;
    z-index: -1;
    object-fit: cover;
    object-position: center;
    filter: brightness(0.5);
    transition: all 0.5s ease-in-out;
    opacity: 0;
    transform: translateY(20px);
    &.show {
        opacity: 1;
        transform: translateY(0);
    }
`

export default HeaderImg