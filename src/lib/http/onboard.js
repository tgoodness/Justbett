import { url, auth } from "./url";
import axios from "axios";
import misc from "../service/misc";

const requests = {
  authHeader(accessToken) {
    return {
      Authorization: "Bearer " + accessToken,
    };
  },

  async login(email, password) {
    const params = { email, password };
    return await axios.post(auth, params, {
      headers: this.authHeader(misc.accessToken()),
    });
  },

  async register(username, email, password) {
    const params = { username, email, password };
    return await axios.post(url + "user/register", params, {
      headers: this.authHeader(misc.accessToken()),
    });
  },

  async resendToken(email) {
    const params = { email };
    return await axios.post(url + "user/resend-confirm-email-token", params, {
      headers: this.authHeader(misc.accessToken()),
    });
  },

  async forgotPassword(email) {
    const params = { email };
    return await axios.post(url + "user/forgot-password", params, {
      headers: this.authHeader(misc.accessToken()),
    });
  },

  async resetPassword(password, token) {
    const params = { password, token };
    return await axios.post(url + "user/reset-password", params, {
      headers: this.authHeader(misc.accessToken()),
    });
  },

  async emailVerification(token) {
    const params = { token };
    return await axios.post(url + "user/confirm-email", params, {
      headers: this.authHeader(misc.accessToken()),
    });
  },
};

export default requests;
