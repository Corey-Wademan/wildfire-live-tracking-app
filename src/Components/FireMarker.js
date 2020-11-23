import {Icon} from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';

const FireMarker = ({ lat, lng, onClick }) => {
    return (
        <div className='fire-marker' onClick={onClick}>
            <Icon icon={locationIcon} className='fire-icon' />
        </div>
    )
}

export default FireMarker
