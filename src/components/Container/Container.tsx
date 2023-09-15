import { FC } from 'react';

import styles from './Container.module.scss';

type IProps = {
  children: JSX.Element;
}

const Container: FC<IProps> = ({children}) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default Container;
