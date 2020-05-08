import React from 'react';

const Contact = () => {
  return (
    <div className="ui container">
      <form
        className="ui form"
        name="contact"
        method="post"
        style={{
          width: '100%',
          padding: '0 calc(50% - 320px',
        }}
      >
        <div className="field">
          <input type="hidden" name="form-name" value="contact" />
          <label style={{ fontSize: '1.8vh' }}>
            Name
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              style={{ height: '4.8vh' }}
            />
          </label>
        </div>
        <div className="field">
          <label style={{ fontSize: '1.8vh' }}>
            E-mail
            <input
              type="email"
              name="email"
              placeholder="me@email.com"
              required
              style={{ height: '4.8vh' }}
            />
          </label>
        </div>
        <div className="field">
          <label style={{ fontSize: '1.8vh' }}>
            Message
            <textarea
              type="textarea"
              name="message"
              placeholder="Enter text..."
              required
              style={{ height: '20.5vh' }}
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
