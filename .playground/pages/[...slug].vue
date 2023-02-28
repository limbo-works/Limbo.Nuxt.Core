<template>
	<div>
		<NuxtLayout :name="layout">
			<div class="text-center p-4 op-50">
				{{ $route.params.slug }}
			</div>
		</NuxtLayout>
	</div>
</template>

<script setup>
const route = useRoute();
const layout = 'default';

definePageMeta({
	layout: false,
	key: (route) => route.path,
});
</script>
