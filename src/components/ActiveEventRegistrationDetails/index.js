import './index.css'

let imgUrl
const ActiveEventRegistrationDetails = props => {
  const {statusOfEvent} = props

  if (statusOfEvent === 'YET_TO_REGISTER') {
    imgUrl = 'https://assets.ccbp.in/frontend/react-js/events-register-img.png'
  } else if (statusOfEvent === 'REGISTERED') {
    imgUrl =
      'https://assets.ccbp.in/frontend/react-js/events-regestered-img.png'
  } else if (statusOfEvent === 'REGISTRATIONS_CLOSED') {
    imgUrl =
      'https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png'
  }

  return (
    <div className="img-container">
      <img src={imgUrl} className="status-img" alt="event" />
    </div>
  )
}

export default ActiveEventRegistrationDetails
