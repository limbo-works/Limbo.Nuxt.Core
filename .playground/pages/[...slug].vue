<template>
	<div>
		<NuxtLayout :name="layout">
			<div class="text-center p-4 opacity-100">
				{{ $route.params.slug }}
			</div>
		</NuxtLayout>
	</div>
</template>

<script setup>
const route = useRoute();
const layout = 'default';

console.log(useGUID(), useNumberId());

definePageMeta({
	layout: false,
	key: (route) => route.path,
});
</script>
