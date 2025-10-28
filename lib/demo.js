const { places } = require("./places");
const firstNamesMale =
  "Adam/Ben/Charles/Derrick/Ethan/Frank/Gustavo/Harold/Ivan/Jason/Kendrick/Logan/Michael/Nathan/Oscar/Peter/Quentin/Roger/Steve/Trevor/Umar/Vincent/Wyatt/Xavier/Yuri/Zack".split(
    "/"
  );

const firstNamesFemale =
  "Ashley/Bianca/Cynthia/Darlene/Erica/Francesca/Gabrielle/Hailey/Iris/Jennifer/Kayla/Lindsey/Mary/Nailah/Orla/Patty/Queen/Rachel/Sierra/Tamara/Ursula/Veronica/Whitney/Xena/Yara/Zelda".split(
    "/"
  );

const lastNames =
  "Anderson/Banks/Cyrus/Davidson/Eeastley/Fox/Graham/Hardison/Isley/Johnson/Kirkland/Larson/Mangrove/Nielsen/O'Connor/Preston/Quinlan/Rogers/Stark/Tyson/Underwood/Vickers/Wimbley/Xiao/Young/Ziegler".split(
    "/"
  );

const emailDomains =
  "gmail.com/aol.com/homtail.net/yahoo.com/spectrum.net".split("/");

const createUsers = (amt = 50) => {
  const users = [];
  for (let i = 0; i < amt; i++) {
    const age = Math.floor(10 + Math.random() * 90);
    const rand = age % 26;
    const third = rand % 3;
    const gender = ["male", "female", "non-binary"][third];
    const firstName = (
      gender === "male"
        ? firstNamesMale
        : gender === "female"
        ? firstNamesFemale
        : [firstNamesMale, firstNamesFemale][third % 2]
    )[rand];
    const getLastName = () => {
      const rand = Math.floor(Math.random() * lastNames.length);
      const payload = lastNames[rand];
      return payload === firstName ? getLastName() : payload;
    };
    const lastName = getLastName();
    const email = `${firstName.toLowerCase()}${
      ["", "_", "-"][third]
    }${lastName.toLowerCase()}@gmail.${["com", "net", "org"][third]}`;
    const phoneNum = Math.floor(1e9 + Math.floor(Math.random() * 9e9));
    const { area, prefix, line } = phoneNum
      .toString()
      .match(/(?<area>\d{3})(?<prefix>\d{3})(?<line>\d{4})/).groups;
    const phone = `(${area}) ${prefix}-${line}`;
    const wasUnconscious = rand % 2 === 0;
    const location = (i => `${i >= 10 && i < 20 ? i : ""} ${places[i]}`.trim())(
      Math.floor(Math.random() * places.length)
    );
    const user = {
      uuid: Date.now().toString(16) + phoneNum.toString(16),
      name: `${firstName} ${lastName}`,
      age,
      gender,
      email,
      phone,
      wasUnconscious,
      isVictim: true,
      injuries: {},
      location,
    };
    users.push(user);
  }
  console.log(users);
};

createUsers(20);

const user = {
  name: "John Doe",
  age: 25,
  gender: "male",
  email: "johndoe@gmail.com",
  phone: "(123) 456-7890",
  wasUnconscious: true,
  isVictim: true,
  injuries: {},
};
