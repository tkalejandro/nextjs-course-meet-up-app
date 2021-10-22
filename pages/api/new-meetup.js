import { MongoClient } from "mongodb"

//ONLY POST  is triggered here
const handler = async (req, res) => {

    if (req.method === "POST") {
        const data = req.body
        const {title, image, address, description} = data


        const client = await MongoClient.connect("mongodb+srv://admin:adminadmin@cluster0.55hxa.mongodb.net/meetUps?retryWrites=true&w=majority")

        const db = client.db()

        //table
        const meetupsCollection = db.collection("meetups")
        const result = await meetupsCollection.insertOne({data})
        console.log(result)

        client.close()
        res.status(201).json({message: "MeetUp Inserted"})
    }

}

export default handler