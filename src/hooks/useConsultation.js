import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/userContext";

export default function useConsultation() {
  let history = useHistory();
  const [error, setError] = useState(null);
  const [qrisUrl, setQris] = useState(null);
  const [gopayUrl, setGopayUrl] = useState(null);
  const [userConsul, setFilteredConsul] = useState(null);
  const [paymentData, setPaymentData] = useState(null);

  const { user } = useContext(UserContext);

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };
  
  const config2 = {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Basic U0ItTWlkLXNlcnZlci03MHNpUlFuOGt0Zk1qNVBsM3lvQUpMdWQ6"
    },
  };

  useEffect(() => {
    async function getConsul() {
      await axios
        .get("/consultation", { withCredentials: true, config })
        .then((res) => {
            const consultationList = res.data.filter(consul => {
                return consul.user._id.includes(`${user._id}`)
            })
            console.log(consultationList)
            console.log(user)
            // setFilteredConsul(consultationList)
            // }
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
        `/payconsultation`,
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
        setQris(res.actions[0].url)
        setGopayUrl(res.actions[1].url)

        console.log(qrisUrl)
        console.log(res.actions[0].url)

        const data = {
            qrisUrl: res.actions[0].url,
            gopayUrl: res.actions[1].url,
            payment_method: res.data.payment_method
        }
        history.push({
            pathname: "/payment/scanqr",
            state: data
        })
      })
      .catch((err) => {
        console.log(err);
        return setError(
          JSON.stringify(err.response.data.message)
        );
      });
  };

//   //get consultation list
//   const getConsultationData = async (data) => {
//     return axios
//       .get("/consultation", { withCredentials: true, config })
//       .then((res) => {
//           const consultationList = res.filter(consul => {
//             return consul.user.includes(user._id)
//           })
//           console.log(consultationList)
//           setFilteredConsul(consultationList)
//         }
//       )
//       .catch((err) => {
//         console.log(err);
//         return setError(
//           JSON.stringify(err.response.data.message)
//         );
//       });
//   };

  const getStatusPayment = async (data) => {
    return axios
      .get("https://api.sandbox.midtrans.com/v2/e9c413d7-bd64-457f-8fc6-74ca847655e7/status", { withCredentials: true, config2 })
      .then((res) => {
          console.log(res)
        }
      )
      .catch((err) => {
        console.log(err);
        return setError(
          JSON.stringify(err.response.data.message)
        );
      });
  };

  return {
    createPayment,
    getStatusPayment,
    paymentData,
    gopayUrl,
    qrisUrl,
    userConsul,
    error,
  };
}