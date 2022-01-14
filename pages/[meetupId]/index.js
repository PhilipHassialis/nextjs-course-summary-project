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

export default MeetupDetails;
