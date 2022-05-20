import {Icon} from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';

const FireMarker = ({ lat, lng, displayInfo }) => {
    return (
        <div className='fire-marker' onClick={displayInfo}>
            <Icon icon={locationIcon} className='fire-icon' />
        </div>
    )
}
 
export default FireMarker
