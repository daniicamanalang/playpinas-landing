import React from 'react';

const ContactUs = () => {
  return (
    <section className="p-2 md:p-8">
      <h2 className="text-2xl font-bold mb-4 w-full text-center p-8">Contact Us</h2>
      <div className="bg-gray-100 w-full py-24">
        <form className="max-w-[320px] mx-auto">
          <div className="w-full p-8 bg-white rounded-lg shadow-md">
            <label className="block mb-2" for="name">Name</label>
            <input name="Name" type="text" placeholder="Value" className="w-full p-2 mb-2 border rounded-lg" />
            <label className="block mb-2" for="surname">Surname</label>
            <input name="surname" type="text" placeholder="Value" className="w-full p-2 mb-2 border rounded-lg" />
            <label className="block mb-2" for="email">Email</label>
            <input name="email" type="email" placeholder="Value" className="w-full p-2 mb-2 border rounded-lg" />
            <label className="block mb-2" for="message">Message</label>
            <textarea
              name="message"
              placeholder="Value"
              className="w-full p-2 mb-2 border rounded-lg"
              rows="4"
            ></textarea>
            <button type="submit" className="w-full px-4 py-2 bg-black text-white rounded-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
