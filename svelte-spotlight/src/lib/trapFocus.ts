export function trapFocus(node: HTMLDivElement, results: unknown) {
	const getFocusableEls = () => {
		return Array.from(
			node.querySelectorAll(
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]'
			)
		) as HTMLElement[];
	};
	let focusableEls = getFocusableEls();
	let firstFocusableEl = focusableEls[0];
	let nextFocusableEl = focusableEls[1];
	const moveFocus = (e: KeyboardEvent) => {
		if (
			e.key === 'Tab' ||
			e.key === 'ArrowDown' ||
			e.key === 'ArrowUp' ||
			e.key === 'ArrowLeft' ||
			e.key === 'ArrowRight'
		) {
			const direction: 'forward' | 'backward' =
				e.shiftKey || e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? 'backward' : 'forward';
			console.log({ nextFocusableEl, direction });
			e.preventDefault();

			const nextIndex =
				focusableEls.indexOf(document.activeElement as HTMLElement) +
				(direction === 'forward' ? 1 : -1);
			nextFocusableEl =
				direction === 'forward'
					? nextIndex === focusableEls.length
						? firstFocusableEl
						: focusableEls[nextIndex]
					: nextIndex === -1
					? focusableEls[focusableEls.length - 1]
					: focusableEls[nextIndex];
			nextFocusableEl.focus();
		}
	};
	window.addEventListener('keydown', moveFocus);
	node.focus();
	return {
		destroy() {
			// window.removeEventListener('keydown', handleFirstTab);
			window.removeEventListener('keydown', moveFocus);
		},
		update() {
			focusableEls = getFocusableEls();
			firstFocusableEl = focusableEls[0];
			nextFocusableEl = focusableEls[1];
		}
	};
}
