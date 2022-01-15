import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      title="A first meetup"
      description="Meetup descriptor"
      address="72 Somewhere Str."
      image="https://upload.wikimedia.org/wikipedia/commons/7/7f/Kolonaki_Square_2.jpg"
    />
  );
};

export const getStaticPaths = async (context) => {
  // describe the dyuamic segment values

  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  // fetch data for a single meetup

  const meetupId = context.params;

  return {
    props: {
      meetupData: {
        id: meetupId,
        title: "A first meetup",
        description: "Meetup descriptor",
        address: "72 Somewhere Str.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/7/7f/Kolonaki_Square_2.jpg",
      },
    },
  };
};

export default MeetupDetails;
