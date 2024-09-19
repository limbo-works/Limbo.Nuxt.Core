<template>
	<div class="nuxt-app">
		<NuxtPage />
		<NuxtLink class="nuxt-app__title" to="/da/"> Home </NuxtLink>

		<div class="group text-blue" data-hover="hover">
			<a
				href="#"
				class="inline-block group-focus-within:text-[white] p-1rem text-24 >=1024:w-1000 <1024:w-[calc(100%-24px)] bg-black"
			>
				Text
			</a>
		</div>

		<NuxtLink to="/da/about"> About </NuxtLink>
		<NuxtLink to="https://www.limbo.works/"> External </NuxtLink>
	</div>
</template>

<script setup></script>

<style lang="postcss">
.nuxt-app {
	& .nuxt-app__title {
		@apply block py-12 font-bold;
	}
}
</style>
