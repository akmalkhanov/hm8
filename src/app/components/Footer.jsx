"use client";

import { FaGithub, FaLinkedinIn, FaInstagram, FaTelegram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <section
      id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="z-10">
        <h5 className="text-xl font-bold text-accent my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias vel architecto labore nesciunt dolores impedit consectetur asperiores corrupti rerum aliquam aliquid vero, aperiam obcaecati unde itaque quo minus doloremque quasi, id sapiente tempora. Minus quas cumque impedit ea necessitatibus cupiditate obcaecati quae nulla molestiae. At nulla harum accusamus possimus eos.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="/">
            <FaGithub className="text-4xl m-2 text-primary hover:text-accent" />
          </Link>
          <Link href="/">
            <FaInstagram className="text-4xl m-2 text-primary hover:text-accent" />
          </Link>
          <Link href="/">
            <FaTelegram className="text-4xl m-2 text-primary hover:text-accent" />
          </Link>
          <Link href="/">
            <FaLinkedinIn className="text-4xl m-2 text-primary hover:text-accent" />
          </Link>
        </div>
      </div>
      <div>
          <form className="flex flex-col">
            <div className="mb-6">
              <label htmlFor="" className="text-accent block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="" className="text-accent block text-sm mb-2 font-medium">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="" className="text-accent block text-sm mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              className="bg-accent hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full hover:scale-95 transition-transform duration-300"
            >
              Send Message
            </button>
          </form>
      </div>
    </section>
  );
};

export default Footer;
