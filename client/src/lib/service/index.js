import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const instance = axios.create ( { 
  baseURL : 'https://eboutique-server-side.herokuapp.com/' 
}); 
 
// GET
export const getProducts = () => {
  return new Promise((onSuccess, onFail) => {
    instance
      .get("/api/products")
      .then((response, error) => {
        if (!response || error) {
          return onFail(`Response failure : ${error}`);
        }
        onSuccess(response);
      })
      .catch((err) => onFail(err))
  });
};

export const getUser = (body) => {
  return new Promise((onSuccess, onFail) => {
    console.log(body.profile) // realm return an object with user's profile details and email, we use the email to identify the user connected and retrieve profile details
    // check the object in the console to see properties
    instance
      .get(`/api/user/${body.profile.email}`,  {
        params: {
          email: body.profile.email
        }
      }) 
      .then((response, error) => {
        if (!response || error) {
          return onFail(`Response failure : ${error}`);
        }
        onSuccess(response.data);
      })
      .catch((err) => onFail(err));
  });
};

// POST
export const addUser = (body) => {
  return new Promise((onSuccess, onFail) => {
    instance
      .post("/api/users/add", body)
      .then((response, error) => {
        if (!response || error) {
          return onFail(`Response failure : ${error}`);
        }
        onSuccess(`user profile successfully created`);
      })
      .catch((err) => onFail(err));
  });
};

export const addOrder = (body) => {
  return new Promise((onSuccess, onFail) => {
    instance
      .post("/api/orders/add", body)
      .then((response, error) => {
        if (!response || error) {
          return onFail(`Response failure : ${error}`);
        }
        onSuccess(`order successfully saved`);
      })
      .catch((err) => onFail(err));
  });
};

export const SendEmailTest = () => {
  
  return new Promise((onSuccess, onFail) => {
    console.log("fonction SendEmailTest Open");
    instance
      .post("/api/mail")
      .then((response, error) => {
        if (!response || error) {
          return onFail(`Response failure : ${error}`);
        }
        onSuccess(`order successfully saved`);
      })
      .catch((err) => onFail(err));
  });
};

//stripe
export const processPayment = async (order) => {
  var stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
  const stripe = await stripePromise;
  instance
  .post("api/create-checkout-session", order)
  .then((response) => {
    const sessionID = response.data.id;
    return stripe.redirectToCheckout({ sessionId: sessionID });
  });
};
