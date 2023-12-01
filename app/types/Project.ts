import { PortableTextBlock } from "sanity";

export type Project = {
    _id: string; // and underscore means that sanity generated the object itself
    _createAt: Date;
    name: string; // we created these types
    slug: string;
    image: string;
    url: string;
    content: PortableTextBlock[]; //how sanity stores rich content (bold and etc.)

}