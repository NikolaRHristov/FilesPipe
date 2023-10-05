/**
 * @module Apply
 *
 */
export const _Function = (async (_Function: unknown, Test: unknown) => {
	if (_Function instanceof Function) {
		if (Test instanceof Map) {
			const Tests = new Map();

			for (const [Key, Value] of Test) {
				Tests.set(await _Function(Key), await _Function(Value));
			}

			return Tests;
		}

		if (Test instanceof Set) {
			const Tests = new Set();

			for (const El of Test) {
				Tests.add(await _Function(El));
			}

			return Tests;
		}

		if (Test instanceof Array) {
			const Tests = new Array();

			for (const Index of Test) {
				Tests.push(await _Function(Index));
			}

			return Tests;
		}

		return await _Function(Test);
	}
}) satisfies Type as Type;

export default _Function;

import type Type from "../Interface/Apply.js";
