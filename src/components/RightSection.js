import React from "react";
import {
    RightSectionContainer,
    TopSection,
    SearchInput,
    SearchIcon,
    NotificationIcon,
    UserProfile,
    CampaignAnalyticsTitle,
    DateRange,
    StatContainer,
    StatLabel,
    StatValue,
    GraphContainer,
    Graph1,
    Graph2,
    RecentActivityTitle,
    RecentActivityContainer,
    ActivityIcon,
    ActivityDescription,
} from "./RightSectionStyles";
import searchIcon from "../images/search-normal.png";
import notificationIcon from "../images/notification-bing.png";
import calendarIcon from "../images/calculator.png";
import dropMenuIcon from "../images/arrow-square-down.png";
import profileImage from "../images/jacob.png";
import graph1 from "../images/graph2.png";
import graph2 from "../images/graph3.png";
import activity1Icon from "../images/alex.png";
import activity2Icon from "../images/mujo.png";
import activity3Icon from "../images/3square.png";


const RightSection = () => {
    return (
        <RightSectionContainer>
            <TopSection>
                <SearchInput>
                    <input type="text" placeholder="Search" />
                    <SearchIcon src={searchIcon} alt="Search" />
                </SearchInput>
                <NotificationIcon src={notificationIcon} alt="Notifications" />
                <UserProfile>
                    <img src={profileImage} alt="Profile" />
                    <span>Jacob Frost</span>
                    <img src={dropMenuIcon} alt="Menu" />
                </UserProfile>
            </TopSection>
            <CampaignAnalyticsTitle>
                Campaign Analytics
                <DateRange>
                    <img src={calendarIcon} alt="Calendar" />
                    Mar 10 - Apr 10
                    <img src={dropMenuIcon} alt="Menu" />
                </DateRange>
            </CampaignAnalyticsTitle>
            <StatContainer>
                <div>
                    <StatLabel>Invitations sent</StatLabel>
                    <StatValue>286</StatValue>
                </div>
                <div>
                    <StatLabel>Pending Invitations</StatLabel>
                    <StatValue>12</StatValue>
                </div>
                <div>
                    <StatLabel>Profile views</StatLabel>
                    <StatValue>2891</StatValue>
                </div>
                <div>
                    <StatLabel></StatLabel>
                    <StatValue></StatValue>
                </div>
            </StatContainer>
            <GraphContainer>
                <GraphContainer>
                    <Graph1 src={graph1} alt="Graph 1" />
                    <Graph2 src={graph2} alt="Graph 2" />
                </GraphContainer>
            </GraphContainer>
            <RecentActivityTitle>
                Recent Activity
                <DateRange>
                    Last 24h
                    <img src={dropMenuIcon} alt="Menu" />
                </DateRange>
            </RecentActivityTitle>
            <RecentActivityContainer>
                <ActivityIcon src={activity1Icon} alt="Activity 1" />
                <ActivityDescription>
                    <strong>Alex Morgan</strong> sent you a{" "}
                    <strong>message</strong>.
                </ActivityDescription>
            </RecentActivityContainer>
            <RecentActivityContainer>
                <ActivityIcon src={activity2Icon} alt="Activity 2" />
                <ActivityDescription>
                    <strong>Mujo Prosper</strong> sent you a
                    <strong>connection request</strong>.
                </ActivityDescription>
            </RecentActivityContainer>
            <RecentActivityContainer>
                <ActivityIcon src={activity3Icon} alt="Activity 3" />
                <ActivityDescription>
                    Upcoming Task -{" "}
                    <strong>Create a campaign for designers</strong> due on{" "}
                    <strong>02/04/2023</strong>.
                </ActivityDescription>
            </RecentActivityContainer>
        </RightSectionContainer>
    );
};

export default RightSection;
