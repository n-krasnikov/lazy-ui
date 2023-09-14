import { FC } from 'react';

import { CircleLoader, LineLoader } from '../../ui';

import styles from './Loaders.module.scss';

const Loaders: FC = () => {
  return (
    <>
      <h2>Loaders</h2>
      <div className={styles.loaders}>
        <div className={styles.loaderContainer}>
          <CircleLoader />
        </div>
        <div className={styles.loaderContainer}>
          <LineLoader />
        </div>
      </div>
    </>
  );
};

export default Loaders;
