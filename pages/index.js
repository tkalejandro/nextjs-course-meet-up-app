import MeetUpList from "../components/meetups/MeetupList"

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "some Title",
    image: "https://image.geo.de/30143558/t/Xj/v4/w1440/r0/-/-cartagena-m-eg695b-jpg--81730-.jpg",
    address: "Cartagena old City",
    description: "Here goes some description"
  },
  {
    id: "m2",
    title: "meet up 2",
    image: "https://image.geo.de/30143558/t/Xj/v4/w1440/r0/-/-cartagena-m-eg695b-jpg--81730-.jpg",
    address: "Cartagena old City",
    description: "Here goes some description"
  },
  {
    id: "m3",
    title: "meet up 3",
    image: "https://image.geo.de/30143558/t/Xj/v4/w1440/r0/-/-cartagena-m-eg695b-jpg--81730-.jpg",
    address: "Cartagena old City",
    description: "Here goes some description"
  }

]
const HomePage = (props) => {


  return (
    <>

      {/* This MeetUpList Component is taking an array as a prop and map it inside. */}
      <MeetUpList meetups={props.meetups} />


    </>
  );
};
//This is executed in build process not in server and not in client.

// export async function getStaticProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export const getStaticProps = async () => {
  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  }
}
export default HomePage;
