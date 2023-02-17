import styles from './Tag.module.css';

const Tag = (props: any) => {
  return (
    <div style={{ backgroundColor: props.bgColor }} className={styles['tag']}>
      <p suppressContentEditableWarning={true} contentEditable={true}>{ props.text ? props.text : null }</p>
    </div>
  );
};

export default Tag;