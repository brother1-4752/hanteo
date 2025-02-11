import styled from "styled-components";
import { Banner } from "../../types/Banner";

type BannerListItemProps = {
  banner: Banner;
};

const BannerListItem = ({ banner }: BannerListItemProps) => {
  return (
    <StyledBannerListItem
      onClick={() => window.open(banner.landingUrl)}
      bannerId={banner.id}
    >
      <div className="thumbnail-wrapper">
        <img className="thumbnail" src={banner.imgSrc} alt={banner.title} />
      </div>
      <div className="description">
        <h3 className="title">{banner.title}</h3>
        <button className="vote-btn">투표하기</button>
      </div>
      <div className="duration-wrapper">
        <span className="duration">{banner.duration}</span>
      </div>
    </StyledBannerListItem>
  );
};

export default BannerListItem;

const StyledBannerListItem = styled.li<{ bannerId: number }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 5px 7px;
  border-radius: 8px;
  padding-bottom: var(--spacing-1);
  cursor: pointer;
  transition: all 0.3s;

  .thumbnail-wrapper {
    position: relative;
    width: 100%;

    .thumbnail {
      width: 100%;
      aspect-ratio: 79/28;
      border-radius: 8px 8px 0 0;
    }
  }

  .description {
    display: flex;
    width: 95%;
    padding: 8px 0;
    justify-content: space-between;
    align-items: center;

    .title {
      width: 70%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
    }
  }

  .duration-wrapper {
    width: 95%;
    display: flex;
    justify-content: flex-end;

    .duration {
      font-family: "PretendardL", sans-serif;
      font-size: var(--font-size-11);
      color: var(--color-gray-3);
    }
  }

  .vote-btn {
    color: var(--color-pink-1);
    font-family: "PretendardB", sans-serif;
    border: 1px solid var(--color-pink-1);
    background-color: var(--color-white-1);
    font-size: var(--font-size-10);
    border-radius: 8px;
    padding: 4px 8px;
  }

  &:hover {
    opacity: 0.9;
    transform: scale(1.01);
  }
`;
