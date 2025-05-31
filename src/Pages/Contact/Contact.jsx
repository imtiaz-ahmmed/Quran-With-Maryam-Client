import image1 from "../../../public/images/contact.jpeg";

const Contact = () => {
  return (
    <div className="bg-white ">
      <div class="relative">
        <img src={image1} alt="Background" className="w-full h-auto" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <h1 className="text-black text-4xl font-semibold">Contact Us</h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl text-black md:text-3xl font-semibold text-center mb-12">
          Let's Start a Conversation
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Side: Contact Form */}
          <div className="md:w-3/6 space-y-6">
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="em@gmail.com"
                  className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="5"
                  placeholder="Message"
                  className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-2 rounded-md font-semibold hover:opacity-90 transition"
              >
                Submit Message
              </button>
            </form>
          </div>

          <div className="border-1 border-gray-300"></div>
          {/* Right Side: Contact Info */}
          <div className="md:w-1/3 space-y-6">
            <div>
              <h3 className="text-lg text-black font-semibold">Address</h3>
              <p className="text-gray-700">Whitehouse Station, NJ 08889</p>
            </div>
            <div>
              <h3 className="text-lg  text-black font-semibold">Email</h3>
              <p className="text-gray-700">admin@maryamandfatima.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-6 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-black md:text-3xl font-semibold text-center mb-8">
            Location
          </h2>
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.541233918143!2d-74.76888752403466!3d40.61722157140616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c1555091719f%3A0xe7b53a75dc32a161!2sWhitehouse%20Station%2C%20NJ%2008889%2C%20USA!5e0!3m2!1sen!2s!4v1717171717171!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
