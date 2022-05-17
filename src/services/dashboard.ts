/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { API_URL } from '../constant/url';
import axios from 'axios';
import misc from '../helpers/misc';

export const FormData = () => {
  return {
    headers: {
      Authorization: 'Bearer ' + misc.accessToken(),
      'content-type': 'multipart/form-data; boundary=MyBoundary',
    },
  };
};

export const AuthHeader = () => {
 return{
    headers:{
    Authorization: 'Bearer ' + misc.accessToken(),
  }
  };
};

export const Admin = (registrationId: string) => {
  return axios.get(`${API_URL}/admin/${registrationId}`, AuthHeader());
};

export const PlatformAccount = () => {
  return axios.get(`${API_URL}/admin/account`, AuthHeader());
};

export const Admins = () => {
  return axios.get(`${API_URL}/admin`, AuthHeader());
};

export const AddAdmin = async (params: any) => {
  return await axios.post(`${API_URL}/admin/register`, params, AuthHeader());
};

export const AdminAnalytics = async () => {
  return await axios.get(`${API_URL}/businesses/analytics`, AuthHeader());
};

export const PlatformHistory = () => {
  return axios.get(`${API_URL}/disbursements/txs/platform`, AuthHeader());
};

export const Activities = async () => {
  return await axios.get(API_URL + 'txs/user/', AuthHeader());
};


export const ChangePassword = async (params :any) => {
  return await axios.put(`${API_URL}/admin/change-password`, params, AuthHeader());
};

export const ChangePin = async (params: any) => {
  return await axios.put(`${API_URL}/admin/change-pin`, params, AuthHeader());
};

export const Banks = async () => {
  return await axios.get(`${API_URL}/disbursements/banks`, AuthHeader());
};

export const VerifyAccountNumber = async (params: any) => {
  return await axios.post(API_URL + 'accounts/resolve', params, AuthHeader());
};

export const UpdateBank = async (params: any) => {
  return await axios.put(API_URL + 'accounts/', params, AuthHeader());
};

export const EditAdmin = async (params: any) => {
  return await axios.put(`${API_URL}/admin`, params, FormData());
};


// Business Account
export const CreateBusiness = async (params: any) => {
  return await axios.post(`${API_URL}/businesses/create`, params, AuthHeader());
};

export const Businesses = async () => {
  return await axios.get(`${API_URL}/businesses`, AuthHeader());
};


export const Business = async (businessUuid: string) => {
  return await axios.get(`${API_URL}/businesses/fetch/${businessUuid}`, AuthHeader());
};

export const BusinessAnalytics = async (businessUuid: string) => {
  return await axios.get(`${API_URL}/businesses/fetch/${businessUuid}`, AuthHeader());
};

export const Collections = async (businessUuid: string) => {
  return await axios.get(`${API_URL}/collections/${businessUuid}`, AuthHeader());
};

export const Settlements = async (businessUuid: string) => {
  return await axios.get(`${API_URL}/disbursements/${businessUuid}`, AuthHeader());
};
export const VerifyAccount = async (params: any) => {
  return await axios.post(`${API_URL}/disbursements/verify-account`, params, AuthHeader());
};

export const EditBank = async (params: any) => {
  return await axios.post(`${API_URL}/admin/edit-account`, params, AuthHeader());
};

export const Withdraw = async (params:any) => {
  return await axios.post(`${API_URL}/disbursements/transfer`, params, AuthHeader());
};

export const EditBusiness = async (params: any) => {
  return await axios.put(`${API_URL}/businesses/edit`, params, AuthHeader());
};

export const SettleBusiness = async (params: any) => {
  return await axios.post(`${API_URL}/disbursements/business/settle`, params, AuthHeader());
};

