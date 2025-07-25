declare module "html-to-react" {
  export class Parser {
    constructor();
    parse(html: string): JSX.Element;
  }
}
