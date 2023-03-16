export interface User {
    id_user?: string,
    email: string,
    username: string,
    password?: string,
    id_brand: number,
    active: number,
    active_bool?: boolean,
    permissions: any
    [index: string]: any;
} 