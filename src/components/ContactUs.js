import React from 'react';

const ContactUs = () => {
  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Contact us</h2>
      <form className="max-w-md mx-auto">
        <input type="text" placeholder="Name" className="w-full p-2 mb-2 border rounded" />
        <input type="text" placeholder="Surname" className="w-full p-2 mb-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 mb-2 border rounded" />
        <textarea
          placeholder="Message"
          className="w-full p-2 mb-2 border rounded"
          rows="4"
        ></textarea>
        <button type="submit" className="w-full px-4 py-2 bg-black text-white rounded">
          Send
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
