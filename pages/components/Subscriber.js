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
          background: "#efefef",
          borderRadius: 2,
          padding: 10,
          display: "inline-block"
        }}
      >
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        <br />
        <input
          style={{ fontSize: "2em", padding: 5 }}
          ref={node => (email = node)}
          type="email"
          placeholder="Your email"
        />
        <br />
        <button style={{ fontSize: "2em", padding: 5 }} onClick={submit}>
          Submit
        </button>
      </div>
    );
  };
