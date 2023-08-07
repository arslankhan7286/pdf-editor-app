import React from 'react';
import { useForm } from 'react-hook-form';

const AuthenticationForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <div className="auth-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="token">Enter Token</label>
        <div className="token-input">
          <input type="text" name="authToken" {...register("token", { required: true })} />
          {errors.exampleRequired && <p>{errors.token.message}</p>}
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AuthenticationForm;