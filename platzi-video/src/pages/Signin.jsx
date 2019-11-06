import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { signinRequest } from '../actions';

const Signin = ({ signinRequest, history }) => {
  const [form, setForm] = useState({
    email: '',
    name: '',
    pass: '',
  });

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signinRequest(form);
    history.push('/');
  };

  return (
    <>
      <Helmet bodyAttributes={{ style: 'background-image: linear-gradient(#ab88ff, #21c08b);' }}>
        <title>Platzi Video | Signin</title>
      </Helmet>

      <section className='Signin'>
        <div className='Signin__wrapper'>
          <h2 className='Signin__title'>Sign In!</h2>
          <form className='Signin__form' onSubmit={handleSubmit}>
            <input
              type='text'
              name='name'
              className='Signin__input'
              placeholder='Name'
              aria-label='Name'
              onChange={handleInput}
              required
            />
            <input
              type='email'
              name='email'
              className='Signin__input'
              placeholder='Email'
              aria-label='Email'
              onChange={handleInput}
              required
            />
            <input
              type='password'
              name='pass'
              className='Signin__input'
              placeholder='Password'
              aria-label='Password'
              onChange={handleInput}
              required
            />
            <button type='submit' className='Signin__btn'>Sign In!</button>
          </form>

          <p className='Signin__Login'>
            ¿Ya tienes una cuenta?
            {' '}
            <Link to='/login' className='Signin__Login-link'>Ingresa!</Link>
          </p>
        </div>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  signinRequest,
};

export default connect(null, mapDispatchToProps)(Signin);
