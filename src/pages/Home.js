import React, { Children, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

import images from "../images";
import {
  ConnectButton,
  Icon,
  Select,
  DatePicker,
  Input,
  Button,
} from "web3uikit";

const Home = () => {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [destination, setDestination] = useState("New York");
  const [guests, setGuests] = useState(2);

  return (
    <>
      <div
        className='container'
        style={{ backgroundImage: `url(${images.frontpagebg3})` }}
      >
        <div className='containerGradient'></div>
      </div>

      <div className='topBanner'>
        <div className='logo'>
          <img src={images.airbnbRed} alt='logo' className='logo' />
        </div>

        <div className='tabs'>
          <div className='selected'>Places to Stay</div>
          <div>Experiences</div>
          <div>Online Experiences</div>
        </div>

        <div className='lrContainers'>
          <ConnectButton />
        </div>
      </div>

      <div className='tabContent'>
        <div className='searchFields'>
          <div className='inputs'>
            Location
            <Select
              defaultOptionIndex={0}
              onChange={(data) => setDestination(data.label)}
              options={[
                { id: "ny", label: "New York" },
                { id: "lon", label: "London" },
                { id: "db", label: "Dubai" },
                { id: "la", label: "Los Angeles" },
              ]}
            />
          </div>
          <div className='vl' />

          <div className='inputs'>
            Check In
            <DatePicker id='checkIn' onChange={(event) => setCheckIn(event)} />
          </div>
          <div className='vl' />

          <div className='inputs'>
            Check Out
            <DatePicker
              id='checkOut'
              onChange={(event) => setCheckOut(event)}
            />
          </div>

          <div className='vl' />

          <div className='inputs'>
            Guests
            <Input
              value={2}
              name='AddGuests'
              type='number'
              onChange={(e) => setGuests(+e.target.value)}
            />
          </div>

          <Link
            to='/rentals'
            state={{
              destination: destination,
              checkIn: checkIn,
              checkOut: checkOut,
              guests: guests,
            }}
          >
            <div className='searchButton'>
              <Icon fill='#fff' size={24} svg='search' />
            </div>
          </Link>
        </div>
      </div>

      <div className='randomLocation'>
        <div className='title'>Feel Adventurous</div>
        <div className='text'>
          Let us decide and discover new places to stay, live, work or just
          relax.
        </div>
        <Button
          text='Explore a Location'
          onClick={() => console.log(checkOut)}
        />
      </div>
    </>
  );
};

export default Home;
