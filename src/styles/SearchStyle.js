import styled from "styled-components";
import { media } from "./Media";
const color = {
    cadetblue: "#5f9ea0",
    black: "#000000",
};

export const FlightSearch = styled.div`
    width: auto;
    padding-top: 6rem;
    background-image: url(https://lh3.googleusercontent.com/jYFfo8m6rF_pyf8lMN26wpv6Pvh1pDoxo7lPWlji3NF32kU7mSFo-k_or5A70zi4bs1shGWngOmBtKBSUoHQ_jMhKSklTU6VuNryZnhs);
    height: auto;
    padding-bottom: 5rem;
    background-image: url("https://lh3.googleusercontent.com/jYFfo8m6rF_pyf8lMN26wpv6Pvh1pDoxo7lPWlji3NF32kU7mSFo-k_or5A70zi4bs1shGWngOmBtKBSUoHQ_jMhKSklTU6VuNryZnhs");
    ${media.md`margin: 10px;`};
    ${media.xs`margin-bottom: 0px;`};
    height: auto;
    .content-container {
        display: flex;

        @media (max-width: 1608px) {
            flex-direction: column;
        }
    }

    .city-container {
        width: 50%;
    }
    .date-container {
        width: 50%;
        margin-top: 0.5;
        margin-bottom: 0.5rem;
        border-radius: 4px;
    }
    .filter-container {
        display: flex;
    }

    .passenger-button {
        margin-top: 1.5rem;
    }

    .price-button {
        padding-top: 2rem;
        padding-left: 1rem;
    }

    .searchForm {
        background-image: url("../Assets/discover.png");
        ${media.md`padding: 12px 20px;`};
        border-radius: 4px;
        height: auto;
    }

    .radio__container {
        flex-direction: column-reverse;
        display: flex;
    }

    .btn-wrapper {
        display: flex;
        justify-content: center;
        ${media.md`justify-content: flex-end;`};
        ${media.md`margin: 0px;`};
        margin: 26px 0px 10px;
    }

    .search-btn {
        padding: 6px 20px;
        cursor: pointer;
        background: cadetblue;
        color: #fff;
        text-transform: uppercase;
        border: none;
        border-radius: 4px;

        ${media.md`margin-top: 12px; font-size: 12px;`};
    }
`;

export const RadioInputContainer = styled.div`
    padding: 50px 56px 10px;
    display: flex;
    ${media.md`padding: 6px 0px; display: flex`};
    .radioInputTitle {
        flex-direction: column;
        margin: 14px;
        color: ${color.black};
        ${media.md`font-size: 14px;`};
    }

    input[type="radio"] {
        cursor: pointer;
        margin-bottom: 1rem;
    }
`;

export const CityField = styled.div`
    display: flex;
    padding: 10px 0px;
    margin-left: 4rem;
    flex-direction: column;
    ${media.md`flex-direction: column; padding: 2px 0px;`};

    .container {
        margin-right: 10px;
        ${media.md`margin-bottom: 10px;`};
    }
    .cityInput {
        padding: 10px;
        font-size: 16px;
        margin-top: 1rem;
        margin-bottom: 1rem;
        width: 700px;
        ${media.md`font-size: 14px; padding: 8px;`};
        border: none;
        color: #000000;
        border-radius: 4px;
    }

    .city-list {
        padding: 0px;
        margin: 0px;
        position: absolute;
        z-index: 999;
        width: 221px;
        ${media.md`width: 195px;`};
    }

    .city-item {
        margin: 0;
        padding: 10px 12px;
        background: #efdcc4;
        font-size: 15px;
        color: #666;
        cursor: pointer;
    }

    .emptyMsg {
        padding: 20px;
        background: #efdcc4;
        font-size: 15px;
        ${media.md`font-size: 13px;`};
        color: #666;
    }
`;

export const DateField = styled.div`
    display: flex;
    padding: 10px 0;
    ${media.md`flex-direction: column; padding: 2px 0px;`};
    .wrapper {
        margin-right: 32px;
        ${media.md`margin-right: 20px;`};
    }
    .title {
        color: #000000;
        margin-bottom: 6px;
        ${media.md`margin-bottom: 6px; font-size: 14px;`};
        display: inline-block;
        padding-bottom: 0.7rem;
    }
    .inputDate {
        padding: 6px;
        border: none;
        border-radius: 4px;
        color: #000000;
        cursor: pointer;
        margin-bottom: 10px;
        border: none;
        border-radius: 4px;
        color: #000000;
        cursor: pointer;
        font-size: 16px;
        width: 350px;
        padding: 10px;
        font-size: 16px;
        margin-bottom: 0;
        ${media.md`margin-bottom: 8px;`};
    }
`;

export const ActionButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    ${media.md`padding: 0;`};
    font-size: 15px;
    color: #000000;

    .title {
        color: #000000;
        display: inline-block;
    }
    .button {
        margin: 0px 10px;
        border: none;
        border-radius: 4px;
        width: 20px;
        height: 20px;
        cursor: pointer;
        background: cadetblue;
        color: #fff;
        text-transform: uppercase;
    }

    button:disabled {
        background: #d3e4d8;
        cursor: not-allowed;
    }
`;

export const PriceFilter = styled.div`
    display: flex;
    ${media.md`flex-direction: column; margin-bottom: 10px;`};
    padding: 0 20px;
    .title {
        color: #000000;
        margin-right: 30px;
        ${media.md`margin-bottom: 30px; font-size: 14px;`};
        display: inline-block;
    }
    .input-range {
        width: 150px !important;
        display: flex;
        flex-direction: column;

        ${media.md`  margin: 2rem 0.6rem;`};
    }

    .price-range__label {
        margin-bottom: 30px;
        font-size: 15px;
        color: #000;
        font-weight: bolder;
    }

    .input-range__label-container {
        color: #000 !important;
        font-weight: bold;
        font-size: 14px;
    }

    .input-range__track {
        background: #ffa335 !important;
    }

    .input-range__track--active {
        background: #3f51b5 !important;
    }
`;
