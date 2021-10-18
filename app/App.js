import React from 'react';
import {render} from 'react-dom';

import KanbanBoard from './KanbanBoard';

let cardsList = [
	{
		id: 1,
		title: "doing the lab",
		description: "why not",
		color: '#BD8D31',
		status: "in-progress",
		tasks: [],
		comment: "Piece of Cake"
	},
	{
		id: 2,
		title: "Write some code",
		description: "coding is nice",
		color: '#3A7E28',
		status: "todo",
		tasks: [
			{
				id: 1,
				name: "ContactList Example",
				done: true
			},
			{
				id: 2,
				name: "Kanban Example",
				done: false
			},
			{
				id: 3,
				name: "My own experiments",
				done: false
			}
		],
		comment: "Piece of Cake"
	
	},
	{
		 id: 3,
		title: "Learn Node.js",
		description: "It might be useful",
		color: "#FFDC64",
		status: "todo",
		tasks: [
			{
				id: 1,
				name: "Find some tutorials", 
				done: false
			}
		]
	


	},
	{
		 id: 4,
		title: "Make tea",
		description: "I'm Hungry",
		color: "#FFDC64",
		status: "not-required",
		tasks: []
			
	

	}
	
];

render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));