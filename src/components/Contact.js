import React from 'react';

const Contact = () => {
  return (
    <React.Fragment>
      <form className="ui form" name="contact" netlify>
        <div className="field">
          <label>Name</label>
          <input type="text" name="name" placeholder="Name" required />
        </div>
        <div className="field">
          <label>E-mail</label>
          <input type="text" name="email" placeholder="me@email.com" required />
        </div>
        <div className="field">
          <label>Message</label>
          <textarea
            type="textarea"
            name="message"
            placeholder="Enter text..."
            required
          />
        </div>

        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    </React.Fragment>
  );
};

export default Contact;
