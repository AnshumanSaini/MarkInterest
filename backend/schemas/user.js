//Schema User...
export default {
    name: 'user',
    type: 'document',
    title: 'User',
    fields: [
        {
            name: 'userName',
            title: 'UserName',
            type: 'string'
        },
        {
            name: 'image',
            title: 'ImageName',
            type: 'string'
        }
    ]
}
