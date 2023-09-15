import { FC, useState } from 'react';
import { ToggleButton } from '../../ui';

const Buttons: FC = () => {
  const [toggled, setToggled] = useState(false);
  const toggleHandler = () => setToggled(!toggled);
  return (
    <>
      <h2>Buttons</h2>
      <ToggleButton id='toggle' callback={toggleHandler} state={toggled}/>
    </>
  );
};

export default Buttons;
