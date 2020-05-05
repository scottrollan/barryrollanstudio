import React from 'react';

const Contact = () => {
  return (
    <div
      className="ui container"
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <form
        className="ui form"
        name="contact"
        method="post"
        style={{ marginBottom: '20px', width: '100%', maxWidth: '640px' }}
      >
        <div className="field">
          <input type="hidden" name="form-name" value="contact" />
          <label>
            Name
            <input type="text" name="name" placeholder="Name" required />
          </label>
        </div>
        <div className="field">
          <label>
            E-mail
            <input
              type="email"
              name="email"
              placeholder="me@email.com"
              required
            />
          </label>
        </div>
        <div className="field">
          <label>
            Message
            <textarea
              type="textarea"
              name="message"
              placeholder="Enter text..."
              required
            />
          </label>
        </div>

        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
