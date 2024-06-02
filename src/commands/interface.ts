export interface IComand {
  name: string;
  desc: string;
  contents: Array<string>;
  func: Function;
}
