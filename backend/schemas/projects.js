export default {
    name:'projects',
    title:'Projects',
    type: 'document',
    fields:[
        { 
            name:'project',
            title:'Project',
            type: 'string'
        },
        {
            name:'technologies',
            title:'Technologies, Frameworks, Libraries and Database',
            type:'string'
        },
        {
            name:'link',
            title:'Link',
            type:'url',
        },
        {
            name:'github',
            title:'Github Repository',
            type:'url',
        },
        {
            name:'image',
            type: 'figure',
         
        },  
        {
            name:'description',
            type:'richText',
          
        }
    ]
}