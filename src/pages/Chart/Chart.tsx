import BannerList from "../../components/Banner/BannerList";
import banner_1_src from "../../assets/images/banner_1.webp";
import styled from "styled-components";
import { Banner } from "../../types/Banner";
import ContentList from "../../components/Content/ContentList";

const Chart = () => {
  const mockBanners: Banner[] = [
    {
      id: 1,
      imgSrc: banner_1_src,
      title: "[M COUNTDOWN] 10월 2주차 엠카 사전 투표",
      duration: "2020.02.08 10:00 ~ 2020.04.08 17:00 (KST)",
      landingUrl: "https://poc.mnetplus.world/mcountdown/ko/play",
    },
    {
      id: 2,
      imgSrc: banner_1_src,
      title: "[M COUNTDOWN] 12월 1주차 엠카 사전 투표",
      duration: "2020.04.06 08:00 ~ 2020.06.08 19:00 (KST)",
      landingUrl: "https://www.naver.com",
    },
    {
      id: 3,
      imgSrc: banner_1_src,
      title: "[M COUNTDOWN] 3월 4주차 엠카 사전 투표",
      duration: "2020.06.22 12:00 ~ 2020.08.12 12:00 (KST)",
      landingUrl: "https://google.com/",
    },
  ];

  const mockContents = [
    {
      id: 1,
      title: "2020년 10월 2주차 엠카운트다운 사전 투표",
      duration: "2020.02.08 10:00 ~ 2020.04.08 17:00 (KST)",
      landingUrl: "https://poc.mnetplus.world/mcountdown/ko/play",
    },
    {
      id: 2,
      title: "2020년 12월 1주차 엠카운트다운 사전 투표",
      duration: "2020.04.06 08:00 ~ 2020.06.08 19:00 (KST)",
      landingUrl: "https://www.naver.com",
    },
    {
      id: 3,
      title: "2020년 3월 4주차 엠카운트다운 사전 투표",
      duration: "2020.06.22 12:00 ~ 2020.08.12 12:00 (KST)",
      landingUrl: "https://google.com/",
    },
  ];

  return (
    <StyledChartLayout>
      <BannerList banners={mockBanners} />
      <ContentList />
    </StyledChartLayout>
  );
};

export default Chart;

const StyledChartLayout = styled.main`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  width: 95%;
  gap: var(--spacing-2);
  padding: var(--spacing-2) 0;
`;
