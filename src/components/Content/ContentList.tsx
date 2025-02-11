import styled from "styled-components";
import { Content } from "../../types/Content";
import ContentListItem from "./ContentListItem";

type ContentListProps = {
  contents: Content[];
};

const ContentList = ({ contents }: ContentListProps) => {
  return (
    <StyledContentList>
      <h1 className="header-title">Album Chart</h1>
      {contents.map((content, index) => (
        <ContentListItem key={index} content={content} />
      ))}
    </StyledContentList>
  );
};

export default ContentList;

const StyledContentList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  border-radius: 8px;
  position: absolute;
  top: 290px;
  height: 45%;
  overflow: scroll;

  .header-title {
    font-size: var(--font-size-21);
  }
`;
