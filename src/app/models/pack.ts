export class Pack {
  public image: string;
  public text: string;
  public prefix?: string;
  public paragraphs: string[]
  public url: string

  public constructor(image: string, text: string, paragraphs: string[], url: string, prefix?: string) {
    this.image = image;
    this.text = text;
    this.url = url
    this.paragraphs = paragraphs
    if (prefix !== undefined) {
      this.prefix = prefix;
    }
  }
}
