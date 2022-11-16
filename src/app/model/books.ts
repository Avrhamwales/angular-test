export interface Book {
    kind: string,
    id: string,
    etag: string
    volumeInfo: {
        title: string;
        subtitle: string;
        authors: string[];
        publishedDate: string;
        publisher?: string;
        description: string;
        industryIdentifiers: IndustryIdentifier[];
        readingModes: ReadingModes;
        pageCount: number;
        printType: string;
        categories: string[];
        maturityRating: string;
        allowAnonLogging: boolean;
        contentVersion: string;
        panelizationSummary: PanelizationSummary;
        imageLinks: ImageLinks;
        language: string;
        previewLink: string;
        infoLink: string;
        canonicalVolumeLink: string;

    }

}

export interface BooksRes {
    king: string,
    totalItems: number,
    items: Book[]
}

export interface IndustryIdentifier {
    type: string;
    identifier: string;
}

export interface ReadingModes {
    text: boolean;
    image: boolean;
}

export interface PanelizationSummary {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
}

export interface ImageLinks {
    smallThumbnail: string;
    thumbnail: string;
}

