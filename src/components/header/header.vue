<template>
	<header class="flex items-center justify-between gap-12 py-4">
		<slot name="navbar" />
		<div class="flex-grow-1 flex items-center justify-end gap-4">
			<slot name="actions" />
		</div>
	</header>
</template>
