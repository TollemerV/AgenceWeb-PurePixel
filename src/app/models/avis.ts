export class Avis {
  public imgSrc: string;
  public text: string;
  public name: string;
  public title: string;


  public constructor(imgSrc: string, text: string, name: string, title: string) {
    this.imgSrc = imgSrc;
    this.text = text;
    this.name = name;
    this.title = title;
  }
}
