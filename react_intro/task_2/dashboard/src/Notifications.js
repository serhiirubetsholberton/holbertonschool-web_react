import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';


export function Notifications() {
  function onCloseClick() {
    console.log('Close button has been clicked');
  }
  const closeButtonStyles = {
    position: 'absolute',
    right: 10,
    top: 10,
    border: 0,
    background: 'none'
  }
    return (

      <div className="Notifications">
        <p>Here is the list of notifications</p>
        <ul>
          <li data-priority="regular">New course available</li>
          <li data-priority="urgent">New resume available</li>
          <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
        </ul>
        <button
          aria-label="Close"
          onClick={onCloseClick}
          style={closeButtonStyles}
          >
          <img width="20" height="20" src={closeIcon} alt="close button"/>
          </button>
      </div>
 
  
    )
}