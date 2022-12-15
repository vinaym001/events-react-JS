import './index.css'

const EventItem = props => {
  const {eventDetails, onSelectEvent} = props
  const {id, imageUrl, name, location, registrationStatus} = eventDetails

  const onClickImg = () => {
    onSelectEvent(registrationStatus)
  }

  return (
    <li className="li-container">
      <button type="button" onClick={onClickImg} className="img-button">
        <img src={imageUrl} alt={name} className="img" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
