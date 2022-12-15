import styled from "styled-components";

export const ContainerHeader = styled.div`
    position: fixed;
    width: 376px;
    left: calc(50% - 188px);
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;

    a{
        text-decoration: none;
    }
    h1{
        font-family: 'Playball', cursive;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color: white;
    }
    img{
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }

    `