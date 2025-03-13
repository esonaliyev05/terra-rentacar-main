import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingAnimation from "../loading";
import { Link } from "react-router-dom";

function Locations() {
  const Forimage = "https://realauto.limsa.uz/api/uploads/images";
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cities , setCities] = useState([]);
  useEffect(() => {
    axios
      .get("https://realauto.limsa.uz/api/locations")
      .then((response) => {
        setLocations(response?.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching brands:", error);
      });
  }, []);

    useEffect(() => {
      axios
        .get("https://realauto.limsa.uz/api/cities")
        .then((response) => {
          setCities(response?.data?.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching brands:", error);
          setLoading(false);
        })
    }, []);
  console.log(cities?.data);

  const city = cities?.slice(0 , 3);
  const loc = locations?.slice(0 , 3);

  return loading ? (
    <LoadingAnimation />
  ) : (
    <div>
      <section
        id="locations"
        className="container max-w-screen mx-auto py-8 bg-[#1E1F27]"
      >
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-white text-3xl pb-4">LOCATION</h1>
              {loc?.map((location) => (
                <Link to={"/cars"} key={location?.id}>
                  <p className="text-[#A5A593] flex">{location?.text}</p>
                  <p className="text-[#A5A593] flex">{location?.name}</p>
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-white text-3xl pb-4">CITY</h1>
              {city?.map((location) => (
                <Link to={"/cars"} key={location?.id}>
                  <p className="text-[#A5A593] flex">{location?.text}</p>
                  <p className="text-[#A5A593] flex">{location?.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Locations;
