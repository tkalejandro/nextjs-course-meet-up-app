import { MongoClient } from "mongodb"
import MeetUpList from "../components/meetups/MeetupList"

//NEXT JS will detect what is backend or what is frontend


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
  //Connect to MongoDB
  const client = await MongoClient.connect("mongodb+srv://admin:adminadmin@cluster0.55hxa.mongodb.net/meetUps?retryWrites=true&w=majority")
  const db = client.db()
  const meetupsCollection = db.collection("meetups")
  const meetups = await meetupsCollection.find().toArray()
  //console.log("MEET UPS------->", meetups)
  client.close()
  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.data.title,
        address: meetup.data.address,
        image: meetup.data.image,
        //ERROR SERIALIZING .meetups[0]._id
        //Is an object, thats why we do it this way, and then we make a string.
        id: meetup._id.toString()

      })),
      //meetups: DUMMY_MEETUPS
    },
    //Wait 10 seconds! and regenerate new data.
    //3600 Hour
    //1 second
    revalidate: 1
  }
}

// export const getServerSideProps = async (context) => {
//   const req = context.req
//   const res = context.res

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }


export default HomePage;
