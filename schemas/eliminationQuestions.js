export default {
	title: 'Elimination Questions',
	name: 'eliminationQuestions',
	type: 'document',
	fields: [
		{
			title: 'Type of Question',
			name: 'typeOfQuestion',
			type: 'string',
		},
		{
			title: 'Questions',
			name: 'questions',
			type: 'array',
			of: [
				{
					type: 'eliminationItem',
				},
			],
		},
	],
}
