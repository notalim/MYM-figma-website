import React from "react";
import {
    LeftSectionContainer,
    DashboardTitle,
    StatContainer,
    StatLabel,
    StatValue,
    StatChangeBox,
    StatChange,
    StatWrapper,
    Icon,
    Divider,
    Img,
    LegendContainer,
    LegendItem,
    LegendSquare,
} from "./LeftSectionStyles";
import upArrowIcon from "../images/trend-up.png";

const LeftSection = () => {
    return (
        <LeftSectionContainer>
            <DashboardTitle>Dashboard</DashboardTitle>

            <StatContainer>
                <StatLabel>Connections</StatLabel>
                <StatWrapper>
                    <StatValue>2632</StatValue>
                    <StatChangeBox>
                        <Icon src={upArrowIcon} alt="Up Arrow" />
                        <StatChange>56%</StatChange>
                    </StatChangeBox>
                </StatWrapper>
            </StatContainer>
            <Divider />

            <StatContainer>
                <StatLabel>Followers</StatLabel>
                <StatWrapper>
                    <StatValue>2667</StatValue>
                    <StatChangeBox>
                        <Icon src={upArrowIcon} alt="Up Arrow" />
                        <StatChange>0%</StatChange>
                    </StatChangeBox>
                </StatWrapper>
            </StatContainer>
            <Divider />

            <StatContainer>
                <StatLabel>Connect Invites</StatLabel>
                <StatWrapper>
                    <StatValue>100</StatValue>
                    <StatChangeBox>
                        <Icon src={upArrowIcon} alt="Up Arrow" />
                        <StatChange>60%</StatChange>
                    </StatChangeBox>
                </StatWrapper>
            </StatContainer>

            <Img src="../../assets/graph1.png" alt="Dashboard" />
            <LegendContainer>
                <LegendItem>
                    <LegendSquare style={{ background: "#C2ECC1" }} />
                    Connections
                </LegendItem>
                <LegendItem>
                    <LegendSquare style={{ background: "#1F1F1F" }} />
                    Follows
                </LegendItem>
                <LegendItem>
                    <LegendSquare style={{ background: "#C5C7F6" }} />
                    Connect Invites
                </LegendItem>
            </LegendContainer>
        </LeftSectionContainer>
    );
};

export default LeftSection;
