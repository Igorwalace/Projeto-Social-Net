export function getUrl(path?: string) {
    const baseUrl = process.env.PATHNAME || '';
    const normalizedPath =
        path && !path.startsWith('/') ? `/${path}` : path || '';
    return `${baseUrl}${normalizedPath}`;
}
