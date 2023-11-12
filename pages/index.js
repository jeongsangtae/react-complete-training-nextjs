import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Hong_Kong_Harbour_Night_2019-06-11.jpg/1200px-Hong_Kong_Harbour_Night_2019-06-11.jpg",
    address: "Some address 1, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://img.seoul.co.kr/img/upload/2021/07/01/SSI_20210701011421_O2.jpg",
    address: "Some address 2, 12345 Some City",
    description: "This is a second meetup!",
  },
  {
    id: "m3",
    title: "A third meetup",
    image: "https://dimg.donga.com/wps/NEWS/IMAGE/2021/10/16/109734784.1.jpg",
    address: "Some address 3, 12345 Some City",
    description: "This is a third meetup!",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
