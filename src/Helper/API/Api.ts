import { SMHIResponse, GeocodeResponse } from "./Types/Types";
import axios from "axios";
import {
  SaveSMHIData,
  GetSMHIDataWhere,
  GetGeocodeDataWhere,
  SaveGeocodeData
} from "./LocalStorage";

const UrlSMHI = (latitude: number, longitude: number) =>
  `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${longitude}/lat/${latitude}/data.json`;

const UrlGeocode = (latitude: number, longitude: number) =>
  `https://geocode.xyz/${latitude},${longitude}?geoit=json`;

export const GetForecast = async (latitude: number, longitude: number) => {
  var storedData = GetSMHIDataWhere(latitude, longitude, 2);
  if (storedData) {
    return storedData;
  } else {
    const data = (await GetSMHI(latitude, longitude)).data;
    SaveSMHIData(data);
    return data;
  }
};

export const GetLocation = async (latitude: number, longitude: number) => {
  var storedData = GetGeocodeDataWhere(latitude, longitude);
  if (storedData) {
    return storedData;
  } else {
    const data = (await GetGeocode(latitude, longitude)).data;
    SaveGeocodeData(data);
    return data;
  }
};

const GetSMHI = (latitude: number, longitude: number) =>
  axios.get<SMHIResponse>(UrlSMHI(latitude, longitude));

const GetGeocode = (latitude: number, longitude: number) =>
  axios.get<GeocodeResponse>(UrlGeocode(latitude, longitude));
