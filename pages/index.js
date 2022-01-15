import { MongoClient } from "mongodb";
import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7f/Kolonaki_Square_2.jpg",
    address: "Some address 5, Kolonaki",
    description: "Our first meetup",
  },
  {
    id: "m2",
    title: "Second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fe/%CE%A0%CE%BB%CE%AC%CE%BA%CE%B1_6552.jpg",
    address: "Some address 6, Plaka",
    description: "Our second meetup",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
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
