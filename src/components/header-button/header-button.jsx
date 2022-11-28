import styles from './header-button.module.css';

export function HeaderButton(props) {
  return (
    <a className={`${styles.button} pl-5 pr-5`}>
      <props.type type={`${props.isActive ? 'primary' : 'secondary'}`} />
      <p className={`text text_type_main-default ${props.isActive ? '' : `${styles.text_noActive}`} pl-2`}>{props.text}</p>
    </a>
  );
}