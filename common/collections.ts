


/**
 * An interface for a JavaScript object that
 * acts a dictionary. The keys are strings.
 */
export type IStringDictionary<V> = Record<string, V>;

/**
 * An interface for a JavaScript object that
 * acts a dictionary. The keys are numbers.
 */
export type INumberDictionary<V> = Record<number, V>;

const hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Iterates over each entry in the provided dictionary. The iterator allows
 * to remove elements and will stop when the callback returns {{false}}.
 */
export function forEach<T>(from: IStringDictionary<T> | INumberDictionary<T>, callback: (entry: { key: any; value: T; }, remove: () => void) => any): void {
	for (let key in from) {
		if (hasOwnProperty.call(from, key)) {
			const result = callback({ key: key, value: (from as any)[key] }, function () {
				delete (from as any)[key];
			});
			if (result === false) {
				return;
			}
		}
	}
}