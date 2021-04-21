import React from "react";
import "./Journal.css";

import imgs from './images/Images'
import Entry from './components/JournalEntry'

const entries = [
  {
    place: 'LONDON & EDINBURGH',
    date: '03.2020',
    images: imgs[0]
  },
  {
    place: 'SAN FRANCISCO',
    date: '01.2020',
    images: imgs[1]
  },
  {
    place: 'LOS ANGELES',
    date: '01.2020',
    images: imgs[2]
  },
  {
    place: 'DAY N VEGAS',
    date: '11.2019',
    images: imgs[3]
  },
  {
    place: 'JAPAN',
    date: '05.2019',
    images: imgs[4]
  }
]

export default function Journal() {
  return (
    <div className="journal-page">
      {entries && (
        entries.map((entry) => (
          <Entry
            entryInfo={entry}
          />
        ))
      )}
    </div>
  );
}
