import React from "react";
import PrefooterItems from "./PrefooterItems";
import CachedIcon from "@mui/icons-material/Cached";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
const Prefooter = (props) => {
  return (
    <div className="d-flex justify-content-center align-items-center bg-white gap-5 py-3 my-5">
      <PrefooterItems
        Icon=<CachedIcon sx={{ fontSize: 50 }} />
        heading="Hassle-free replacement"
        contant="10-day easy replacement policy on mi.com"
      />
      <PrefooterItems
        Icon=<VerifiedUserOutlinedIcon sx={{ fontSize: 40 }} />
        heading="100% secure payments "
        contant="We support Cards, Wallets, EMI and COD"
      />
      <PrefooterItems
        Icon=<MapOutlinedIcon sx={{ fontSize: 40 }} />
        heading="Vast service network "
        contant="1000 Mi service-centers across 600 cities"
      />
    </div>
  );
};

export default Prefooter;
