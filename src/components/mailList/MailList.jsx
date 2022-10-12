import './mailList.css'

function MailList() {
  return (
    <div className='mailList'>
        <h4>Save time, save money!</h4>
        <p>Sign up and we'll send the best deals to you</p>
        <div className="mailField">
            <input type="text" placeholder='Your email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList