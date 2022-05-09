export default {
    name: 'brand',
    title: 'Brand',
    type: 'document',
    fields: [
        {
            name: 'brand_name',
            title: 'Brand',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
    ],
  };