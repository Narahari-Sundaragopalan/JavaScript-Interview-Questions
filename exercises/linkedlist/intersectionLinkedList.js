const getIntersectionNode = (headA, headB) => {
	let ptrA = headA;
	let ptrB = headB;

	while (ptrA !== ptrB) {
		ptrA = ptrA !== null ? ptrA.next : headB;
		ptrB = ptrB !== null ? ptrB.next : headA;
	}

	return (ptrA === ptrB && ptrA !== null) ? ptrA : null;
}
/**
 * Time Complexity: O (m + n);
 * Space Complexity: O(1)
 */