import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/userContext";

export default function usePayCoaching() {
  let history = useHistory();
  const [error, setError] = useState(null);
  const [userCoaching, setFilteredCoaching] = useState(null);
  const [paymentData, setPaymentData] = useState(null);

  const { user } = useContext(UserContext);

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    async function getCoaching() {
      await axios
        .get(
          "https://rumahbercerita.netlify.app/api/paycoaching",
          { withCredentials: true, config }
        )
        .then((res) => {
          console.log(res);
          const coachingList = res.data.filter(
            (coaching) => coaching.user._id === user._id
          );
          setFilteredCoaching(coachingList);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    getCoaching();
  }, [user]);

  //create payment
  const createPayment = async (data, paymentUrl) => {
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
      payment_method,
    } = data;
    return axios
      .post(
        `https://rumahbercerita.netlify.app/api/paycoaching`,
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
          payment_method,
        },
        { withCredentials: true, config }
      )
      .then((response) => {
        const res = response.data.payment_details
        setPaymentData(response.data)

        const data = {
            qrisUrl: res.actions[0].url,
            gopayUrl: res.actions[1].url,
            payment_method: response.data.payment_method,
            paymentUrl: paymentUrl
        }
        history.push({
            pathname: "/payment/scanqr",
            state: data
        })
      })
      .catch((err) => {
        console.log(err);
        return setError(JSON.stringify(err.response));
      });
  };

  return {
    createPayment,
    paymentData,
    userCoaching,
    error,
  };
}
