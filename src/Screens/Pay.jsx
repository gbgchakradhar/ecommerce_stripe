import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"

import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
const KEY = "pk_test_51O4RaDSAmxpjUjo3yQftAzGCvivLRFRLp7mXxet5oARcyDUNasWABFsyJkCsbWxpBlS1ey1ZlCG6HKPKGcFe6eam00mD9A8bGk"
const Pay = () => {
    const navigate = useNavigate()
    const [stripeToken, setstripeToken] = useState(null);
    const onToken = (token) => {
        // setstripeToken(token)
        console.log(token)
        navigate('/success')

    }
    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post("http://localhost:8000/api/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 1000,
                })
                console.log(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        // stripeToken && makeRequest()
    }, [stripeToken])


    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"

            }}
        >
            {/* {stripeToken ? (<span>Processing ...pls wait..</span>) : ()} */}
            <StripeCheckout
                name="Gbg Shop"
                image="https://avatars.githubusercontent.com/u/1234567?v=1"
                billingAddress
                shippingAddress
                description='Your total is $10'
                amount={1000}
                token={onToken}
                stripeKey={KEY}
            >
                <button
                    style={{
                        border: "none",
                        width: "120px",
                        borderRadius: 5,
                        padding: "20px",
                        backgroundColor: "black",
                        color: "white",
                        fontWeight: "600",
                        cursor: "pointer"
                    }}
                >
                    Pay Now
                </button>
            </StripeCheckout>

        </div>
    )
}

export default Pay