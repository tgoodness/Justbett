import { auth } from "./url";
import axios from "axios";
import fn from "../service/func";
const accessToken = {
  async generateToken() {
    const param = {
      email: "support@botmecash.com",
      password: "botmecash.backend",
    };

    if (fn.getItem("accessToken", true) !== null) {
      const { expiredAt } = fn.getItem("accessToken", true);
      if (expiredAt < new Date()) {
        axios
          .post(auth, param)
          .then((response) => {
            const { accessToken, expiredAt } = response.data.data;
            fn.setItem(
              "accessToken",
              { accessToken: accessToken, expiredAt: expiredAt },
              true
            );
          })
          .catch((error) => {
            // console.log(error);
          });
      }
    } else {
      await axios
        .post(auth, param)
        .then((response) => {
          const { accessToken, expiredAt } = response.data.data;
          fn.setItem(
            "accessToken",
            { accessToken: accessToken, expiredAt: expiredAt },
            true
          );
        })
        .catch((error) => {
          // console.log(error);
        });
    }
  },
};

export default accessToken;
