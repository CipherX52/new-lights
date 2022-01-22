import {VStack} from '@chakra-ui/react';
import Switch from './Switch';
import Circle from './Circle';
import React from 'react';

const Light = () => {

    const [light, setlight] = React.useState('OFF');

    return(
    <VStack spacing={100}>
        <Circle light={light}/>
        <Switch setlight={setlight}/>
    </VStack>
    );
}

export default Light;