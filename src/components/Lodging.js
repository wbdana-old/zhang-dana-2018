import React from 'react';
import { Container, Header, Card } from 'semantic-ui-react';
import Hotel from './Hotel';

const Lodging = () => {
  
  let hotels = [
    {
      name: "The Roxbury Motel",
      address: "2258 Co Rd 41, Roxbury, NY 12474",
      number: "(607) 326-7200",
      link: "www.theroxburymotel.com",
      email: "info@theroxburymotel.com"
    },
    {
      name: "Margaretville Mountain Inn",
      address: "1478 Margaretville Mountain Rd, Margaretville, NY 12455",
      number: "(845) 586-3933",
      link: "www.margaretvilleinn.com",
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
      link: "www.breezyhillinn.com",
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
      link: "www.colonialmotel.biz",
      email: "",
    },
    {
      name: "Queens Mountain Inn",
      address: "53470 New York 30, Roxbury, NY 12474",
      number: "(917) 304-8053",
      link: "www.queensmtninn.com",
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
      link: "www.scudderhillhouse.com",
      email: "scudderhillhouse@gmail.com"
    }
  ];


  return(
    <Container className='lodging'>
      <br /><br />

      <Header size='large'>Lodging and Accommodation</Header>
      <Card.Group itemsPerRow={3} doubling>
        {hotels.map( (hotel, id) => {
          return <Hotel hotel={hotel} key={id} />
        })}
      </Card.Group>
    </Container>
  )
};

export default Lodging;
