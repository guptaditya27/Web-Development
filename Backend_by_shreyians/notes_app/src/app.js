// server ko create krna kaam hai iss file ka .
const express=require("express")
const notemodel=require("./model/note.model")
const app=express()
app.use(express.json())
/*
const notes=[] // empty array notes 
const app=express()
// route of api -- http:localhost:3000/notes
// endpoint -- /notes
// http mtd- get()

app.use(express.json()) 
// middle ware use jo express ko capability deta hai ki json forma tmein jo data aarha hai use padh skee coming from body.
app.post('/notes',(req,res)=>{
    notes.push(req.body)
    res.status(201).json({message:"note created successfully"})
})

// post man api pe data bhejne ke kaam aata hai  wihtout frontend.
// fron end se data aarha usko acc ke liye request req use hoga .

app.get('/notes',(req,res)=>{
    res.status(200).json({
        message:"Notes Fetched Successfully",
        notes: notes
    })
})
// deleting note by index 
// route /delete/index.
// index is our path parameter here 
app.delete('/notes/:index',(req,res)=>{
    const index=req.params.index
    delete notes[index]
    res.status(200).json({
        message:"Node deleted Successfully"
    })
})

// update desc of note at index i.
app.patch("/notes/:index",(req,res)=>{
    const index=req.params.index
    const description=req.body.description
    notes[index].description=description
    res.status(200).json({
        message:"Note Updated Successfully"
    })
})
module.exports=app



/*
note={
    title: "my first note",
    description:"this is note description"
}
 
// user can create multiple notes so we store all notes in an array

const notes={
    {
    title: "my first note",
    description:"this is note description"
    },
    {
    title: "my second note",
    description:"this is note description"
    }
}

*/


// New Code with Mongo Db storage of Notes
/*
post/notes=> create a Note
get/notes =>gets all notes
Delete/notes/:id => deletes a note 
patch/notes/:id => update a note.  

*/
const notes=[]
app.post("/notes",async(req,res)=>{
    const data=req.body/* {title ,description} */
    await notemodel.create({
        title:data.title,
        description:data.description
    })
    res.status(201).json({
        message:"Note Created"
    })
})

app.get("/notes" ,async(req,res)=>{
    const notes=await notemodel.find();
    res.status(200).json({
        message:"Notes Fetched SuccessFully",
        notes:notes
    })

    // const notes=await notemodel.findOne({
    //     title:"test_title"
    // })

    // res.status(200).json({
    //     message:"Notes Fetched SuccessFully",
    //     notes:notes
    // })
    // notemodel.findone() ek single object return krti hai and `
})
// databse se jo data aarha hai saare notes ka usey mein array mein save krr rha hu notes array of objects.

/* find => [{},{},{}] array or arr of objects
    findone({
    data to search}) => object or null if not matched
*/

app.delete("/notes/:id",async (req,res)=>{
    const id=req.params.id
    await notemodel.findOneAndDelete({
        _id:id
    })
    res.status(200).json({
        message:"Node Deleted Successfully"
    })
})

app.patch("/notes/:id",async (req,res)=>{
    const id=req.params.id
    const description=req.body.description
    await notemodel.findOneAndUpdate({
        _id:id
        // kis parameter ke baiss pe record ko find krna hai.
    },{
        description:description
        // kya update krna hai .
    })
    res.status(200).json({
        message:"Note Updated Successfully"
    })
})






module.exports=app
