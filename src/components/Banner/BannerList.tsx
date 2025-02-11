import styled from "styled-components";
import { Banner } from "../../types/Banner";
import BannerListItem from "./BannerListItem";

type BannerListProps = {
  banners: Banner[];
};

const BannerList = ({ banners }: BannerListProps) => {
  return (
    <StyledBannerList>
      {banners.map((banner, index) => (
        <BannerListItem key={index} banner={banner} />
      ))}
    </StyledBannerList>
  );
};

export default BannerList;

const StyledBannerList = styled.ul`
  width: 300%;
  display: flex;
  justify-content: center;
  gap: var(--spacing-1);
`;
