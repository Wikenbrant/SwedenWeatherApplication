import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

interface Props {
  setlatitude: (newLatitude: number) => void;
  setlongitude: (newLatitude: number) => void;
}

const SearchField: React.FC<Props> = ({ setlatitude, setlongitude }) => {
  const [value, setValue] = useState({ value: "SE-AB", label: "Stockholm" });

  useEffect(() => {
    const path = document.querySelector(`#${value.value}`);
    if (path) {
      const latitude = +path.attributes.getNamedItem("data-latitude")!.value;
      const longitude = +path.attributes.getNamedItem("data-longitude")!.value;

      setlatitude(latitude);
      setlongitude(longitude);
    }
  }, [setlatitude, setlongitude, value]);
  return (
    <Autocomplete
      id="search"
      options={regions}
      value={value}
      onChange={(
        event: any,
        newValue: { value: string; label: string } | null
      ) => {
        if (newValue) {
          setValue(newValue);
        }
      }}
      getOptionLabel={option => option.label}
      renderInput={params => <TextField {...params} label="Regions" />}
    />
  );
};

export default SearchField;

const regions = [
  { value: "SE-K", label: "Blekinge" },
  { value: "SE-W", label: "Dalarna" },
  { value: "SE-X", label: "Gävleborg" },
  { value: "SE-I", label: "Gotland" },
  { value: "SE-N", label: "Halland" },
  { value: "SE-Z", label: "Jämtland" },
  { value: "SE-F", label: "Jönköping" },
  { value: "SE-H", label: "Kalmar" },
  { value: "SE-G", label: "Kronoberg" },
  { value: "SE-BD", label: "Norrbotten" },
  { value: "SE-T", label: "Örebro" },
  { value: "SE-E", label: "Östergötland" },
  { value: "SE-M", label: "Skåne" },
  { value: "SE-D", label: "Södermanland" },
  { value: "SE-AB", label: "Stockholm" },
  { value: "SE-C", label: "Uppsala" },
  { value: "SE-S", label: "Värmland" },
  { value: "SE-AC", label: "Västerbotten" },
  { value: "SE-Y", label: "Västernorrland" },
  { value: "SE-U", label: "Västmanland" },
  { value: "SE-O", label: "Västra Götaland" }
];
