import { FC } from 'react';

import { Container } from '../Container';
import { CircleLoader, LineLoader } from '../../ui';

import styles from './Loaders.module.scss';

const Loaders: FC = () => {
  return (
    <>
      <h2>Loaders</h2>
      <div className={styles.loaders}>
        <Container>
          <CircleLoader />
        </Container>
        <Container>
          <LineLoader />
        </Container>
      </div>
    </>
  );
};

export default Loaders;
