
import React, {useState} from 'react';

/*Renderizar Elemento*/
const Demo = () => {
    const [name] = useState('Developer');
    return <p>Hola {name}</p>;
};

export default Demo;