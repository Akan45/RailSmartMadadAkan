import React from 'react';
import IRCTC from '../assets/images/IRCTC.png';
import TrainEnquiry from '../assets/images/Train-Enquiry.png';
import Reservation from '../assets/images/Reservation-logo.png';
import Retiring from '../assets/images/Retiring-room-logo.png';
import Freight from '../assets/images/Freight.png';
import Parcel from '../assets/images/Parcel.png';
import Railways from '../assets/images/Indian-Railways.png'; 
import Uts from '../assets/images/UTS-Ticketing.png';

const Section4 = () => {
  const services = [
    { img: IRCTC, alt: 'Ticket Booking', label: 'Ticket Booking', url: 'https://www.irctc.co.in/nget/train-search' },
    { img: TrainEnquiry, alt: 'Ticket Enquiry', label: 'Ticket Enquiry', url: 'https://enquiry.indianrail.gov.in/mntes/' },
    { img: Reservation, alt: 'Reservation Enquiry', label: 'Reservation Enquiry', url: 'https://www.indianrail.gov.in/enquiry/StaticPages/StaticEnquiry.jsp?StaticPage=index.html' },
    { img: Retiring, alt: 'Retiring Room Booking', label: 'Retiring Room Booking', url: 'https://rr.irctc.co.in/#/home' },
    { img: Railways, alt: 'Indian Railways', label: 'Indian Railways', url: 'https://indianrailways.gov.in/' },
    { img: Uts, alt: 'UTS Ticketing', label: 'UTS Ticketing', url: 'https://utsonmobile.indianrail.gov.in/login' },
    { img: Freight, alt: 'Freight Business', label: 'Freight Business', url: 'https://www.fois.indianrail.gov.in/RailSAHAY/index.jsp' },
    { img: Parcel, alt: 'Railway Parcel', label: 'Railway Parcel', url: 'https://parcel.indianrail.gov.in/' }
  ];

  return (
    <section className="mt-2" id="section4">
      <span id="sub-heading" className="animate-pulse text-center block text-2xl">RAIL MADAD</span>
      <span id="heading" className='text-center block text-4xl font-bold mt-2'>SERVICES</span>
      <div className="max-w-7xl mx-auto mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="text-center cursor-pointer" onClick={() => window.location.href = service.url}>
              <img src={service.img} alt={service.alt} className="mx-auto mb-2" style={{ width: '100px', height: '100px' }} />
              <p className="mt-2 text-black font-bold">{service.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;
