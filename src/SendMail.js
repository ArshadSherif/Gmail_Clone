import React from "react";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import firebase from "firebase/compat/app";

function SendMail() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (formdata) => {
    console.log(formdata);
    db.collection("email").add({
      to: formdata.to,
      subject: formdata.subject,
      message: formdata.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Message</h3>
        <CloseIcon
          onClick={() => dispatch(closeSendMessage())}
          className="sendMail_close"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("to", { required: true })}
          placeholder="To"
          type="email"
        ></input>
        <p>{errors.to && <p className="sendMail_error">To is required</p>}</p>
        <input
          {...register("subject", { required: true })}
          placeholder="Subject"
          type="text"
        ></input>
        <p>
          {errors.subject && (
            <p className="sendMail_error">Subject is required</p>
          )}
        </p>
        <input
          {...register("message", { required: true })}
          name="message"
          placeholder="Message..."
          type="text"
          className="sendMail_message"
        ></input>
        <p>
          {errors.message && (
            <p className="sendMail_error">Message is required</p>
          )}
        </p>
        <div className="sendMail_options">
          <Button
            className="sendMail_button"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
