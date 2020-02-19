/**
 * Given a list of Contacts, where each contact consists of a contact ID and a list of email IDs. 
 * Output a unique list of contacts by removing duplicates. Two contacts are considered to be the same, 
 * if they share at least one email ID.
 * 
 * [
 * 		[
 * 			'Andy': ['andy@linkedin.com', 'andy@outlook.com']
 * 		],
 * 		[
 * 			'Andy1': ['andy@linkedin.com', 'andy@gmail.com']
 * 		],
 * 		[
 * 			'Andy Work': [ 'andy@outlook.com' ]
 * 		],
 * 		[
 * 			'Bob': [ 'bob@outlook.com' ]
 * 		],
 * 		[
 * 			'Bob1': [ 'andy@outlook.com', 'bob@linkedin.com' ]
 * 		]
 * ]
 * 
 * Output: [	['Andy', 'Andy1', 'Andy Work']
 * 				['Bob', 'Bob1']
 * 		   ]
 */

const removeDuplicates = contacts => {
	const emails = new Map();
	const result = [];

	for (let contact of contacts) {
		for (let name in contact) {
			let emailArray = contact[name];

			for (let email of emailArray) {
				if (emails.has(email)) {
					// merge the contact

				} else {
					emails.set(email, [name])
				}
			}
		}
	}
}

const merge = (result, name) => {
	if (!result.length) {
		result.push[[name]];
	} else {
		for (let values of result) {
			
		}
	}
}