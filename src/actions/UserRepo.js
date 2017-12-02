import Consts from "../utils/Consts"
import axios from "axios";

const host = Consts.restApiHost;


const UserRepo = {
  login: (type, token, done) => {
    axios.post(`${host}/api/social_sign_up_or_in/`, {
      type: type,
      token: token,
    })
      .then(resp => {
        console.log("UserRepo/", "login/", resp.data);
        done({
          id: resp.data._id,
          full_name: resp.data.userinfo.full_name,
          pic_url: resp.data.userinfo.pic_url,
          type: resp.data.userinfo.type,
        });
      });
  },
};

export default UserRepo;