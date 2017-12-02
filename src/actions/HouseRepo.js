import Consts from "../utils/Consts"
import axios from "axios";

const host = Consts.restApiHost;


const HouseRepo = {
  getHouse: (id, done) => {
    axios.get(`${host}/api/house/getCurrentHouseWithUserInfo`, {
        headers: {
          'Authorization': id,
        }
      }
    )
      .then(resp => {
        console.log("UserRepo/", "axios/", resp.data);
        done(resp.data);
      });
  },
};

export default HouseRepo;