import React from 'react';

import config from '../../../config';

const Icon = ({ icon, description }) => <div>
    <img src={`${config.IMG_API_URL}/${icon}@2x.png`} alt={description}/>
</div>;

export default Icon;