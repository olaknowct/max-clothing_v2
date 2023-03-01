import styles from './directory-item.module.scss';
// import './directory-item.styles.scss';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className={styles['directory-item-container']}>
      <div
        className={styles['background-image']}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className={styles['body']}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
