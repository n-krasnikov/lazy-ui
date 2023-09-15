import { FC } from 'react';

import styles from './ToggleButton.module.scss';

interface IProps {
  state: boolean;
  callback(): void;
  id: string;
}

const ToggleButton: FC<IProps> = ({state, callback, id}) => {
  return (
    <>
      <input 
        type='checkbox'
        id={id} 
        className={styles.checkbox} 
        checked={state} 
        readOnly={true}
      />  
      <label htmlFor={id} className={styles.switch} onClick={callback}/>
    </>
  );
};

export default ToggleButton;
