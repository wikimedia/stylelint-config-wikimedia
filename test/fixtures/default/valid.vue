<!-- This file exists to prove that we can parse Vue files; no Vue-specific rules -->
<template>
</template>

<script>
</script>

<style>
	a {
		/* Off: stylistic/max-line-length */
		content: 'hello this is a very silly, indeed ludicrously long line of text that would get set as the content block for something mostly to test out the line length';
	}

	/* Off: media-query-no-invalid */
	@media ( width = 100px ) {
		/* This comment is here to prevent no-empty-source errors */
	}
</style>
