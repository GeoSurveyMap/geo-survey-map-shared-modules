type UserId = number;
export interface User {
    id: UserId;
    kindeId: string;
    email: string;
    role: Role;
    permissions: Permissions[];
}
export declare enum Role {
    ROLE_ADMIN = "ROLE_ADMIN",
    ROLE_USER = "ROLE_USER",
    ROLE_PRO = "ROLE_PRO"
}
export declare enum Permissions {
    POLAND = "POLAND",
    GERMANY = "GERMANY",
    BELGIUM = "BELGIUM",
    SWEDEN = "SWEDEN",
    AUSTRIA = "AUSTRIA",
    ITALY = "ITALY",
    SPAIN = "SPAIN",
    IRELAND = "IRELAND",
    SLOVAKIA = "SLOVAKIA",
    NETHERLANDS = "NETHERLANDS",
    SERBIA = "SERBIA",
    LITHUANIA = "LITHUANIA",
    TURKEY = "TURKEY",
    GREECE = "GREECE",
    GREAT_BRITAIN = "GREAT_BRITAIN",
    HUNGARY = "HUNGARY"
}
export type PostRegisterUserRequest = Omit<User, 'id'> & {
    permissions?: Permissions[];
};
export type PostRegisterUserResponse = UserId;
export {};
