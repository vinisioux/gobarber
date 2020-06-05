import IMailTemplateDTO from '../dtos/IParseMailTemplateDTO';

export default interface IMailTemplateProvider {
  parse(data: IMailTemplateDTO): Promise<string>;
}
