import { tick } from 'svelte';
export function portal(node: HTMLElement, usePortal: boolean) {
	async function update(usePortal: boolean) {
		if (!usePortal) {
			return;
		}
		let targetNode: Document['body'] = document.body;
		if (targetNode === null) {
			await tick();
			targetNode = document.body;
		}

		if (targetNode) {
			targetNode.appendChild(node);
			node.hidden = false;
		}
	}
	function destroy() {
		if (node.parentNode) {
			node.parentNode.removeChild(node);
		}
	}
	update(usePortal);
	return {
		update,
		destroy
	};
}
