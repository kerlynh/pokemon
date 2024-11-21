import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export function CardWeather() {
  const { weather, status } = useSelector((state: any) => state.weather);

  return (
    status === "succeeded" && (
      <Card
        sx={{ maxWidth: 275, borderRadius: 3, position: "absolute", top: 0 }}
        className="hidden lg:flex"
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ color: "text.primary", fontSize: 40 }}>
              {Math.trunc(weather?.main?.temp)}°C
            </Typography>
            <CardMedia
              component="img"
              sx={{ width: 100 }}
              image={`${import.meta.env.VITE_OPENWEATHER_IMG}/img/wn/${
                weather?.weather?.icon
              }@2x.png`}
              alt={weather?.weather?.description}
            />
          </Box>
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: 30,
              fontWeight: "bold",
              mb: 1.5,
            }}
          >
            {weather?.name}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <Typography
              variant="body2"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <ArrowDownwardIcon sx={{ color: "#3f51b5" }} />
              {Math.trunc(weather?.main?.temp_min)}°C
            </Typography>
            <Typography
              variant="body2"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <ArrowUpwardIcon sx={{ color: "#f44336" }} />
              {Math.trunc(weather?.main?.temp_max)}°C
            </Typography>
          </Box>
        </CardContent>
      </Card>
    )
  );
}
