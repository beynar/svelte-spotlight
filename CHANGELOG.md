<!-- Changelog for v2 -->

## [v2.0.0] - 2023-29-08

### Improvement

- It is now possible to import the component directly from the package like this = `import SvelteSpotlight from 'svelte-spotlight';`
- Add focus trap and simpler but better logic for keyboard navigation, relaying more on native platform behavior.
- Detect browser by using esm-env.
- Add possibility to portal the spotlight into the document body.
- Add itemClass prop to add a class to the rendered button list items.

### Breaking

- Remove the option to choose the html element to use for the list and option tags. The list will always be a ul and the options will always be button.
- sl-results-list classname is now sl-list
- sl-results-item classname is now sl-item
- New feature

### Patch

- Add global directive to transition in order for them to run.
