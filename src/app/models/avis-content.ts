export class AvisContent {
  public imgProfileUrl: string;
  public name: string;
  public content: string;
  public key: string;

  public constructor(key: string, content: string, imgProfileUrl: string, name: string) {
    this.key = key;
    this.content = content;
    this.imgProfileUrl = imgProfileUrl;
    this.name = name;
  }
}
