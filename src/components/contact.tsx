'use client';
import React from 'react';
import SectionHeading from './section-heading';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useSectionInView } from '../../lib/hooks';
import { sendEmail } from '../../actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast/headless';

export default function Contact() {
  const { ref } = useSectionInView('Contact', 0.5);
  return (
    <motion.section
      id="contact"
      className="mb-20 w-[min(100%,39rem)] text-center sm:mb-28"
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="-mt-6 text-gray-700 dark:text-white/80">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:sebastien.ramsay@gmail.com">
          Sebastien.Ramsay@gmail.com
        </a>{' '}
        or through this forum.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (FormData) => {
          const { data, error } = await sendEmail(FormData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success('Email sent successfully!');
        }}
      >
        <input
          type="email"
          required
          maxLength={500}
          className="borderBlack h-14 rounded-lg px-4 dark:bg-white/80 dark:outline-none dark:focus:bg-white/100"
          placeholder="Email"
          name="email"
          autoComplete="email"
        />
        <textarea
          className="borderBlack my-3 h-52 rounded-lg px-4 py-4 dark:bg-white/80 dark:outline-none dark:focus:bg-white/100"
          placeholder="Message"
          required
          maxLength={500}
          name="message"
          autoComplete="off"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
