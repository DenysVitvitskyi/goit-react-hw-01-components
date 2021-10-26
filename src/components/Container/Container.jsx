import s from './Container.module.css';

const Container = ({ children }) => {
  return <div className={s.mainContainer}>{children}</div>;
};

export default Container;