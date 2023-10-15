'use server';
import { Resend } from 'resend';
import { getErrorMessage, validateString } from '../lib/utils';
import ContactFormEmail from '../email/contact-form-email';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  console.log('Running on server');
  const email = formData.get('email');
  const message = formData.get('message');

  if (!validateString(message, 100)) {
    return {
      error: 'Invalid message',
    };
  }
  if (!validateString(email, 1000)) {
    return {
      error: 'Invalid email',
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: 'sebastien.ramsay@gmail.com',
      subject: 'Message from portfolio',
      reply_to: email as string,
      react: React.createElement(ContactFormEmail, {
        email: email as string,
        message: message as string,
      }),
    });
  } catch (error) {
    console.log(getErrorMessage(error));
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
