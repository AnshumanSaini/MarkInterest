//Schema postedBy...
export default{
    name: 'postedBy',
    title: 'PostedBy',
    type: 'reference',
    to: [{type: 'user'}]
}