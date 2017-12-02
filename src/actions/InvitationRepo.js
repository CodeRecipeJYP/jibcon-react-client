import Consts from "../utils/Consts"
import axios from "axios";

const host = Consts.restApiHost;


const InvitationRepo = {
  getInvitationById: (id, done) => {
    axios.get(`${host}/api/invitation/findInvitation/${id}`)
      .then(resp => {
      console.log("InvitationRepo/", "getInvitationById/", resp);
    });
    },
};

export default InvitationRepo;