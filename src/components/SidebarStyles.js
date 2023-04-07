import styled from "styled-components";

export const SidebarContainer = styled.div`
    width: 16.7%;
    height: 100vh;
    background-color: #131313;
    display: flex;
    flex-direction: column;
    padding: 20px;
    font-family: "Sulphur Point", sans-serif;
`;

export const Logo = styled.div`
    color: #f8f8f8;
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 80px;
`;

export const LogoWrapper = styled.div`
    display: flex;
`;

export const MenuItem = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #f8f8f8;
    margin-bottom: 25px;
`;

export const MenuSpacer = styled.div`
    height: 114px;
`;

export const Icon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 10px;
`;

export const TrialBanner = styled.div`
    width: 212px;
    height: 281px;
    border: 1px solid;
    border-radius: 24px;
    border-image: linear-gradient(90deg, #d4d4fc, #f8f8f8) 1;
    padding: 20px;
    font-family: "Roboto", sans-serif;
    font-weight: 800;
    font-size: 16px;
    color: #f8f8f8;
    margin-top: 20px;
    margin-bottom: 20px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    background-clip: padding-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
`;

export const TrialText = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: ${(props) =>
        props.desc ? "Sulphur Point, sans-serif" : "Roboto, sans-serif"};
    font-weight: ${(props) => (props.large ? 800 : 400)};
    font-size: ${(props) => (props.large ? 24 : 12)}px;
    line-height: ${(props) => (props.large ? 25 : 14)}px;
    color: ${(props) => (props.large ? "#f8f8f8" : "#d4d4fc")};
    margin: 5px 0;
`;

export const TrialTextTop = styled.p`
    font-family: "Roboto", sans-serif;
    line-height: 28px;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    color: #f8f8f8;
`;

export const UpgradeButton = styled.button`
    background: rgba(212, 212, 252, 0.12);
    border: 1px solid #d4d4fc;
    border-radius: 10px;
    padding: 8px 16px;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 14px;
    color: #ffffff;
    cursor: pointer;
    transition: 0.3s;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    &:hover {
        opacity: 0.8;
    }
    width: 170px;
    height: 40px;
`;

export const LogoutButton = styled.button`
    font-family: "Sulphur Point", sans-serif;
    background: transparent;
    border: none;
    font-size: 18px;
    color: #f8f8f8;
    display: flex;
    align-items: center;
    margin-top: 20px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        opacity: 0.8;
    }
`;
