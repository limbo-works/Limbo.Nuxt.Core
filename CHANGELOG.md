# Changelog

## [6.0.2](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/nuxt-core-v6.0.1...nuxt-core-v6.0.2) (2026-03-30)


### Bug Fixes

* reverted nuxt.config ([0737fd3](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/0737fd36ca097cd12821956de15f78980bf8563e))

## [6.0.1](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/nuxt-core-v6.0.0...nuxt-core-v6.0.1) (2026-03-30)


### Bug Fixes

* 2.0.1 refer typescript ([8644b65](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/8644b658e98ec6e4155bde376492c956f9147c84))

## [6.0.0](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/nuxt-core-v5.3.8...nuxt-core-v6.0.0) (2026-03-30)


### ⚠ BREAKING CHANGES

* upgraded to Nuxt 4
* update as breaking
* updated useLimboForm with populate instead of populateFromQuery
* remove nuxt proxy
* now it's know that the unocss things are modules
* removed `unocss`

### Features

* add default compression to assets ([0ceffb7](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/0ceffb7a86e1514ac321d23c86957348f59c07ed))
* added a bunch of configs and basic setup ([f1dcb2c](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/f1dcb2c49face36f258cf971c1fc688f5ba58d71))
* added address rule to preflight to not make italic ([6594f52](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/6594f529abf183888d69aa7b042a2da2f5616470))
* added composable `useEventBus` ([977f02a](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/977f02a8feea15077f899b6859ca8e3be4e2f16f))
* added composable `useEventListener` ([98ac162](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/98ac1622233cb14ab25234c032d8c342bc0f8d08))
* added configuration for svgo ([508a8c9](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/508a8c9db950612554d0abca7fd1b4113ab77be9))
* added correct configs ([ec4cdfb](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/ec4cdfba9315692da29a85ead0bf619f60b5c76c))
* added env-controlled debug mode ([b3a0651](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/b3a065104edec5e62eaed1f7324ad618dfa62951))
* added helper functions ([888f1a7](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/888f1a77899163316305dfc1badd342b8dfbaffe))
* added image module to core ([eac9f2b](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/eac9f2b053220a42022abcebcde604692c3eea64))
* added overwrite of vue in package json ([ea90f78](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/ea90f7836dfbb9a3d417b2801abfbf91130effc5))
* added overwrites to uno ([992b7b5](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/992b7b58320645d4f8fcb2bdfdd8a686927e2549))
* added port handling to nuxt config ([ae357f1](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/ae357f183e050c55f2bba30424124f252cdcabef))
* added release-please ([0ee8215](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/0ee8215f24b6ca592e3c59abf55a28aba9b9552b))
* added useAppHost composable ([facd870](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/facd870723c83419f178570aeeb9d25021446d1a))
* added useAttrsExcept and useAttrsSome ([64bde25](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/64bde258ad88595fa2355ab17f1183e61f197514))
* added useLimboForm composable ([ed73c18](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/ed73c180346efba473f1768491b254f75826672d))
* added vite config ([f465661](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/f465661335d1096a21d4e89a792460fcc7225da3))
* bad idea, removed tailwind again ([83c6aba](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/83c6aba2dc23179e1ff0e7b4dd803b37114134ed))
* enhance field value and checked state management ([0c3fbe2](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/0c3fbe26f3efbbef838f191c25c73db702607076))
* hyphens in preflight CSS ([67c7586](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/67c7586298e6195dbf072ec330d464744651d52b))
* implement enrichMagicKeys option in useLimboForm ([50b3a59](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/50b3a59dde48678fe6703d7c63a2270039cd79b2))
* improved useLimboForm a bit ([b0504b5](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/b0504b5f4bac56dee8b31bf5d8a19fa70adb17ba))
* moved some composables to core ([b88081d](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/b88081d4203bf1f8ae70e3466ceb5f3de9bb5569))
* not defaulting to important rules ([1fa9795](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/1fa97956ea52b4a6d26d32768805110965875674))
* reduced the tailwind configs ([75d9f59](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/75d9f596105f194d4adeb1836a89fdc86cded6b1))
* remove nuxt proxy ([0788293](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/078829317b909da7393994ad13d2906d8cdb9655))
* restructured dependencies ([17ee7eb](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/17ee7eb0da5736d0267ce8397cfaa7b3c48b9d17))
* slight restructuring ([1496b84](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/1496b849ba719f43392c3f3dd7de221ef5b20976))
* switched tailwind for unocss ([8e5781e](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/8e5781e85ad5d36c7db5b6242292d191f8154e58))
* uno transformers in config instead of preset ([48373b5](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/48373b57ae20e5ba35e898473e4b950312a38583))
* update as breaking ([29f1b27](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/29f1b2790a10a939700c0df0623e349e0dd02962))
* updated lint configs ([6563f27](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/6563f27bb583adf2e8d4c7db9b9f6845dabee94a))
* updated packages ([ea8e17e](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/ea8e17e080c9ef0777c63745ce0b8f972275fa5a))
* updated unocss preset with default transformers ([ab1d6af](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/ab1d6af2381d5203b41078408fbbf0e13d7f7ae1))
* updated useLimboForm and added some backward compat ([379b44b](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/379b44bfe99e1a1be0cf8849f3456c53682fb792))
* updated useLimboForm with populate instead of populateFromQuery ([3ad8323](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/3ad8323a00be728d1eacb44ce2549544579bc1af))
* upgraded appHistory ([9ce73f9](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/9ce73f9df54c1b0f88c6a85a2a948f40834b044d))
* upgraded packages to latest packages ([cd167ed](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/cd167edad539bde756a57bd0afbafe56675b4fdf))
* upgraded to Nuxt 4 ([02d3c04](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/02d3c04b8bc0624f698957552a8ff3e82408e3ee))
* **useLimboForm:** updated items handling on ([66f8a2d](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/66f8a2db6bb17b76cd0530e1f847fcb3c4267bda))
* various ID generation utilities ([dd233b6](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/dd233b6c3a80275fd9fffa6b958ab7b0bf8fce77))


### Bug Fixes

* added `unocss` dependency ([cb97269](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/cb97269d586cd7fbfb267741c7833efead599849))
* added a bit to tailwind config ([3b18d1d](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/3b18d1d83e8d590671090dbc4ab7cc6308220954))
* added auth token again ([729fca8](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/729fca87fd5daa00b726a55ac1a9373e9302394f))
* added postcss plugin `postcss-nesting` ([b84295e](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/b84295ece9202d47411a10cdd6bc75c588f8a9ff))
* added second argument and warning to useAttrs- functions ([9e658d2](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/9e658d2c2b001d930cda99e813d631ebc973f7af))
* added some cleanup to aid against memory leaks ([0a49df0](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/0a49df0d8b7bb5a2d5e1ca7a8e8e73182a8d98f7))
* added some content to tailwind.config ([ae3b3a3](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/ae3b3a38e37f3f3c3fb23f262d072ffc046eb603))
* added some missing default tailwind values ([bbbf21f](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/bbbf21fc8b64bf9f17a669904b83ba1cfb059a21))
* added some off-hooking for useEventBus ([1fcdfd2](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/1fcdfd20673ec36e2138ed329751fccccdc87f04))
* added some state management to useGUID and useNumberId ([d54450e](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/d54450eff023c8f1b831a015cc4fb660f9a24c0d))
* added some timeout cleanup for useEventListener ([4c316d6](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/4c316d6d76b744d115cc87bd9b8826ee04871fa3))
* added tryOnScopeDispose ([6b5fc06](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/6b5fc06409386a7c5667701ac263c0ca2c64ce93))
* allow release-please to build ([1619ff1](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/1619ff12986e246ff3c721c57117b00cf4125a96))
* another null check ([67fa5c1](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/67fa5c13d09d132df73a423ca1156ce935656a49))
* apparently the dependency for image edge is needed ([0bce4d0](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/0bce4d04baedbdbadc468c2be000efc3075016bd))
* better defaultValue setup ([4596ca6](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/4596ca64d9d9ddd804f0d922defc51423e1a643c))
* better handling of breakpoints ([41cfdf8](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/41cfdf8892db6ff2704316be1b777b5ff9801b92))
* changed reference to preset-wind ([3393c27](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/3393c27a31b6363fffa6a69514c7628e50c9be48))
* cleanup ([4bb0441](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/4bb0441cc1489ad5b2c319ec241aa5a9cf0b4531))
* completed renaming ([4557e6f](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/4557e6f923882d72c474109801b26924e1265f01))
* default spacing value to avoid issues ([926e003](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/926e003cc7c72ec4917543c34f91cf8a0770e121))
* event bus fixes ([fe2c020](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/fe2c0207c7184741a9dd08fef603d759faf2df03))
* fixed rem-calculation for fonts ([f231de1](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/f231de1aef70ecfe2f7db872c562d61be6e0411a))
* improved app history composable slightly ([d52335c](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/d52335cc2e9cae69382db1a7f1fc62af3b77dc45))
* made default value allow multiple checked ([5365719](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/53657196aa7bd7f490a3ca971230bdca3a029211))
* made docs ignored in templates ([624deeb](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/624deeb3d2984572057bcd9e5e9002384d98605b))
* made GUID and number id composables non-reliant on useId ([bcfbe06](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/bcfbe063dce459b3d56b3be6626e83ac306d48f1))
* made transformers not part of the preset ([2ca095b](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/2ca095b4530c0740e856100422ddd0cb0e2db6e9))
* memory leak in eventBus ([9469576](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/946957626af5ff9190c3b9e281e0080d8b8664ac))
* minor cleanup ([a578b5b](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/a578b5b66933cb7350404b7fd2f51565983598cf))
* minor extra default css ([3197bc4](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/3197bc4856495d03e8a6f8219c3aeb9fc17851ac))
* minor tweak to tailwind config ([19b207d](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/19b207ddf9f534645b1be2a3475d78fab3074582))
* more package changes ([8890fc1](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/8890fc15dae2dec670baa32337984c1e12997eed))
* moved default presets as well ([7182235](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/718223513c456b391067b29b10cd35719398ad70))
* moving tailwind to dev and cleaning up ([cd8616c](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/cd8616ca6094569a76f119478d6c3b6fbe067816))
* node version ([c2c69a3](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/c2c69a331e8acc5d373792143918384ca68e2d17))
* now it's know that the unocss things are modules ([d17d5a0](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/d17d5a019a9c1ee6059ef4e02ae95bd8d754ce0f))
* other way around ([adf88c6](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/adf88c69c7f019fa3dac02305d4054ffaefbf1ce))
* position should be null when app history isnt ready ([3241a44](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/3241a44cfc070eabe22222cf53a4c6301764e815))
* preset core fix 2 ([fdbe1bd](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/fdbe1bd52f808f83c6f97392b8245ce6eb348cc1))
* preset-core media query error ([b6f84d4](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/b6f84d4cc65c16de269421fd279b61199316fe41))
* proper default value fallback for items in useLimboForm ([9b4d17e](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/9b4d17ec01649a3da24d791ce5b00cb10a517730))
* re-added npmrc ([65472e2](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/65472e24a2b1e709e174cbfab7aeb3370f0c1ebe))
* refactor endpointUrl to use reactive reference ([2f22f93](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/2f22f93db317b2f05323ea2b1115e3c04a1a04c5))
* reintroduced overrides ([50dfb07](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/50dfb0726e77d3d1832c64dc151c375c568a3f48))
* remove auth ([8585cf1](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/8585cf18c42c0b554ff735d05a0421a0fd4379aa))
* remove unnecessary imports ([96e67c4](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/96e67c40bea27ae4d55231b97178d2f477bf3aab))
* removed proxy stuff ([9559419](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/9559419dcf8af124a857d0ed1813439ac5aba9ea))
* removed some stuff from .npmrc ([62231ac](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/62231acf74b2614cdf1852fefcb5afbedd6994d4))
* removed test ([7337533](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/7337533892eda39c1efb915188862ba088a6528c))
* renamed env for debug mode and made default to false ([f5e19a2](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/f5e19a2c8e65431cfeccea8bd34ca6e599c29e4d))
* resolve are now different ([f187855](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/f1878557280a49bb8af2eb2fa22a15bb34fe1d3a))
* return value directly for ids ([e420343](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/e42034364dacf88037e640e265e8775254bb6ce0))
* set an access token ([c2b38a9](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/c2b38a975267928637a4f9d0d4c4617e00431f71))
* should remove dimensions on svgs ([c2fdff9](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/c2fdff921df44908ed39cd9cf6cb84664aed07e3))
* switched to `@unocss/postcss` from `@unocss/nuxt` ([7038ceb](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/7038cebc02f65d637df99639d42c0e35bf63cf13))
* switched to `@unocss/postcss` from `@unocss/nuxt` ([cd1daa7](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/cd1daa781e94c1b0a09473c278ab5ee7c90fc940))
* test for effect scopes ([2d7ce22](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/2d7ce2228cce8b99f8cc4f5fd8e40a6e2a25070a))
* token in action ([aa5b47d](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/aa5b47dd53f7ec741e6bc07d764a649b2d474c1c))
* transformed from typescript ([264233b](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/264233b3819b37a7a543f81a69fdffe75a66f259))
* tried cleaning the slightest bit up ([149d7e4](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/149d7e4c51a699ec12a9d2c40b1680ca8bb88f3a))
* tried removing typescript includeWorkspace ([8a5e5d1](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/8a5e5d1583c9d585b5c8680a95415b805fe86282))
* update values properly ([534fd5d](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/534fd5d8e9c2268b53a1b22c371a85049e1670c7))
* updated `filesystem` option in `uno.config.js` ([8292fd8](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/8292fd824d0b40aba6f00fa1555af9dcf1bd2206))
* updated release please ([40e8cb8](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/40e8cb85d6465f291aadacd3e4af88bfa5fc771f))
* updated release yml ([160e35c](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/160e35c7aeff0675240673c09f8288665f40b3b0))
* upgraded `@limbo-works/image` version to avoid aspect ratio cropping issues ([1f62824](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/1f62824b97ec57cac514293ea39b08e245a12211))
* use on scope dispose instead ([dc911bd](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/dc911bd4128bfece5265c3fd07a250cd19ac877f))
* useEventListener target issue ([d8dd11f](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/d8dd11fa75f78a2c116cac5925d2c8218bd6f0af))
* way of exporting default rem preset ([b1f0c3d](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/b1f0c3db060eef24be0e13ff18ad803c03ce3cc0))
* wrong uno path ([e9fcc5e](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/e9fcc5e0b664a9b49bd127ee1992dd193691448b))


### Miscellaneous Chores

* removed `unocss` ([15bdefd](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/15bdefd64a2f3320fb5d81f801eb1c79d57de4aa))

## [6.0.0](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v5.3.8...v6.0.0) (2026-03-30)


### ⚠ BREAKING CHANGES

* upgraded to Nuxt 4

### Features

* upgraded to Nuxt 4 ([02d3c04](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/02d3c04b8bc0624f698957552a8ff3e82408e3ee))

## [5.3.8](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v5.3.7...v5.3.8) (2026-03-16)


### Bug Fixes

* memory leak in eventBus ([9469576](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/946957626af5ff9190c3b9e281e0080d8b8664ac))

## [5.3.7](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v5.3.6...v5.3.7) (2026-03-05)


### Bug Fixes

* upgraded `@limbo-works/image` version to avoid aspect ratio cropping issues ([1f62824](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/1f62824b97ec57cac514293ea39b08e245a12211))

## [5.3.6](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v5.3.5...v5.3.6) (2026-02-27)


### Bug Fixes

* another null check ([67fa5c1](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/67fa5c13d09d132df73a423ca1156ce935656a49))

## [5.3.5](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v5.3.4...v5.3.5) (2026-02-16)


### Bug Fixes

* added tryOnScopeDispose ([6b5fc06](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/6b5fc06409386a7c5667701ac263c0ca2c64ce93))

## [5.3.4](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v5.3.3...v5.3.4) (2026-01-20)


### Bug Fixes

* event bus fixes ([fe2c020](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/fe2c0207c7184741a9dd08fef603d759faf2df03))

## [5.3.3](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v5.3.2...v5.3.3) (2026-01-16)


### Bug Fixes

* other way around ([adf88c6](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/adf88c69c7f019fa3dac02305d4054ffaefbf1ce))

## [5.3.2](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v5.3.1...v5.3.2) (2026-01-16)


### Bug Fixes

* remove unnecessary imports ([96e67c4](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/96e67c40bea27ae4d55231b97178d2f477bf3aab))
* use on scope dispose instead ([dc911bd](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/dc911bd4128bfece5265c3fd07a250cd19ac877f))

## [5.3.1](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v5.3.0...v5.3.1) (2026-01-16)


### Bug Fixes

* test for effect scopes ([2d7ce22](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/2d7ce2228cce8b99f8cc4f5fd8e40a6e2a25070a))

## [5.3.0](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v5.2.1...v5.3.0) (2026-01-16)


### Features

* improved useLimboForm a bit ([b0504b5](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/b0504b5f4bac56dee8b31bf5d8a19fa70adb17ba))


### Bug Fixes

* added some off-hooking for useEventBus ([1fcdfd2](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/1fcdfd20673ec36e2138ed329751fccccdc87f04))
* added some state management to useGUID and useNumberId ([d54450e](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/d54450eff023c8f1b831a015cc4fb660f9a24c0d))
* added some timeout cleanup for useEventListener ([4c316d6](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/4c316d6d76b744d115cc87bd9b8826ee04871fa3))

## [5.2.1](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v5.2.0...v5.2.1) (2026-01-15)


### Bug Fixes

* added some cleanup to aid against memory leaks ([0a49df0](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/0a49df0d8b7bb5a2d5e1ca7a8e8e73182a8d98f7))

## [5.2.0](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v5.1.1...v5.2.0) (2025-12-11)


### Features

* enhance field value and checked state management ([0c3fbe2](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/0c3fbe26f3efbbef838f191c25c73db702607076))

## [5.1.1](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v5.1.0...v5.1.1) (2025-11-24)


### Bug Fixes

* refactor endpointUrl to use reactive reference ([2f22f93](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/2f22f93db317b2f05323ea2b1115e3c04a1a04c5))

## [5.1.0](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v5.0.3...v5.1.0) (2025-11-24)


### Features

* implement enrichMagicKeys option in useLimboForm ([50b3a59](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/50b3a59dde48678fe6703d7c63a2270039cd79b2))

## [5.0.3](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v5.0.2...v5.0.3) (2025-09-23)


### Bug Fixes

* cleanup ([4bb0441](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/4bb0441cc1489ad5b2c319ec241aa5a9cf0b4531))

## [5.0.2](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v5.0.1...v5.0.2) (2025-09-04)


### Bug Fixes

* useEventListener target issue ([d8dd11f](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/d8dd11fa75f78a2c116cac5925d2c8218bd6f0af))

## [5.0.1](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v5.0.0...v5.0.1) (2025-09-02)


### Bug Fixes

* update values properly ([534fd5d](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/534fd5d8e9c2268b53a1b22c371a85049e1670c7))

## [5.0.0](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v4.3.0...v5.0.0) (2025-09-02)


### ⚠ BREAKING CHANGES

* update as breaking
* updated useLimboForm with populate instead of populateFromQuery

### Features

* update as breaking ([29f1b27](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/29f1b2790a10a939700c0df0623e349e0dd02962))
* updated useLimboForm with populate instead of populateFromQuery ([3ad8323](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/3ad8323a00be728d1eacb44ce2549544579bc1af))

## [4.3.0](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v4.2.0...v4.3.0) (2025-06-27)

### Features

-   slight restructuring ([1496b84](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/1496b849ba719f43392c3f3dd7de221ef5b20976))

## [4.2.0](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v4.1.0...v4.2.0) (2025-06-25)

### Features

-   **useLimboForm:** updated items handling on ([66f8a2d](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/66f8a2db6bb17b76cd0530e1f847fcb3c4267bda))

## [4.1.0](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v4.0.0...v4.1.0) (2025-02-19)

### Features

-   added useAppHost composable ([facd870](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/facd870723c83419f178570aeeb9d25021446d1a))

## [4.0.0](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v3.1.0...v4.0.0) (2025-01-20)

### ⚠ BREAKING CHANGES

-   remove nuxt proxy

### Features

-   remove nuxt proxy ([0788293](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/078829317b909da7393994ad13d2906d8cdb9655))

## [3.1.0](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v3.0.7...v3.1.0) (2024-12-02)

### Features

-   upgraded appHistory ([9ce73f9](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/9ce73f9df54c1b0f88c6a85a2a948f40834b044d))

## [3.0.7](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v3.0.6...v3.0.7) (2024-10-30)

### Bug Fixes

-   made docs ignored in templates ([624deeb](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/624deeb3d2984572057bcd9e5e9002384d98605b))

## [3.0.6](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v3.0.5...v3.0.6) (2024-10-25)

### Bug Fixes

-   made default value allow multiple checked ([5365719](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/53657196aa7bd7f490a3ca971230bdca3a029211))

## [3.0.5](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v3.0.4...v3.0.5) (2024-09-24)

### Bug Fixes

-   made transformers not part of the preset ([2ca095b](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/2ca095b4530c0740e856100422ddd0cb0e2db6e9))

## [3.0.4](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v3.0.3...v3.0.4) (2024-09-23)

### Bug Fixes

-   reintroduced overrides ([50dfb07](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/50dfb0726e77d3d1832c64dc151c375c568a3f48))

## [3.0.3](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v3.0.2...v3.0.3) (2024-09-23)

### Bug Fixes

-   tried cleaning the slightest bit up ([149d7e4](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/149d7e4c51a699ec12a9d2c40b1680ca8bb88f3a))

## [3.0.2](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v3.0.1...v3.0.2) (2024-09-23)

### Bug Fixes

-   tried removing typescript includeWorkspace ([8a5e5d1](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/8a5e5d1583c9d585b5c8680a95415b805fe86282))

## [3.0.1](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v3.0.0...v3.0.1) (2024-09-23)

### Bug Fixes

-   transformed from typescript ([264233b](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/264233b3819b37a7a543f81a69fdffe75a66f259))

## [3.0.0](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v2.11.1...v3.0.0) (2024-09-23)

### ⚠ BREAKING CHANGES

-   now it's know that the unocss things are modules

### Bug Fixes

-   now it's know that the unocss things are modules ([d17d5a0](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/d17d5a019a9c1ee6059ef4e02ae95bd8d754ce0f))

## [2.11.1](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v2.11.0...v2.11.1) (2024-09-23)

### Bug Fixes

-   moved default presets as well ([7182235](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/718223513c456b391067b29b10cd35719398ad70))

## [2.11.0](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v2.10.0...v2.11.0) (2024-09-23)

### Features

-   updated unocss preset with default transformers ([ab1d6af](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/ab1d6af2381d5203b41078408fbbf0e13d7f7ae1))

## [2.10.0](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v2.9.1...v2.10.0) (2024-09-19)

### Features

-   upgraded packages to latest packages ([cd167ed](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/cd167edad539bde756a57bd0afbafe56675b4fdf))

### Bug Fixes

-   completed renaming ([4557e6f](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/4557e6f923882d72c474109801b26924e1265f01))

## [2.9.1](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v2.9.0...v2.9.1) (2024-08-09)

### Bug Fixes

-   renamed env for debug mode and made default to false ([f5e19a2](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/f5e19a2c8e65431cfeccea8bd34ca6e599c29e4d))

## [2.9.0](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v2.8.0...v2.9.0) (2024-07-09)

### Features

-   added env-controlled debug mode ([b3a0651](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/b3a065104edec5e62eaed1f7324ad618dfa62951))
-   added overwrites to uno ([992b7b5](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/992b7b58320645d4f8fcb2bdfdd8a686927e2549))

## [2.8.0](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v2.7.0...v2.8.0) (2024-07-03)

### Features

-   add default compression to assets ([0ceffb7](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/0ceffb7a86e1514ac321d23c86957348f59c07ed))

### Bug Fixes

-   proper default value fallback for items in useLimboForm ([9b4d17e](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/9b4d17ec01649a3da24d791ce5b00cb10a517730))

## [2.7.0](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v2.6.2...v2.7.0) (2024-06-10)

### Features

-   added helper functions ([888f1a7](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/888f1a77899163316305dfc1badd342b8dfbaffe))

### Bug Fixes

-   made GUID and number id composables non-reliant on useId ([bcfbe06](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/bcfbe063dce459b3d56b3be6626e83ac306d48f1))

## [2.6.2](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v2.6.1...v2.6.2) (2024-05-29)

### Bug Fixes

-   improved app history composable slightly ([d52335c](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/d52335cc2e9cae69382db1a7f1fc62af3b77dc45))

## [2.6.1](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v2.6.0...v2.6.1) (2024-05-03)

### Bug Fixes

-   added second argument and warning to useAttrs- functions ([9e658d2](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/9e658d2c2b001d930cda99e813d631ebc973f7af))

## [2.6.0](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v2.5.0...v2.6.0) (2024-03-21)

### Features

-   added useAttrsExcept and useAttrsSome ([64bde25](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/64bde258ad88595fa2355ab17f1183e61f197514))
-   updated packages ([ea8e17e](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/ea8e17e080c9ef0777c63745ce0b8f972275fa5a))

## [2.5.0](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v2.4.0...v2.5.0) (2024-02-27)

### Features

-   added address rule to preflight to not make italic ([6594f52](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/6594f529abf183888d69aa7b042a2da2f5616470))

## [2.4.0](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v2.3.0...v2.4.0) (2024-02-08)

### Features

-   added composable `useEventBus` ([977f02a](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/977f02a8feea15077f899b6859ca8e3be4e2f16f))

## [2.3.0](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v2.2.2...v2.3.0) (2024-02-05)

### Features

-   various ID generation utilities ([dd233b6](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/dd233b6c3a80275fd9fffa6b958ab7b0bf8fce77))

### Bug Fixes

-   return value directly for ids ([e420343](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/e42034364dacf88037e640e265e8775254bb6ce0))

## [2.2.2](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v2.2.1...v2.2.2) (2024-01-30)

### Bug Fixes

-   better defaultValue setup ([4596ca6](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/4596ca64d9d9ddd804f0d922defc51423e1a643c))
-   changed reference to preset-wind ([3393c27](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/3393c27a31b6363fffa6a69514c7628e50c9be48))

## [2.2.1](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/v2.2.0...v2.2.1) (2024-01-16)

### Bug Fixes

-   allow release-please to build ([1619ff1](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/1619ff12986e246ff3c721c57117b00cf4125a96))

## [2.2.0](https://github.com/limbo-works/Limbo.Nuxt.Core/compare/2.1.0...v2.2.0) (2024-01-11)

### Features

-   added release-please ([0ee8215](https://github.com/limbo-works/Limbo.Nuxt.Core/commit/0ee8215f24b6ca592e3c59abf55a28aba9b9552b))
