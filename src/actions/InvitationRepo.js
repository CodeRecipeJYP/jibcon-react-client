import Consts from "../utils/Consts"
import axios from "axios";

const host = Consts.restApiHost;


const InvitationRepo = {
  getInvitationById: (id, done) => {
    axios.get(`${host}/api/invitation/findInvitation/${id}`)
      .then(resp => {
        console.log("UserRepo/", "getInvitationById/", resp.data);
        done(resp.data);
      });
  },

  postAddToHouse: (user_id, house_id, done) => {
    axios.post(`${host}/api/invitation/addToHouse`, {
      user_id: user_id,
      house_id: house_id,
    })
      .then(resp => {
        console.log("UserRepo/", "postAddToHouse/", resp.data);
        done(resp.data);
      });
  }
};

export default InvitationRepo;