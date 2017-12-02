import React from 'react'

const Invitation = ({match}) => {
  let invitation_id = match.params.invitation_id;

  return (
    <h2>id = {invitation_id}</h2>
  );
};

export default Invitation;