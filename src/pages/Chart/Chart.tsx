import styled from "styled-components";
import { Banner } from "../../types/Banner";
import BannerList from "../../components/Banner/BannerList";
import ContentList from "../../components/Content/ContentList";
import banner_1 from "../../assets/images/banner_1.webp";
import banner_2 from "../../assets/images/banner_2.webp";
import banner_3 from "../../assets/images/banner_3.webp";
import content_2 from "../../assets/images/content_2.webp";
import content_3 from "../../assets/images/content_3.webp";
import content_4 from "../../assets/images/content_4.webp";
import content_5 from "../../assets/images/content_5.webp";

const Chart = () => {
  const mockBanners: Banner[] = [
    {
      id: 1,
      imgSrc: banner_1,
      title: "[M COUNTDOWN] 10월 2주차 엠카 사전 투표",
      duration: "2020.02.08 10:00 ~ 2020.04.08 17:00 (KST)",
      landingUrl: "https://poc.mnetplus.world/mcountdown/ko/play",
    },
    {
      id: 2,
      imgSrc: banner_2,
      title: "실시간 음악차트, 한터차트",
      duration: "2020.04.06 08:00 ~ 2020.06.08 19:00 (KST)",
      landingUrl: "https://www.hanteochart.com/",
    },
    {
      id: 3,
      imgSrc: banner_3,
      title: "HANTEO MUSIC AWARDS 2024",
      duration: "2024.06.22 12:00 ~ 2024.08.12 12:00 (KST)",
      landingUrl: "https://google.com/",
    },
  ];

  const mockContents = [
    { thumbnail: content_2, title: "나는 반딧불", author: "Hwang Ga Ram" },
    { thumbnail: content_3, title: "Whiplash", author: "aespa" },
    { thumbnail: content_4, title: "HOME SWEET HOME", author: "G-DRAGON" },
    { thumbnail: content_5, title: "APT.", author: "ROSE" },
    { thumbnail: content_2, title: "나는 반딧불", author: "Hwang Ga Ram" },
    { thumbnail: content_3, title: "Whiplash", author: "aespa" },
    { thumbnail: content_4, title: "HOME SWEET HOME", author: "G-DRAGON" },
    { thumbnail: content_5, title: "APT.", author: "ROSE" },
    { thumbnail: content_2, title: "나는 반딧불", author: "Hwang Ga Ram" },
    { thumbnail: content_3, title: "Whiplash", author: "aespa" },
    { thumbnail: content_4, title: "HOME SWEET HOME", author: "G-DRAGON" },
    { thumbnail: content_5, title: "APT.", author: "ROSE" },
    { thumbnail: content_2, title: "나는 반딧불", author: "Hwang Ga Ram" },
    { thumbnail: content_3, title: "Whiplash", author: "aespa" },
    { thumbnail: content_4, title: "HOME SWEET HOME", author: "G-DRAGON" },
    { thumbnail: content_5, title: "APT.", author: "ROSE" },
  ];

  return (
    <StyledChartLayout>
      <BannerList banners={mockBanners} />
      <ContentList contents={mockContents} />
    </StyledChartLayout>
  );
};

export default Chart;

const StyledChartLayout = styled.main`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  width: 90%;
  gap: var(--spacing-2);
  padding: var(--spacing-2) 0;
`;
