import React from "react";
import { useParams } from "react-router-dom";

export default function OfferDetails() {
  const { offerId } = useParams();

  return <>{offerId}</>;
}
