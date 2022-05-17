/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { API_URL } from '../constant/url';
import axios from 'axios';
import DeviceDetector from 'device-detector-js';

 export const loginActivies = () => {
   return axios.get('https://geolocation-db.com/json/');
 };

 export const Login = async (param:any) => {
   const deviceDetector = new DeviceDetector();
   const device : any = deviceDetector.parse(navigator.userAgent);

   const activities = await loginActivies();
   const deviceName = device.client.name + ' ' + device.device.brand;
   const os = device.os.name + ' ' + device.os.version;
   const deviceModel = device.device.brand + ' ' + device.device.model;

   const ip = activities.data.IPv4;
   const location = `${activities.data.state}, ${activities.data.country_name}`;

   const activitiesParams = { deviceName, os, ip, location, deviceModel };
   const params = { ...param, ...activitiesParams };
   return await axios.post(`${API_URL}/admin/login`, params);
 };

