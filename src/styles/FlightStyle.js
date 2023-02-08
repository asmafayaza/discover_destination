import styled from "styled-components";
import { media } from "./Media";

export const ListWrapper = styled.div`
    width: -webkit-fill-available;
    width: -moz-available;
    overflow-y: scroll;
    height: 500px;
    padding: 2rem;
    border-radius: 4px;
    ${media.md`margin: 10px;`};
    ${media.xs`height: auto; overflow-y: initial;`};

    .flight-card {
        display: flex;
        padding: 1rem;
        background-color: white;
        margin-bottom: 2rem;
    }

    .arrival-date {
        padding: 1.6rem;
        margin-left: auto;
    }
    .emptyState {
        color: #000000;
        font-size: 15px;
        margin-top: 60px;
        margin-bottom: 2rem;
        ${media.xs`margin: 34px 0px;`};
        display: block;
        width: 100%;
        text-align: center;
        line-height: 20px;
    }
`;
export const FlightResult = styled.div`
    display: flex;
    ${media.xs`flex-direction: column; padding: 10px;`};
    padding: 20px;
    flex-direction: row;
    width: 60%;
    margin: auto;
    margin-bottom: 7rem;

    @media (max-width: 768px) {
        width: 100%;
    }

    ${media.md`padding: 10px;`};
    .header {
        color: #000000;
        font-size: 18px;
        padding-bottom: 1rem;
        ${media.md`font-size: 16px;`};
        text-align: center;
    }

    .fullWidth {
        width: -webkit-fill-available;
        width: -moz-available;
        border: 1px solid #999;
        border-radius: 4px;
        padding: 1rem;
        background-color: #12baba;
    }
`;
export const EachFlight = styled.li`
    padding: 0 10px;
    margin: 0;
    color: #000000;
    font-size: 15px;

    ${media.sm`font-size: 14px;`};
    .meta-data {
        margin: 10px 0px;
    }

    .title {
        color: #000000;
        margin-right: 10px;
    }

    .bookAction {
        border: none;
        border-radius: 4px;
        background: cadetblue;
        color: #fff;
        text-transform: uppercase;
        padding: 1rem 3rem;
    }
`;
