import { ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries, setCode } from "../store/countriesStore";
import { Autocomplete, TextField } from "@mui/material";
import { Country } from "../types/countries";

export function AutoComplete() {
  const dispatch = useDispatch<any>();
  const { countries, status, error } = useSelector(
    (state: any) => state.countries
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCountries());
    }
  }, [status]);

  function onChange(value: Country) {
    if (value) dispatch(setCode(value.Code));
  }

  return (
    <Autocomplete
      disablePortal
      disabled={status !== "succeeded"}
      options={countries}
      sx={{
        width: 300,
        "& .MuiInputBase-root": { backgroundColor: "rgb(255 255 255 / 0.07)" },
      }}
      getOptionLabel={(option: Country) => option.Name}
      onChange={(e: any, value: Country | null) => onChange(value)}
      renderInput={(params) => <TextField {...params} label="Country" />}
    />
  );
}
