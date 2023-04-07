import styled from "styled-components";

export const RightSectionContainer = styled.div`
    background-color: #ffffff;
    padding: 20px;
    width: calc(100% - 29%);
    height: 100vh;
`;

export const TopSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

export const SearchInput = styled.div`
    background: #f8f8f8;
    border-radius: 10px;
    width: 332px;
    height: 42px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    position: relative;

    input {
        background: transparent;
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
        padding-left: 5px;
        font-family: "Sulphur Point";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 16px;
        /* identical to box height, or 92% */

        display: flex;
        align-items: center;

        color: #94979a;
    }
`;

export const SearchIcon = styled.img`
    position: absolute;
    right: 10px;
`;

export const NotificationIcon = styled.img`
    background: #f5f5f5;
    border-radius: 50%;
    padding: 10px;
`;

export const UserProfile = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: "Sulphur Point", sans-serif;

    img:first-child {
        border-radius: 50%;
    }
`;

export const CampaignAnalyticsTitle = styled.h2`
    font-family: "Sulphur Point", sans-serif;
    font-weight: 700;
    font-size: 28px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #131313;
    margin-top: 40px;
    margin-bottom: 40px;
    position: relative;
`;

export const DateRange = styled.div`
    width: 187px;
    height: 32px;
    background: rgba(236, 236, 236, 0.5);
    justify-content: space-between;
    padding: 0 10px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    font-family: "Sulphur Point";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    /* identical to box height, or 103% */

    display: flex;
    align-items: center;

    color: #131313;
`;

export const StatContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const StatLabel = styled.p`
    font-family: "Sulphur Point", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #94979a;
    margin-bottom: 10px;
`;

export const StatValue = styled.p`
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    font-size: 28px;
    line-height: 25px;
    display: flex;
    align-items: center;
    color: #131313;
`;

export const GraphContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Graph1 = styled.img``;
export const Graph2 = styled.img``;

export const RecentActivityTitle = styled(CampaignAnalyticsTitle)``;

export const RecentActivityContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const ActivityIcon = styled.img`
    margin-right: 10px;
`;

export const ActivityDescription = styled.p`
    font-family: "Sulphur Point", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 16px;
    color: #131313;
`;
