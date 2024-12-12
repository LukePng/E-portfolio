import React from "react";

function Contact() {
  return (
    <section id="contact" className="bg-gray-100 text-gray-800 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg"
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
