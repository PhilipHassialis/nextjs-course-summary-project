import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const router = useRouter();

  const addMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    router.push("/");
  };

  return (
    <>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
      <Head>
        <title>New meetup</title>
        <meta name="description" content="Enter neww meetup data here" />
      </Head>
    </>
  );
};

export default NewMeetup;
