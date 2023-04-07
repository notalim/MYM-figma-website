import styled from "styled-components";

export const LeftSectionContainer = styled.div`
    background-color: #f8f8f8;
    padding: 20px;
    width: 29%;
    height: 100vh;
`;

export const Icon = styled.img`
    width: 12px;
    height: 12px;
    margin-right: 4px;
`;

export const DashboardTitle = styled.h1`
    font-family: "Sulphur Point", sans-serif;
    font-weight: 700;
    font-size: 36px;
    line-height: 30px;
    color: #131313;
    margin-bottom: 80px;
`;

export const StatContainer = styled.div`
    gap: 20px;
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

export const StatWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
`;

export const StatLabel = styled.p`
    font-family: "Sulphur Point", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 16px;
    color: #94979a;
`;

export const StatValue = styled.p`
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    font-size: 28px;
    line-height: 25px;
    color: #131313;
    margin-bottom: 4px;
`;

export const StatChangeBox = styled.div`
    background: #ddf6de;
    border-radius: 8px;
    padding: 4px 8px;
`;

export const StatChange = styled.span`
    font-family: "Sulphur Point", sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    color: #608662;
`;

export const Divider = styled.hr`
    width: 80%;
    margin: 0 auto;
    border: 1px solid #e5e5e5;
    margin-bottom: 10px;
`;

export const Img = styled.img``;

export const LegendContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;
`;

export const LegendItem = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: "Sulphur Point";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 30px;
    display: flex;
    align-items: center;
`;

export const LegendSquare = styled.div`
    width: 14px;
    height: 14px;
    border-radius: 5px;
`;
