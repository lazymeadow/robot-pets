const types = {
	part1: 'PART_1',
	part2: 'PART_2',
}

const typeNames = {
	[types.part1]: {
		singular: 'wire',
		plural: 'wires'
	},
	[types.part2]: {
		singular: 'screw',
		plural: 'screws'
	}
};

export const getBaseName = (type) => typeNames[type].plural;
export const getBaseDesc = (type, price) => `Every click makes 1 ${typeNames[type].singular}, worth ${price} C.`;
export const getQuantityDesc = (type, quantity, level) => {
	if (level === 3) {
		return `You make so many ${typeNames[type].plural}, ${quantity * Math.pow(2, level)} per click.`;
	}
	return `Every click makes ${quantity * Math.pow(2, level)} ${quantity > 1 ? typeNames[type].singular : typeNames[type].plural}.`;
}
export const getQualityDesc = (type, multiplier, price, level) => {
	if (level === 1) {
		return `Your ${typeNames[type].plural} are better, and are worth ${price * Math.pow(multiplier, 2)} C each`;
	}
	if (level === 2) {
		return `Your ${typeNames[type].plural} are even better, and are worth ${price * Math.pow(multiplier, 3)} C each`;
	}
	if (level === 3) {
		return `You make the best possible ${typeNames[type].plural}, and are worth ${price * Math.pow(multiplier, 4)} C each`;
	}
}

export const getQuantityName = (type, level) => {
	if (level === 1) {
		return `More ${typeNames[type].plural}`;
	}
	if (level === 2) {
		return `Even more ${typeNames[type].plural}`;
	}
	if (level ===3) {
		return `So many ${typeNames[type].plural}`;
	}
}
export const getQualityName = (type, level) => {
	if (level === 1) {
		return `Better ${typeNames[type].plural}`;
	}
	if (level === 2) {
		return `Even better ${typeNames[type].plural}`;
	}
	if (level ===3) {
		return `The best ${typeNames[type].plural}`;
	}
}

export const factoryPartUpgrades = {
	[types.part1]: {
		unlock: {
			id: 'w_base_0',
			cost: 0,
			incrementer: 1,
			multiplier: 2
		},
		quantity: [
			{
				id: 'w_quant_0',
				cost: 100,
				level: 1,
				upgradeDependencies: [
					'w_base_0'
				]
			},
			{
				id: 'w_quant_1',
				cost: 200,
				level: 2,
				upgradeDependencies: [
					'w_quant_0'
				]
			},
			{
				id: 'w_quant_2',
				cost: 500,
				level: 3,
				upgradeDependencies: [
					'w_quant_1'
				]
			}
		],
		quality: [
			{
				id: 'w_qual_0',
				cost: 100,
				level: 1,
				upgradeDependencies: [
					'w_base_0'
				]
			},
			{
				id: 'w_qual_1',
				cost: 200,
				level: 2,
				upgradeDependencies: [
					'w_qual_0'
				]
			},
			{
				id: 'w_qual_2',
				cost: 500,
				level: 3,
				upgradeDependencies: [
					'w_qual_1'
				]
			}
		]
	},
	[types.part2]: {
		unlock: {
			id: 's_base_0',
			cost: 500,
			incrementer: 2,
			multiplier: 3,
			upgradeDependencies: [
				'w_quant_1',
				'w_qual_1'
			]
		},
		quantity: [
			{
				id: 's_quant_0',
				cost: 750,
				level: 1,
				upgradeDependencies: [
					's_base_0'
				]
			},
			{
				id: 's_quant_1',
				cost: 1500,
				level: 2,
				upgradeDependencies: [
					's_quant_0'
				]
			},
			{
				id: 's_quant_2',
				cost: 5000,
				level: 3,
				upgradeDependencies: [
					's_quant_1'
				]
			}
		],
		quality: [
			{
				id: 's_qual_0',
				cost: 1000,
				level: 1,
				upgradeDependencies: [
					's_base_0'
				]
			},
			{
				id: 's_qual_1',
				cost: 2000,
				level: 2,
				upgradeDependencies: [
					's_qual_0'
				]
			},
			{
				id: 's_qual_2',
				cost: 3000,
				level: 3,
				upgradeDependencies: [
					's_qual_1'
				]
			}
		]
	}
};

export const getDefaultFactoryUpgrades = () => [factoryPartUpgrades[types.part1].unlock.id];
