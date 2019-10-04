import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
const url = "//gmail.us20.list-manage.com/subscribe/post?u=eb8b68104b2215ffa0b951220&amp;id=2deae4b1fb"

export default class  Subscriber extends React.Component {
   render() {
    return  (
        <MailchimpSubscribe 
            url={url}
            render={({ subscribe, status, message }) => (
                <CustomForm status={status} message={message} onValidated={formData => subscribe(formData)} />
            )}
        />
        )
   }
}

const CustomForm = ({ status, message, onValidated }) => {
    let email
    const submit = () =>
      email &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
      });
  
    return (
      <div
        style={{
          background: "#808080",
          marginLeft: "10%",
          borderRadius: 10,
          width: "80%",
          padding: 10,
          display: "inline-block",
          textAlign: "center"
        }}
      >
        <h3 style={{color: "#fff"}}>Get InterstateOne alpha testnet updates</h3>
        <input
          style={{ width: "70%", fontSize: "12px", padding: 5 }}
          ref={node => (email = node)}
          type="email"
          placeholder="Your email"
        />
        <button style={{ padding: 5, color: "#fff", width: "56px", backgroundColor: "#041D2D", fontSize: "14px", padding: 5 }} onClick={submit}>
          Submit
        </button>
      </div>
    );
  };
