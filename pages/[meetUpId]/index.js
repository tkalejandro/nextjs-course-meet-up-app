
//import { getStaticProps } from ".."
import { MongoClient, ObjectId } from "mongodb"
import MeetUpDetail from "../../components/meetups/MeetUpDetail"
import Head from "next/head"


const MeetUpDetails = (props) => {
    console.log("MEETUP DETAILS-------->", props.meetUpData)
    return (
        <>
            <Head>
                <title>{props.meetUpData.title}</title>
                <meta
                    name="description"
                    content={props.meetUpData.description}
                />

            </Head>
            <MeetUpDetail
                image={props.meetUpData.image}
                title={props.meetUpData.title}
                address={props.meetUpData.address}
                description={props.meetUpData.description}
            />
        </>
    )
}
export const getStaticPaths = async () => {
    //CONNECT TO MOONGO!
    const client = await MongoClient.connect("mongodb+srv://admin:adminadmin@cluster0.55hxa.mongodb.net/meetUps?retryWrites=true&w=majority")
    const db = client.db()
    const meetupsCollection = db.collection("meetups")
    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray()

    client.close()


    return {
        fallback: false,
        paths: meetups.map(meetup => ({
            params: {
                meetUpId: meetup._id.toString()
            }
        }))
    }
}


export const getStaticProps = async (context) => {

    const meetUpId = context.params.meetUpId
    console.log(meetUpId)
    //Fetch Data
    const client = await MongoClient.connect("mongodb+srv://admin:adminadmin@cluster0.55hxa.mongodb.net/meetUps?retryWrites=true&w=majority")
    const db = client.db()
    const meetupsCollection = db.collection("meetups")
    console.log("MEETUP COLLECTION-------->", meetupsCollection)

    //!THIS IS SUPPOSE TO WORK BUT IT DOESNT
    const selectedMeetUpToShow = await meetupsCollection.findOne({ _id: ObjectId(meetUpId) }) //This change the version same to MoongoDB

    //const showMeTheData = await meetupsCollection.find().toArray()
    //console.log("SHOW ME THE DATA-------------_>", showMeTheData)
    //console.log("index0-->", showMeTheData[0]._id.toString()) --> This give the correct ID same as params.
    //const selectedMeetUpToShow = showMeTheData.find(data => data._id.toString() === meetUpId)
    //console.log("SELECTED MEETUP ---------->", selectedMeetUpToShow)

    client.close()

    return {
        props: {
            meetUpData: { ...selectedMeetUpToShow.data, id: selectedMeetUpToShow._id.toString() } //Lets give the ID inside DATA!
        }
    }
}

export default MeetUpDetails