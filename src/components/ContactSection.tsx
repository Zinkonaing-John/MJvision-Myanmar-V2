import React from "react";

const ContactSection = () => (
  <section className="py-16 bg-gray-50 px-6 md:px-20">
    <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
      Contact Us
    </h2>
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <h3 className="text-xl font-semibold mb-2">Address</h3>
        <p className="mb-4">123 University Ave, Yangon, Myanmar</p>
        <h3 className="text-xl font-semibold mb-2">Phone</h3>
        <p className="mb-4">+95 1 234 5678</p>
        <h3 className="text-xl font-semibold mb-2">Email</h3>
        <p>info@jjmyanmar.edu.mm</p>
      </div>
      <form className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-3 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border p-3 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="border p-3 rounded"
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-700 text-white px-6 py-3 rounded font-semibold hover:bg-blue-800 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default ContactSection;
