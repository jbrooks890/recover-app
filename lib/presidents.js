const presidents = [
  "Adams",
  "Arthur",
  // "Biden",
  "Buchanan",
  "Bush",
  "Carter",
  "Cleveland",
  "Clinton",
  "Coolidge",
  "Eisenhower",
  "Fillmore",
  "Ford",
  "Garfield",
  "Grant",
  "Harding",
  "Harrison",
  "Hayes",
  "Hoover",
  "Jackson",
  "Jefferson",
  "Johnson",
  "Kennedy",
  "Lincoln",
  "Madison",
  "McKinley",
  "Monroe",
  "Nixon",
  // "Obama",
  "Pierce",
  "Polk",
  "Reagan",
  "Roosevelt",
  "Taft",
  "Taylor",
  "Truman",
  "Tyler",
  "Van Buren",
  "Washington",
  "Wilson",
];

const localeTypes =
  "Grove/St/Park/Dale/Blvd/Creek/Road/Ave/Glade/Mills/Lake/Drive/Parkway".split(
    "/"
  );

const createFakePlaces = (amt = 20) => {
  const places = [];
  const usedNames = new Set();
  const getName = (count = 0) => {
    const rand = Math.floor(Math.random() * presidents.length);
    let payload = presidents[rand];
    // console.log({ payload });
    const isInvalid = usedNames.has(payload) && count < 2;
    if (isInvalid) {
      payload = getName(count + 1);
    } else {
      usedNames.add(payload);
    }
    return payload;
  };

  const getPlace = (count = 0) => {
    const rand = Math.floor(Math.random() * localeTypes.length);
    const locale = localeTypes[rand];
    const name = getName();
    console.log({ name });
    const place = `${name} ${locale}`;
    if (places.includes(place) && count < 3) {
      getPlace(count + 1);
    } else {
      return place;
    }
  };

  for (let i = 0; i < amt; i++) places.push(getPlace());
  console.log(places);
};

createFakePlaces();
