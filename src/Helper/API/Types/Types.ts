import {
  PercentOfPrecipitationInFrozenForm,
  PrecipitationCategory,
  MinimumPrecipitationIntensity,
  MaximumPrecipitationIntensity,
  MedianPrecipitationIntensity,
  MeanValueOfTotalCloudCover,
  MeanValueOfLowCloudCover,
  MeanValueOfMediumCloudCover,
  MeanValueOfHighCloudCover,
  AirPressure,
  AirTemprature,
  HorizontalVisibility,
  WindDirection,
  WindSpeed,
  RelativeHumidity,
  ThunderProbability,
  WindGustSpeed,
  WeatherSymbol,
  MeanPrecipitationIntensity
} from "./Paramters";

export interface SMHIResponse {
  approvedTime: Date;
  referenceTime: Date;
  geometry: {
    type: GeometryType;
    coordinates: [Coordinate];
  };
  timeSeries: Forecast[];
}

export enum Days {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6
}
export enum Months {
  Januari = 1,
  Februari = 2,
  Mars = 3,
  April = 4,
  Maj = 5,
  Juni = 6,
  Juli = 7,
  Augusti = 8,
  September = 9,
  Oktober = 10,
  November = 11,
  December = 12
}
export interface Forecast {
  validTime: Date;
  parameters: [
    AirPressure,
    AirTemprature,
    HorizontalVisibility,
    WindDirection,
    WindSpeed,
    RelativeHumidity,
    ThunderProbability,
    MeanValueOfTotalCloudCover,
    MeanValueOfLowCloudCover,
    MeanValueOfMediumCloudCover,
    MeanValueOfHighCloudCover,
    WindGustSpeed,
    MinimumPrecipitationIntensity,
    MaximumPrecipitationIntensity,
    PercentOfPrecipitationInFrozenForm,
    PrecipitationCategory,
    MeanPrecipitationIntensity,
    MedianPrecipitationIntensity,
    WeatherSymbol
  ];
}

export enum GeometryType {
  Point = "Point"
}

export type Coordinate = [number, number];

export interface GeocodeResponse {
  distance: string;
  elevation: string;
  latt: string;
  city: string;
  prov: string;
  geocode: string;
  stnumber: {};
  staddress: {};
  geonumber: string;
  inlatt: string;
  timezone: string;
  region: string;
  postal: {};
  longt: string;
  inlongt: string;
  altgeocode: string;
}
