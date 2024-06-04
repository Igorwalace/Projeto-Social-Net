
export interface Author {
    image: string | null;
    name: string | null;
    email: string;
    userName: string | null;
}

export type Post = {
    author: {
        image: string | null;
        name: string | null;
        email: string;
        userName: string | null;
    };
    id: string;
    title: string;
    image: string;
    published: boolean | null;
    authorId: string;
    createdAt: Date;
    updatedAt: Date;
}
