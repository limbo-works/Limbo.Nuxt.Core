<template>
	<div class="nuxt-app">
		<NuxtPage />
		<NuxtLink to="/da/"> Home </NuxtLink>

		<div class="group text-blue" data-hover="hover">
			<a href="#" class="group-focus-within:text-[white] p-1rem text-24">
				Text
			</a>
		</div>

		<NuxtLink to="/da/about"> About </NuxtLink>
		<NuxtLink to="https://www.limbo.works/"> External </NuxtLink>
	</div>
</template>
