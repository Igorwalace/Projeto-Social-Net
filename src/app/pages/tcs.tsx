export interface Author {
    image: string | null;
    name: string | null;
    email: string;
    userName: string | null;
}
export interface Post {
    author: Author
    id: string;
    title: string;
    image: string;
    published: boolean | null;
    authorId: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface PostSingle extends Post {
    author: Author
}
