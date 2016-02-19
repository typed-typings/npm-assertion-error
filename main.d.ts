// Type definitions for assertion-error 1.0.0
// Project: https://github.com/chaijs/assertion-error
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

export class AssertionError implements Error {
  constructor(message: string, props?: any, ssf?: Function);
  public name: string;
  public message: string;
  public showDiff: boolean;
  public stack: string;

  /**
   * Allow errors to be converted to JSON for static transfer.
   *
   * @param {Boolean} include stack (default: `true`)
   * @return {Object} object that can be `JSON.stringify`
   */
  public toJSON(stack: boolean): Object;
}
