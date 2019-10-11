import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

export default function CardHolder() {
    let today = new Date();
    let date = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
    let dateFormat = `${today.getMonth()+1}-${today.getDate()}-${today.getFullYear()}`
    console.log(today.getMonth())
    const [formData, setFormData]= useState(date)
  const [apod, setApod] = useState([]);
//   const [imgDate, setimgDate] = useState();

  useEffect(() => {
      
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=nKU1ijTbpGXRXzssZ1jZch0cwu2SkMW1lRgFl440&date=${formData}`
      )
      .then(response => {
        console.log(response);
        setApod(response.data);
      })
      .catch(error => {
        console.log("Houston we have a problem", error);
      });
  }, [formData]);

  return (
    <div className="container">
      <PhotoCard
        dateFormat={dateFormat}
        setFormData={setFormData}
        title={apod.title}
        imgUrl={apod.hdurl}
        description={apod.explanation}
        date={apod.date}
      />
    </div>
  );
}
