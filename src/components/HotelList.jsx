import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotels } from "../feature/hotel/hotelSlice";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const HotelList = () => {
  const [query, setQuery] = useState("");
  const data = useSelector((state) => state.hotels);
  console.log(data, "data");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);

  const filterData = data?.hotels?.hotels?.filter( data => data.name.content.includes(query));
  return (
    <>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="search products"
        style={{ padding: 10 }}
      />
      <Card style={{ width: "18rem" }}>
        {filterData &&  filterData.map((hotel, index) => (
          <div key={index}>
            <Card.Img variant="top" src={hotel.images[0].path} />
            <Card.Body>
              <Card.Title>{hotel.name.content}</Card.Title>
              <Card.Text>{hotel.description.content}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </div>
        ))}
      </Card>

      {filterData && filterData.length === 0 && <h1>no data match found</h1>}
    </>
  );
};

export default HotelList;
