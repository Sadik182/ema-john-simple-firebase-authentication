import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import PlaceOrder from "../PlaceOrder/PlaceOrder";
import "./Shipping.css";

const Shipping = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const { user } = useAuth();

  return (
    <div>
      <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={user.displayName} {...register("name")} />
        <input
          defaultValue={user.email}
          {...register("email", { required: true })}
        />
        <input placeholder="Address" defaultValue="" {...register("address")} />
        <input placeholder="Phone" defaultValue="" {...register("phone")} />
        <input placeholder="City" defaultValue="" {...register("city")} />

        {errors.email && <span className="error">This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default Shipping;
