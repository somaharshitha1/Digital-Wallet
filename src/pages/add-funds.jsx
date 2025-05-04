import React from "react";
import { useForm } from "react-hook-form";
import { browserRouterRef } from "../router";
import { useDispatch } from "react-redux";
import { AddFundsAction } from "../redux/actions";
import { t } from "i18next";

const AddFunds = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // Optional: use or log the card details if needed
        console.log("Card Details:", {
            cardNumber: data.cardNumber,
            expiry: data.expiry,
            cvv: data.cvv
        });

        dispatch(AddFundsAction({
            email: localStorage.getItem("email"),
            amount: data.amount
        }));

        browserRouterRef.current.history.replace("/wallet");
        alert(t("alerts.add_funds_success"));
    };

    return (
        <div className="container my-3">
            <div className="col-12 col-md-5">
                <h2 className="primary-color fw-bold">{t("add_funds.add_funds")}</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Amount Field */}
                    <div className="my-4">
                        <label htmlFor="amount" className="form-label">{t("add_funds.amount")}</label>
                        <div className="input-group">
                            <span className="input-group-text">$</span>
                            <input
                                {...register("amount", { required: true, min: 1 })}
                                type="number"
                                className="form-control"
                                id="amount"
                            />
                        </div>
                        {errors.amount && <small className="text-danger">Amount is required</small>}
                    </div>

                    {/* Card Number */}
                    <div className="my-4">
                        <label htmlFor="cardNumber" className="form-label">{t("add_funds.card_number")}</label>
                        <input
                            {...register("cardNumber", {
                                required: true,
                                pattern: /^\d{16}$/  // 16 digits only
                            })}
                            type="text"
                            className="form-control"
                            placeholder="XXXXXXXXXXXXXXXX"
                            id="cardNumber"
                        />
                        {errors.cardNumber && <small className="text-danger">Enter a valid 16-digit card number</small>}
                    </div>

                    {/* Expiry and CVV */}
                    <div className="my-4 row">
                        <div className="col-6">
                            <label htmlFor="expiry" className="form-label">{t("add_funds.expiration_date")}</label>
                            <input
                                {...register("expiry", {
                                    required: true,
                                    pattern: /^(0[1-9]|1[0-2])\/\d{4}$/  // MM/YYYY
                                })}
                                type="text"
                                className="form-control"
                                placeholder="MM/YYYY"
                                id="expiry"
                            />
                            {errors.expiry && <small className="text-danger">Use format MM/YYYY</small>}
                        </div>

                        <div className="col-6">
                            <label htmlFor="cvv" className="form-label">{t("add_funds.cvv")}</label>
                            <input
                                {...register("cvv", {
                                    required: true,
                                    pattern: /^\d{3,4}$/  // 3 or 4 digits
                                })}
                                type="text"
                                className="form-control"
                                placeholder="CVV"
                                id="cvv"
                            />
                            {errors.cvv && <small className="text-danger">Enter a valid 3 or 4 digit CVV</small>}
                        </div>
                    </div>

                    {/* Submit */}
                    <div className="text-center py-3">
                        <input type="submit" value={t("add_funds.pay")} className="button-green" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddFunds;
