export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 py-12">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Get In Touch</h1>
        <p className="text-gray-600 mb-12 max-w-lg">
          Have questions or want to work together? Send us a message and we’ll get back to you shortly.
        </p>

        <form className="space-y-8">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              rows="5"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="inline-block w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
