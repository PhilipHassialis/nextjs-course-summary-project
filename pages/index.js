import { MongoClient } from "mongodb";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return (
    <>
      <MeetupList meetups={props.meetups} />
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="A list of React meetups" />
      </Head>
    </>
  );
};

export const getStaticProps = async (context) => {
  // fetch data from somewhere

  const client = await MongoClient.connect(
    "mongodb+srv://NEXTJSUSER:aiD0ppjwUKorq8pB@cluster0.tkycs.mongodb.net/meetupsData?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
};

// export const getServerSideProps = (context) => {
//   // fetch data

//   const request = context.req;
//   const response = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

export default HomePage;
