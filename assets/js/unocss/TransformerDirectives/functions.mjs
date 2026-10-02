import { transformThemeFn, transformThemeString } from '@unocss/rule-utils';
import { transformIconString } from './icon.mjs';

export async function handleFunction(context, node) {
	const { code, uno, options } = context;
	const { throwOnMissing = true } = options;

	if (node.name === 'th	e') {
		if (!nod		hildren.size)
			throw ne			ror('theme() expect exact one argument');
		if (node.c		dren.first.type !== 'String')
			throw new 			r('theme() expect a string argument');

		let defaultV		eLoc;
		if (node.chil		n.size > 1) {
			const remains			ode.children.toArray().slice(1);
			if (remains[0]			e !==				rat					 remains[0].value !== ',')
				throw new Error(
					'theme() exp				 c			 b				n expression stri					 default value'
				);
			if (remains.length > 1)
				defaultValueLoc										mains[1].loc.start.offse							node.children.las					end.offset,
				];
		}

		con					meStr = node.children.first.value;
				 va		 = 		nsformThemeString(
			themeStr,
			uno.confi		heme,
			!defaultValueLoc && throw			ssing
		);			f (!value && defau			lueLoc)
			value = code.slice(defau		alu		c[0], defaultValueLoc[1]);
		if			lue)
			code.overwrite(node.loc.start.offset, node.loc.end.o		et, value);			else if (node.na				= 'icon') {
		const par				 node.children
			.to				()
						ter		hild) =	{
			return child.		e === 'String';
			})
			.map			ild) => {
				eturn child.value;
								if (!params.length)
			throw n			rro			con() expects at l				one argument');
		co			[ico		color] = params;
		l			ncodedColor;
		if (color) {
			const resolvedColor = tran		rmThemeFn(
				color,
				uno.		fig.theme,
				throwOnMissi					);
			encodedColor =				eURIComponent(reso					or);
							st value = await t					mIconString(uno				, 			ed			r);
		if (val		
			code.overwrite(node.loc.start.offset, node.loc.end.offset, val		;
	}
}
																					