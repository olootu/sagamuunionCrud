export class Wordpress {
    public id: string;
    public date: Date;
    public date_gmt: string;
    public guid: Guid;
    public modified: string;
    public modified_gmt: string;
    public modifiedslug_gmt: string;
    public type: string;
    public link: string;
    public title: Guid;
    public content: ContentProtected;
    public excerpt:ContentProtected;
    public categories: [];
    public tags: [];
    public featured_url: string;
    public _links: [];
}

export class Guid {
   public rendered: string;
}

export class ContentProtected {
    public rendered: string;
    public protected?: boolean;
 }

//  export class Links {
//     public rendered: string;
//     public protected?: boolean;
//  }
