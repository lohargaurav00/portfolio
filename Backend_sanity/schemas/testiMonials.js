export default{
    name: "testimonials",
    title: "testimonials",
    type: "document",
    fields: [{
        name: "name",
        title: "Name",
        type: "string",
    },
    {
        name: "company",
        title: "Company",
        type: "string",
    },{
        name: "imgUrl",
        title: "ImgURL",
        type: "image",
        options :{
            hotspot : true
        }
    },{
        name: "feedback",
        title: "Feedback",
        type: "string",
    },
    
]
}