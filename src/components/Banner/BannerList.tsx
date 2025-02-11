import styled from "styled-components";
import { Banner } from "../../types/Banner";
import BannerListItem from "./BannerListItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type BannerListProps = {
  banners: Banner[];
};

const BannerList = ({ banners }: BannerListProps) => {
  const slideSettings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <StyledSlider {...slideSettings}>
      {banners.map((banner, index) => (
        <BannerListItem key={index} banner={banner} />
      ))}
    </StyledSlider>
  );
};

export default BannerList;

const StyledSlider = styled(Slider)`
  width: 300%;
  display: flex;
  justify-content: center;
  gap: var(--spacing-1);

  .slick-slide {
    display: flex;
    justify-content: center;
  }
  .slick-list {
    overflow: hidden;
  }
  .slick-track {
    display: flex;
    align-items: center;
  }
`;
