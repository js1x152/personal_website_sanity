const page = {
    name: "page",
    title: "Pages",
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,

            },
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {hotspot: true},
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{type: "block"}],
        },
    ],
};

export default page;