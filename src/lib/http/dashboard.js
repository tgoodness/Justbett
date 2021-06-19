import { url } from "./url";
import axios from "axios";
import misc from "../service/misc";
import { SelectAll } from "@material-ui/icons";

const requests = {
  formData(accessToken) {
    return {
      Authorization: "Bearer " + accessToken,
      "content-type": "multipart/form-data",
    };
  },

  authHeader(accessToken) {
    return {
      Authorization: "Bearer " + accessToken,
    };
  },

  //fetch crypto Rate, customers bitcoin balance and conversion rate
  cryptoData() {
    return axios.get(url + "explorer/exchange-rate", {
      headers: this.authHeader(misc.accessToken()),
    });
  },

  //fetch user biodata,
  user(registrationId) {
    return axios.get(url + "user/" + registrationId, {
      headers: this.authHeader(misc.accessToken()),
    });
  },

  async realTimeData(registrationId) {
    const cryptoData = await this.cryptoData();
    const user = await this.user(registrationId);
    return {
      user: user,
      crypto: cryptoData,
    };
  },

  async p2pOrders(registrationId) {
    return await axios.get(url + "order/open/" + "bmc07c3ac1", {
      headers: this.authHeader(misc.accessToken()),
    });
  },


  async p2pPlaceOrder(type, amount, pin, orderId, registrationId) {

    const buy = {
      amount, pin, orderId, buyerId: registrationId
    };

    const sell = {
      amount, pin, orderId, sellerId: registrationId
    };

    const param = type === "buy" ? buy : sell;

    console.log(param)

    return await axios.post(url + `order/${type}`, param, {
      headers: this.authHeader(misc.accessToken()),
    });
  },

  async p2pCreateOrder(
    orderType,
    rateType,
    amount,
    rate,
    bitOrder,
    coinType,
    pin,
    registrationId
  ) {
    const param = {
      orderType,
      rateType,
      amount,
      rate,
      bitOrder,
      coinType,
      pin,
      registrationId,
    };

    const urlType = orderType === "BUY" ? "create-buy" : "create-sell";
    return await axios.post(`${url}order/${urlType}`, param, {
      headers: this.authHeader(misc.accessToken()),
    });
  },

  async activities(registrtionId) {

    return await axios.get(url + "btc/" + registrtionId, {
      headers: this.authHeader(misc.accessToken()),
    });
  },

  async profile(formData, registrationId) {
    return await axios.put(url + "user/" + registrationId, formData, {
      headers: this.formData(misc.accessToken()),
    });
  },

  async changePassword(formerPassword, password, registrationId) {
    const params = {
      formerPassword,
      password,
      registrationId,
    };

    return await axios.post(url + "user/change-password", params, {
      headers: this.authHeader(misc.accessToken()),
    });
  },

  async changePin(newPin, oldPin, registrationId) {
    const params = {
      oldPin,
      newPin,
      registrationId,
    };

    return await axios.post(url + "user/change-pin", params, {
      headers: this.authHeader(misc.accessToken()),
    });
  },

  async disableAccount(operation, registrationId) {
    const params = {
      operation
    };

    return await axios.put(
      url + "user/disable" + registrationId, params, {
      headers: this.authHeader(misc.accessToken()),
    });
  },

  async tradeCrypto(type, amount, pin, registrationId) {
    const params = {
      amount,
      pin,
      registrationId,
    };

    return await axios.post(url + `btc/${type}`, params, {
      headers: this.authHeader(misc.accessToken()),
    });
  },

  async transfer(amount, walletAddr, priority, pin, registrationId) {
    const params = {
      amount, walletAddr, priority, pin, registrationId
    };

    return await axios.post(url + "btc/transfer", params, {
      headers: this.authHeader(misc.accessToken()),
    });
  },


  //update profile starts here
  async personalInfo(formData, registrationId) {
    return await axios.put(url + "user/" + registrationId, formData, {
      headers: this.formData(misc.accessToken()),
    });
  },

  async countryCode() {
    return await axios.get("https://restcountries.eu/rest/v2/all");
  },

  async contactAddress(formData, registrationId) {
    return await axios.put(url + "user/" + registrationId, formData, {
      headers: this.formData(misc.accessToken()),
    });
  },

  async verifyPhoneNumber(otp, registrationId) {
    const params = { otp, registrationId };
    return await axios.post(url + "update-profile/", params, {
      headers: this.authHeader(misc.accessToken()),
    });
  },

  async resendOTP(registrationId) {
    const params = { registrationId };
    return await axios.post(url + "update-profile/", params, {
      headers: this.authHeader(misc.accessToken()),
    });
  },

  async identification(formData, registrationId) {
    return await axios.put(url + "user/" + registrationId, formData, {
      headers: this.formData(misc.accessToken()),
    });
  },

  // async banks() {
  //   const token = await accessToken.generateToken();
  //   return await axios.get(url + "bank", {
  //     headers: this.authHeader(token.data.data.accessToken),
  //   });
  // },

  // async verifyAccount(accountNumber, bankCode) {
  //   const params = {
  //     accountNumber: accountNumber,
  //     bankCode: bankCode,
  //   };
  //   const token = await accessToken.generateToken();
  //   return await axios.post(url + "bank/resolve", params, {
  //     headers: this.authHeader(token.data.data.accessToken),
  //   });
  // },

  // async transferFund(amount, accountNumber, bankCode, merchantId) {
  //   const params = {
  //     amount: amount,
  //     accountNumber: accountNumber,
  //     bankCode: bankCode,
  //     merchantId: merchantId,
  //   };

  //   const token = await accessToken.generateToken();
  //   return await axios.post(url + "/url/withdraw", params, {
  //     headers: this.authHeader(token.data.data.accessToken),
  //   });
  // },


};

export default requests;
