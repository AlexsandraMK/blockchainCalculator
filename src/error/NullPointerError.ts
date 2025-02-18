export default class NullPointerError extends Error {
  constructor(nameVariable: string) {
    super(`[ ${nameVariable} ] must be set`);
    this.name = "NullPointerError";
  }
}
