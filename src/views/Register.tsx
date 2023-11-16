import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

// const [userFormData, setUserFormData] = useState<Partial<UserType>


const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="username" ref={register} placeholder="Username" />
      {errors.username && <p>{errors.username.message}</p>}
      <input name="email" ref={register} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}
      <input name="password" ref={register} placeholder="Password" />
      {errors.password && <p>{errors.password.message}</p>}
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;