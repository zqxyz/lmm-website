import React from "react";
import * as cheerio from "cheerio";
import axios from "axios";

const Alert802 = () => {

  const SCRAPE_URL = // file owned by zach@localmusclemovers.com
    "https://docs.google.com/document/d/e/2PACX-1vRqO28ffbcq3gq0IT-ml805l6A7R4ms4zPp7Dqp4chbz4NajMRuKfEeKdkbKjds0pyTktHAbmFmfUDg/pub";

  const [notice, setNotice] = React.useState("");

  React.useEffect(() => {
    axios(SCRAPE_URL)
      .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);

        $("#contents", html).each(function () {
          setNotice($(this).text());
        })
      }).catch(e => {/* die silently */ })
  }, [])


  return (
    <>
      {(notice !== "") ?
        <p style={{
          background: '#222',
          color: 'white',
          padding: '1em',
          fontWeight: '600',
          backgroundColor: 'rgb(139, 122, 56)'
        }}>
          {notice}
        </p>
        : ""}
    </>
  )
}

export default Alert802