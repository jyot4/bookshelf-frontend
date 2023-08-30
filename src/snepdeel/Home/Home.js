import React from "react"
import requests from "./requests"
import Row from "./Row/Row"
import Banner from "./Banner/Banner"

function Home() {
 



  return (
    <>
        <Banner/>
      <Row endpoint={requests.fetchmostpopular} heading=" Most Popular" />
      <Row endpoint={requests.fetchflower} heading=" Flower Books" />
      <Row endpoint={requests.fetchfantasy} heading="Fantasy Books" />
      <Row endpoint={requests.fetchromance} heading="Romance Books" />
      <Row endpoint={requests.fetchpoetry} heading="Poetry Books" />
    </>
  )
}

export default Home