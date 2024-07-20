import React, { useEffect, useRef, useState } from "react";
import "./Gigs.scss";
import GigCard from "../../components/gigCard/GigCard";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useLocation } from "react-router-dom";

function Gigs() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
      newRequest
        .get(
          `/gigs` // ${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}
        )
        .then((res) => {
          return res.data;
        }),
  });

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  useEffect(() => {
    refetch();
  }, [sort]);

  // useEffect(() => {
  //   console.log("Data length is: " + data.length())
  //   if (data === undefined) {
  //     console.log("loading res data from");
  //     data = newRequest.get(`/gigs`).then((res) => {
  //       return res.data;
  //     });
  //   }
  // }, [data]);

  const apply = () => {
    refetch();
  };

  return (
    <div className="gigs">
      <div className="container">
        {/* <span className="breadcrumbs">Liverr > Graphics & Design ></span> */}
        <h1>AI Artists (Kategorie)</h1>
        <p>
          Kategorie Beschreibung: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="von" />
            <input ref={maxRef} type="number" placeholder="bis" />
            <button onClick={apply}>Anwenden</button>
          </div>
          <div className="right">
            <span className="sortBy">Sortieren</span>
            <span className="sortType">
              {sort === "sales" ? "Beliebteste" : "Neuste"}
            </span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Neuste</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Beliebteste</span>
                )}
                <span onClick={() => reSort("sales")}>Meist Gebucht</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {isLoading
            ? "laden"
            : error
            ? "etwas ist schief gelaufen :("
            : data.map((gig) => <GigCard key={gig._id} item={gig} />)}
        </div>
      </div>
    </div>
  );
}

export default Gigs;
