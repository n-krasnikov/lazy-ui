import { FC, useState } from 'react';

import { ToggleButton } from '../../ui';
import { Container } from '../Container';

const Buttons: FC = () => {
  const [toggled, setToggled] = useState(false);
  const toggleHandler = () => setToggled(!toggled);
  return (
    <>
      <h2>Buttons</h2>
      <Container>
        <ToggleButton id='toggle' callback={toggleHandler} state={toggled}/>
      </Container>
    </>
  );
};

export default Buttons;
