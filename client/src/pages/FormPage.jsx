import React from 'react';
import { Helmet } from 'react-helmet-async';
import Form from '../components/Form';

const FormPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact & Consultation Form | Medicdiet Clinic</title>
        <meta name="description" content="Fill out the form to book your nutrition and diet consultation with Medicdiet Clinic." />
        <meta property="og:title" content="Contact & Consultation Form | Medicdiet Clinic" />
        <meta property="og:description" content="Fill out the form to book your nutrition and diet consultation with Medicdiet Clinic." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/form" />
      </Helmet>
      <div className=" bg-warning bg-opacity-50">
        <Form />
      </div>
    </>
  );
};

export default FormPage;
