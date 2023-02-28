<template>
	<div class="nuxt-app">
		<NuxtPage class="data-hover" />
		<NuxtLink to="/da/"> Home </NuxtLink>

		<div class="group" data-hover="hover">
			<a href="#" class="group-data-hover:text-white">
				Text
			</a>
		</div>

		<NuxtLink to="/da/about"> About </NuxtLink>
		<NuxtLink to="https://www.limbo.works/"> External </NuxtLink>
	</div>
</template>
