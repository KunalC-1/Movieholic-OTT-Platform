import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./payment.scss";

toast.configure();

function Payment() {
    const [product] = React.useState({
        name: "Subscription",
        price: 150,
        description: "Basic Plan",
    });

    const history = useHistory();
    async function handleToken(token) {
        console.log("Response:", token);
        let status = "success";
        if (status === "success") {
            toast("Success! Check email for details", { type: "success" });
            history.push("/");
        } else {
            toast("Something went wrong", { type: "error" });
        }
    }

    return (
        <div className="container">
            <button className="loginButton">Subscribe</button>
            <h3>$150</h3>
            <StripeCheckout
                stripeKey="pk_test_51KlQ7sSEJ9co3HXrgmxC9RLvan2EAZOqI4s3WyW7IA4RU0iRDD77aCpagc7OJZe69GwKr2XW3JHMm8OXo6KqHdeV00qSH5Ymk6"
                token={handleToken}
                amount={150 * 100}
                name="Subscription"
            />
        </div>
    );
}

export default Payment;
