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

export const getStaticProps = () => {
  // fetch data from somewhere
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
};

export default HomePage;
