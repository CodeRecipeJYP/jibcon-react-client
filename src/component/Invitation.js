import React from 'react'
import InvitationRepo from "../actions/InvitationRepo";

const Invitation = ({match}) => {
  let invitation_id = match.params.invitation_id;
  InvitationRepo.getInvitationById(invitation_id, (results) => {});

  return (
    <h2>id = {invitation_id}</h2>
  );
};

export default Invitation;