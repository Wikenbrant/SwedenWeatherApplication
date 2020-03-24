import { SMHIResponse, GeocodeResponse } from "./Types/Types";
const SMHIkey = "SMHI";
const Geocodekey = "Geocode";

export const SaveSMHIData = (data: SMHIResponse) => {
  let storedData = GetSMHIData();
  if (storedData) {
    storedData = storedData.filter(item => LessThan(item.approvedTime, 1));
    if (storedData && storedData.length > 0) {
      localStorage.setItem(SMHIkey, JSON.stringify([...storedData, data]));
      return;
    }
  }
  localStorage.setItem(SMHIkey, JSON.stringify([data]));
};

export const GetSMHIData = () => {
  const raw = localStorage.getItem(SMHIkey);
  if (raw) {
    return JSON.parse(raw) as SMHIResponse[];
  } else {
    return null;
  }
};

export const GetSMHIDataWhere = (
  latitude?: number,
  longitude?: number,
  LessThanHour?: number
) => {
  const raw = localStorage.getItem(SMHIkey);
  if (raw) {
    let output = JSON.parse(raw) as SMHIResponse[];
    if (output && output.length > 0 && latitude) {
      output = output.filter(
        item =>
          Math.floor(item.geometry.coordinates[0][1]) === Math.floor(latitude)
      );
    }
    if (output && output.length > 0 && longitude) {
      output = output.filter(
        item =>
          Math.floor(item.geometry.coordinates[0][0]) === Math.floor(longitude)
      );
    }
    if (output && output.length > 0 && LessThanHour) {
      output = output.filter(item => LessThan(item.approvedTime, LessThanHour));
    }
    return output[0];
  } else {
    return null;
  }
};

const LessThan = (time: Date, hours = 1) => {
  const DatePlusNumberOFHours = new Date(
    new Date(time).getTime() + 60 * 60 * (hours * 1000)
  );
  return new Date() < DatePlusNumberOFHours;
};

export const SaveGeocodeData = (data: GeocodeResponse) => {
  let storedData = GetGeocodeData();
  if (storedData) {
    if (storedData && storedData.length > 0) {
      localStorage.setItem(Geocodekey, JSON.stringify([...storedData, data]));
      return;
    }
  }
  localStorage.setItem(Geocodekey, JSON.stringify([data]));
};

export const GetGeocodeData = () => {
  const raw = localStorage.getItem(Geocodekey);
  if (raw) {
    return JSON.parse(raw) as GeocodeResponse[];
  } else {
    return null;
  }
};

export const GetGeocodeDataWhere = (latitude?: number, longitude?: number) => {
  const raw = localStorage.getItem(Geocodekey);
  if (raw) {
    let output = JSON.parse(raw) as GeocodeResponse[];
    if (output && output.length > 0 && latitude) {
      output = output.filter(
        item => Math.floor(+item.latt) === Math.floor(latitude)
      );
    }
    if (output && output.length > 0 && longitude) {
      output = output.filter(
        item => Math.floor(+item.longt) === Math.floor(longitude)
      );
    }
    return output[0];
  } else {
    return null;
  }
};
