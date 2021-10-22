
//import { getStaticProps } from ".."
import MeetUpDetail from "../../components/meetups/MeetUpDetail"


const MeetUpDetails = () => {
    return (

        <MeetUpDetail
            image="https://image.geo.de/30143558/t/Xj/v4/w1440/r0/-/-cartagena-m-eg695b-jpg--81730-.jpg"
            title="First Meeting"
            address="Some street somewhere"
            description="Here goes some description"
        />

    )
}
export const getStaticPaths = () => {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetUpId: "m1"
                }
            },
            {
                params: {
                    meetUpId: "m2"
                }
            },
            {
                params: {
                    meetUpId: "m3"
                }
            }
        ]
    }
}


export const getStaticProps = async (context) => {

    const meetUpId = context.params.meetUpId
    console.log(meetUpId)
    //Fetch Data

    return {
        props: {
            meetUpData: {
                id: meetUpId,
                image: "https://image.geo.de/30143558/t/Xj/v4/w1440/r0/-/-cartagena-m-eg695b-jpg--81730-.jpg",
                title: "First Meeting",
                address: "Some street somewhere",
                description: "Here goes some description"
            }
        }
    }
}

export default MeetUpDetails