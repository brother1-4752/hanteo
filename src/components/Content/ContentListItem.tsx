import styled from "styled-components";
import { Content } from "../../types/Content";

type ContentListItemProps = {
  content: Content;
};

const ContentListItem = ({ content }: ContentListItemProps) => {
  return (
    <StyledContentListItem>
      <div>
        <img
          className="thumbnail"
          src={content.thumbnail}
          alt={content.title}
        />
      </div>
      <div className="detail-wrapper">
        <h3 className="title">{content.title}</h3>
        <p className="author">{content.author}</p>
      </div>
    </StyledContentListItem>
  );
};

export default ContentListItem;

const StyledContentListItem = styled.li`
  width: calc(90% - 24px);
  margin-left: 1px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;

  .thumbnail {
    width: 45px;
    aspect-ratio: 1/1;
    border-radius: 8px;
    margin-right: 12px;
  }

  .detail-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px 0;

    .title {
      font-size: var(--font-size-14);
      font-family: "PretendardB", sans-serif;
    }

    .author {
      font-size: var(--font-size-12);
      color: var(--color-gray-3);
    }
  }

  &:hover {
    opacity: 0.9;
    transform: scale(1.01);
  }
`;
