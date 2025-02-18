export default class TypeError extends Error {
  constructor(nameVariable: string, requiredTypeVariable: string) {
    super(`[ ${nameVariable} ] must be of type [ ${requiredTypeVariable} ]`);
    this.name = "TypeError";
  }
}
