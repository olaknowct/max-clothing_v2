import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles';
// import styles from './directory-item.module.scss';
// import './directory-item.styles.scss';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
