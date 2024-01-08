import React, { useState } from "react";

export default function ContactForm(props) {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  function handleForm(event) {
    event.preventDefault();
    let enterUser = {
      name: name,
      email: mail,
      sub: subject,
      text: message,
    };
    fetch("https://portfolio-back-sand-alpha.vercel.app/login", {
      method: "post",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enterUser),
    })
      .then((response) => {
        if (response.ok) {
          props.updateCheck(true);
          props.updateUser(name);
        }
        return response.json;
      })
      .then((data) => {
        console.log(data);
      });
    console.log("Clicked");
    console.log(name);
  }
  return (
    <form onSubmit={handleForm}>
      <div className="flex space-x-2">
        <div className="space-y-2 flex-grow">
          <div>
            {/* <label htmlFor="name">Name:</label> */}
            <input
              className="rounded-md border-3 px-2 py-2 bg-gray-950 font-sans border-gray-600 text-white"
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              type="text"
              id="name"
              name="name"
              // value={formData.name}
              // onChange={handleChange}
              required
            />
          </div>
          <div>
            {/* <label htmlFor="Email">Email:</label> */}
            <input
              className="rounded-md border-3 px-2 py-2 bg-gray-950 font-sans border-gray-600 text-white"
              placeholder="E-Mail"
              onChange={(e) => setMail(e.target.value)}
              type="email"
              id="Email"
              name="Email"
              // value={formData.email}
              // onChange={handleChange}
              required
            />
          </div>
          <div>
            {/* <label htmlFor="name">Name:</label> */}
            <input
              className="rounded-md border-3 px-2 py-2 bg-gray-950 font-sans border-gray-600 text-white"
              placeholder="Subject"
              onChange={(e) => setSubject(e.target.value)}
              type="text"
              id="subject"
              name="subject"
              // value={formData.subject}
              // onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* <label htmlFor="message">Message:</label> */}
        <textarea
          className="rounded-md border-3 px-4 py-4 flex-grow bg-gray-950 font-sans border-gray-600 text-white"
          placeholder="Your Message"
          onChange={(e) => setMessage(e.target.value)}
          id="message"
          name="message"
          // value={formData.message}
          // onChange={handleChange}
          required
        />
      </div>
      <button
        className=" border-2 px-8 py-2 bg-cyan-500 rounded-lg mt-8 text-white font-mono font-semibold text-xl"
        type="submit"
      >
        Send Message
      </button>
    </form>
  );
}
