export default {
	title: 'Categories',
	name: 'categories',
	type: 'document',
	fields: [
		{
			title: 'Category Name',
			name: 'categoryName',
			type: 'string',
		},
		{
			title: 'Description',
			name: 'description',
			type: 'text',
		},
		{
			title: 'Image (please compress image and resize)',
			name: 'image',
			type: 'image',
		},
		{
			title: 'Questions',
			name: 'questions',
			type: 'array',
			of: [
				{
					type: 'questions',
				},
			],
		},
	],
}
