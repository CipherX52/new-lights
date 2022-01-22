import ToggleButton from '@mui/material/ToggleButton';
import React from 'react';

const Switch = ({setlight}) => {

    const [selected, setSelected] = React.useState(false);

    // const toggle = (x) => {
    //     setlight(x);
    //     console.log(x);
    // }

    return (
      <ToggleButton
        value="check"
        color={'success'}
        fullWidth={true}
        selected={selected}
        onChange={() => {
          setSelected(!selected);
          setlight(!selected?'ON':'OFF');
          }}
          >
        {selected?"ON":"OFF"}
      </ToggleButton>
    );
  }

export default Switch;