import React from 'react';
import TemplateString from './TemplateString.jsx';
import MetodiDegliArray from './MetodiDegliArray.jsx';
import Oggetti from './Oggetti.jsx';
import Import from './Import.jsx';

export default [
    
    {
        title: 'Import',
        component: <Import />
    },
    {
        title: 'Metodi Degli Array',
        component: <MetodiDegliArray />
    },
    {
        title: 'Oggetti',
        component: <Oggetti />
    },
    {
        title: 'Template String',
        component: <TemplateString />
    },    
];