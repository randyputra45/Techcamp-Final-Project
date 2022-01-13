import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/userContext";

export default function usePayDyslexia() {
  let history = useHistory();
  const [error, setError] = useState(null);
  const [userConsul, setFilteredConsul] = useState(null);
  const [paymentData, setPaymentData] = useState(null);

  const { user } = useContext(UserContext);

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    async function getConsul() {
      await axios
        .get("/paydyslexia", { withCredentials: true, config })
        .then((res) => {
            const consultationList = res.data.filter(consul => {
                return consul.user._id.includes(`${user._id}`)
            })
            console.log(res.data)
            setFilteredConsul(res.data)
            }
        )
        .catch((err) => {
            console.log(err);
        });
    }

    getConsul();
  }, [user]);

  //create payment
  const createPayment = async (data) => {
    console.log(data);
    const {
        first_name,
        last_name,
        email,
        phone,
        user,
        price,
        date,
        payment_status,
        package_name,
        payment_method
    } = data;
    return axios
      .post(
        `/paydyslexia`,
        {
            first_name,
            last_name,
            email,
            phone,
            user,
            price,
            date,
            payment_status,
            package_name,
            payment_method
        },
        { withCredentials: true, config }
      ).then((response) => {
        const res = response.data.payment_details
        setPaymentData(response.data)

        const data = {
            qrisUrl: res.actions[0].url,
            gopayUrl: res.actions[1].url,
            payment_method: response.data.payment_method
        }
        history.push({
            pathname: "/payment/scanqr",
            state: data
        })
      })
      .catch((err) => {
        console.log(err);
        return setError(
          JSON.stringify(err.response)
        );
      });
  };

  return {
    createPayment,
    paymentData,
    userConsul,
    error,
  };
}