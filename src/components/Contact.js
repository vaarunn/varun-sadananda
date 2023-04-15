import React, { useRef, useState } from "react";

import laptop from "../assets/laptop.json";
import Lottie from "lottie-react";
import Rotate from "react-reveal/Rotate";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import { socialIcons } from "./data";

function Contact() {
  const form = useRef();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8mjrqbj",
        "template_a19tq2c",
        form.current,
        "cJPNfEnX0bcXwpUAF"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setSuccess(result.text);
        },
        (error) => {
          console.log(error.text);
          setError(error.message);
        }
      );
  };
  return (
    <div className="h-screen overflow-scroll w-full  lg:h-screen py-16">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <Rotate>
            <div className="bg-[#273f6a] col-span-3 lg:col-span-2 h-full shadow-xl shadow-blue-500 rounded-xl p-4">
              <div className="lg:p-4 h-full">
                <div>
                  <Lottie animationData={laptop} />
                </div>
                <div>
                  <h2 className="py-2">Varun Sadananda</h2>
                  <p>Front-End Developer</p>
                </div>

                <div>
                  <p className="uppercase">Connect with Me</p>
                  <div className="flex items-center justify-between py-4">
                    {socialIcons.map((item) => {
                      const { id, icon } = item;
                      return (
                        <div
                          key={id}
                          className="bg-[#203151] rounded-full shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                        >
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Rotate>
          {/* right */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#273f6a] shadow-blue-500 col-span-3 w-full h-auto shadow-xl rounded-xl lg:p-4"
          >
            <div className="p-4">
              {error ? <p className="p-2 my-3 bg-red-900">{error}</p> : null}
              {success ? (
                <p className="p-2 my-3 bg-green-300 text-black rounded">
                  {success}
                </p>
              ) : null}
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid  gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
                      type="text"
                      name="user_name"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">email</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
                      type="email"
                      name="user_email"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Message</label>
                    <textarea
                      className="border-2 rounded-lg p-3 flex border-gray-300 text-black "
                      name="message"
                    />
                  </div>
                  <div>
                    <input
                      className="cursor-pointer px-6 py-2 bg-blue-500 rounded-xl  hover:scale-110 ease-in duration-300"
                      type="submit"
                      value="Send"
                    />
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
