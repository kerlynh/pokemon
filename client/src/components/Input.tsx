import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { setCity } from "../store/countriesStore";
import { ChangeEvent, useEffect, useState } from "react";

export function InputField() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  useEffect(() => {
    const city = setTimeout(() => {
      dispatch(setCity(value));
    }, 1000);

    return () => clearTimeout(city);
  }, [value]);
  return (
    <TextField
      id="outlined-basic"
      label="City"
      variant="outlined"
      sx={{
        width: 300,
        "& .MuiInputBase-root": { backgroundColor: "rgb(255 255 255 / 0.07)" },
      }}
      onChange={onChange}
    />
  );
}
