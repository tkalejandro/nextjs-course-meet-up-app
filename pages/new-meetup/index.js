import NewMeetupForm from "../../components/meetups/NewMeetupForm"
import { useRouter } from "next/router"
import Head from "next/head"

const NewMeetUpPage = () => {
    const router = useRouter()

    const addMeetUpHandler = async (enteredMeetUpData) => {
        //Because we are building or server side here in the same folder, we just need to write the url inside the api folder location, then the code it will be triggered.

        const response = await fetch("/api/new-meetup", {
            method: "POST",
            body: JSON.stringify(enteredMeetUpData),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json()

        console.log(data)
        //We install router next js to so after all this happen we transfer the use to the homepage. We can use replace() so user cant go back, or push() user can go back.

        router.push("/")
    }

    return (
        <>
            <Head>
                <title>Add a new MeetUp</title>
                <meta
                    name="description"
                    content="Add your own meetups and create amazing networking opportunities."
                />

            </Head>
            <NewMeetupForm onAddMeetup={addMeetUpHandler} />
        </>
    )
}

export default NewMeetUpPage