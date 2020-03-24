export type Parameters =
  | AirPressure
  | AirTemprature
  | HorizontalVisibility
  | WindDirection
  | WindSpeed
  | RelativeHumidity
  | ThunderProbability
  | MeanValueOfTotalCloudCover
  | MeanValueOfLowCloudCover
  | MeanValueOfMediumCloudCover
  | MeanValueOfHighCloudCover
  | WindGustSpeed
  | MinimumPrecipitationIntensity
  | MaximumPrecipitationIntensity
  | PercentOfPrecipitationInFrozenForm
  | PrecipitationCategory
  | MeanPrecipitationIntensity
  | MedianPrecipitationIntensity
  | WeatherSymbol;

export enum Units {
  hPa = "hPa",
  C = "Cel",
  km = "km",
  degree = "degree",
  "m/s" = "m/s",
  "%" = "%",
  octas = "octas",
  "mm/h" = "mm/h",
  "kg/m2/h" = "kg/m2/h",
  category = "category",
  code = "code"
}

export enum LevelType {
  hmsl = "hmsl",
  hl = "hl"
}

interface Paramater {
  name: string;
  levelType: LevelType;
  level: number;
  unit: Units;
  values: number[];
  toString: () => string;
}

export class AirPressure implements Paramater {
  name = "msl";
  unit = Units.hPa;
  levelType = LevelType.hmsl;
  level = 0;
  values: [number] = [0];
}

export class AirTemprature implements Paramater {
  name = "t";
  unit = Units.C;
  levelType = LevelType.hl;
  level = 2;
  values: [number] = [0];
}

export class HorizontalVisibility implements Paramater {
  name = "vis";
  unit = Units.km;
  levelType = LevelType.hl;
  level = 2;
  values: [number] = [0];
}

export class WindDirection implements Paramater {
  name = "wd";
  unit = Units.degree;
  levelType = LevelType.hl;
  level = 10;
  values: [number] = [0];
}

export class WindSpeed implements Paramater {
  name = "ws";
  unit = Units["m/s"];
  levelType = LevelType.hl;
  level = 10;
  values: [number] = [0];
}

export class RelativeHumidity implements Paramater {
  name = "r";
  unit = Units["%"];
  levelType = LevelType.hl;
  level = 2;
  values: [number] = [0];
}

export class ThunderProbability implements Paramater {
  name = "tstm";
  unit = Units["%"];
  levelType = LevelType.hl;
  level = 0;
  values: [number] = [0];
}

export class MeanValueOfTotalCloudCover implements Paramater {
  name = "tcc_mean";
  unit = Units.octas;
  levelType = LevelType.hl;
  level = 0;
  values: [number] = [0];
}

export class MeanValueOfLowCloudCover implements Paramater {
  name = "lcc_mean";
  unit = Units.octas;
  levelType = LevelType.hl;
  level = 0;
  values: [number] = [0];
}

export class MeanValueOfMediumCloudCover implements Paramater {
  name = "mcc_mean";
  unit = Units.octas;
  levelType = LevelType.hl;
  level = 0;
  values: [number] = [0];
}

export class MeanValueOfHighCloudCover implements Paramater {
  name = "hcc_mean";
  unit = Units.octas;
  levelType = LevelType.hl;
  level = 0;
  values: [number] = [0];
}

export class WindGustSpeed implements Paramater {
  name = "gust";
  unit = Units["m/s"];
  levelType = LevelType.hl;
  level = 10;
  values: [number] = [0];
}

export class MinimumPrecipitationIntensity implements Paramater {
  name = "pmin";
  unit = Units["kg/m2/h"];
  levelType = LevelType.hl;
  level = 0;
  values: [number] = [0];
}

export class MaximumPrecipitationIntensity implements Paramater {
  name = "pmax";
  unit = Units["kg/m2/h"];
  levelType = LevelType.hl;
  level = 0;
  values: [number] = [0];
}

export class PercentOfPrecipitationInFrozenForm implements Paramater {
  name = "spp";
  unit = Units["%"];
  levelType = LevelType.hl;
  level = 0;
  values: [number] = [0];
}

export class PrecipitationCategory implements Paramater {
  name = "pcat";
  unit = Units.category;
  levelType = LevelType.hl;
  level = 0;
  values: [PrecipitationCategoryType] = [0];
}

export enum PrecipitationCategoryType {
  "No precipitation" = 0,
  Snow = 1,
  "Snow and rain" = 2,
  Rain = 3,
  Drizzle = 4,
  "Freezing rain" = 5,
  "Freezing drizzle" = 6
}

export class MeanPrecipitationIntensity implements Paramater {
  name = "pmean";
  unit = Units["kg/m2/h"];
  levelType = LevelType.hl;
  level = 0;
  values: [number] = [0];
}

export class MedianPrecipitationIntensity implements Paramater {
  name = "pmedian";
  unit = Units["kg/m2/h"];
  levelType = LevelType.hl;
  level = 0;
  values: [number] = [0];
}

export class WeatherSymbol implements Paramater {
  name = "Wsymb2";
  unit = Units.code;
  levelType = LevelType.hl;
  level = 0;
  values: [WeatherSymbols] = [0];
}

export enum WeatherSymbols {
  "Clear sky" = 1,
  "Nearly clear sky" = 2,
  "Variable cloudiness" = 3,
  "Halfclear sky" = 4,
  "Cloudy sky" = 5,
  Overcast = 6,
  Fog = 7,
  "Light rain showers" = 8,
  "Moderate rain showers" = 9,
  "Heavy rain showers" = 10,
  Thunderstorm = 11,
  "Light sleet showers" = 12,
  "Moderate sleet showers" = 13,
  "Heavy sleet showers" = 14,
  "Light snow showers" = 15,
  "Moderate snow showers" = 16,
  "Heavy snow showers" = 17,
  "Light rain" = 18,
  "Moderate rain" = 19,
  "Heavy rain" = 20,
  Thunder = 21,
  "Light sleet" = 22,
  "Moderate sleet" = 23,
  "Heavy sleet" = 24,
  "Light snowfall" = 25,
  "Moderate snowfall" = 26,
  "Heavy snowfall" = 27
}
