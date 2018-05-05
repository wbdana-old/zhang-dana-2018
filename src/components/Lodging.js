import React from 'react';
import { Container, Header, Card } from 'semantic-ui-react';
import Hotel from './Hotel';

const Lodging = () => {

  let hotels = [
    {
      name: "The Roxbury Motel",
      address: "2258 Co Rd 41, Roxbury, NY 12474",
      number: "(607) 326-7200",
      link: "http://www.theroxburymotel.com",
      email: "info@theroxburymotel.com"
    },
    {
      name: "Margaretville Mountain Inn",
      address: "1478 Margaretville Mountain Rd, Margaretville, NY 12455",
      number: "(845) 586-3933",
      link: "http://www.margaretvilleinn.com",
      email: "margaretvilleinn@gmail.com"
    },
    {
      name: "Hanah Mountain Resort & Country Club",
      address: "576 W Hubbell Hill Rd, Margaretville, NY 12455",
      number: "(800) 752-6494",
      link: "https://www.hanahcountryresort.com/hotel",
      email: "info@hanahcountryresort.com"
    },
    {
      name: "Breezy Hill Inn",
      address: "835 Breezy Hill Rd, Fleischmanns, NY 12430",
      number: "(845) 254-5615",
      link: "http://www.breezyhillinn.com",
      email: "info@breezyhillinn.com"
    },
    {
      name: "River Run Bed & Breakfast",
      address: "882 Main St, Fleischmanns, NY 12430",
      number: "(845) 254-4884",
      link: "https://www.riverrunbedandbreakfast.com",
      email: "info@riverrunbedandbreakfast.com"
    },
    {
      name: "The Colonial Motel",
      address: "37283 State Highway 23, Grand Gorge, NY 12434",
      number: "(607) 588-6122",
      link: "http://www.colonialmotel.biz",
      email: "info@colonialmotel.biz",
    },
    {
      name: "Queens Mountain Inn",
      address: "53470 New York 30, Roxbury, NY 12474",
      number: "(917) 304-8053",
      link: "http://www.queensmtninn.com",
      email: "info@queensmtninn.com"
    },
    {
      name: "Susan's Pleasant Pheasant Farm",
      address: "1 Bragg Hollow Rd, Halcottsville, NY 12438",
      number: "(607) 326-4266",
      link: "https://www.hayakingnewyork.com",
      email: "reservations@kayakingnewyork.com"
    },
    {
      name: "Scudder Hill House",
      address: "24 County Hwy 8, Roxbury, NY 12474",
      number: "(607) 3226-7310",
      link: "http://www.scudderhillhouse.com",
      email: "scudderhillhouse@gmail.com"
    },
    {
      name: "Pine Hollow Lodging",
      address: "Margaretville, NY 12455",
      number: "(845) 586-1433",
      link: "http://www.pinehollowlodging.com/",
      email: "http://www.pinehollowlodging.com/inquiry-form.html"
    }
  ];


  return(
    <Container className='lodging'>
      <br /><br />

      <Header size='huge'>Lodging and Accommodation</Header>
      <p>If you would like to rent a house for the weekend, please see some options at <a href="https://www.homeaway.com/results/new-york/roxbury/region:6021/keywords:Roxbury%2C+NY%2C+USA/arrival:2018-10-05/departure:2018-10-08" target='_blank' rel="noopener noreferrer">HomeAway</a> or <a href="https://www.vrbo.com/vacation-rentals/usa/new-york/catskills/roxbury" target='_blank' rel="noopener noreferrer">VRBO</a>. In a pinch (though we do not recommend it), you could also try <a href="https://www.airbnb.com/s/Roxbury--NY--United-States/homes?refinement_paths%5B%5D=%2Fhomes&place_id=ChIJUQFIlctC3IkR3lhDcZDKsEM&query=Roxbury%2C%20NY%2C%20United%20States&allow_override%5B%5D=&s_tag=Z4E_ln5K" target='_blank' rel="noopener noreferrer">AirBnB</a>.<br />
      Otherwise, please check out some hotels and motels below.</p>
      <Card.Group itemsPerRow={3} doubling>
        {hotels.map( (hotel, id) => {
          return <Hotel hotel={hotel} key={id} />
        })}
      </Card.Group>
    </Container>
  )
};

export default Lodging;
