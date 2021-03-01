import React from 'react';

import DateService from '../../../services/DateService';

import Icon from '../Icon/Icon';

const Card = ({ temp, dt, weather }) => <div>
    <Icon></Icon>
    <div>
        <div>
            {DateService.getReadableFormat(new Date(dt))}
        </div>
        <div>
            Температура: {temp}
        </div>
    </div>
</div>;

export default Card;
