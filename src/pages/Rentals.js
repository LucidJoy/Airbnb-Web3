import React from "react";
import "./Rentals.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

import images from "../images";
import { Button, ConnectButton, Icon } from "web3uikit";

const Rentals = () => {
  const { state } = useLocation();

  const rentalsList = [
    {
      attributes: {
        city: "New York",
        unoDescription: "3 Guests • 2 Beds • 2 Rooms",
        dosDescription: "Wifi • Kitchen • Living Area",
        imgUrl:
          "https://ipfs.moralis.io:2053/ipfs/QmS3gdXVcjM72JSGH82ZEvu4D7nS6sYhbi5YyCw8u8z4pE/media/3",
        lat: "40.716862",
        long: "-73.999005",
        name: "Apartment in China Town",
        pricePerDay: "3",
      },
    },
  ];

  return (
    <>
      <div className='topBanner'>
        <div>
          <Link to='/'>
            <img src={images.airbnbRed} alt='logo' className='logo' />
          </Link>
        </div>

        <div className='searchReminder'>
          <div className='filter'>{state?.destination}</div>
          <div className='vl' />

          <div className='filter'>{`
          ${state.checkIn.toLocaleString("default", { month: "short" })}
          ${state.checkIn.toLocaleString("default", { day: "2-digit" })}
          -
          ${state.checkOut.toLocaleString("default", { month: "short" })}
          ${state.checkOut.toLocaleString("default", { day: "2-digit" })}
          `}</div>
          <div className='vl' />

          <div className='filter'>{`${state?.guests} Guests`}</div>

          <div className='searchFiltersIcon'>
            <Icon fill='#fff' size={20} svg='search' />
          </div>
        </div>
        <div className='lrContainers'>
          <ConnectButton />
        </div>
      </div>

      <hr className='line' />
      <div className='rentalsContent'>
        <div className='rentalsContentL'>
          Stays available for your destination
          {rentalsList?.map((e) => {
            return (
              <>
                <hr className='line2' />
                <div className='rentalDiv'>
                  <img
                    src={e.attributes.imgUrl}
                    alt='pic'
                    className='rentalImg'
                  />
                  <div className='rentalInfo'>
                    <div className='rentalTitle'>{e.attributes.name}</div>
                    <div className='rentalDesc'>
                      {e.attributes.unoDescription}
                    </div>
                    <div className='rentalDesc'>
                      {e.attributes.dosDescription}
                    </div>
                    <div className='bottomButton'>
                      <Button text='Stay here' />
                      <div className='price'>
                        <Icon fill='#808080' size={10} svg='matic' />
                        {e.attributes.pricePerDay} / Day
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className='rentalsContentR'></div>
      </div>
    </>
  );
};

export default Rentals;
