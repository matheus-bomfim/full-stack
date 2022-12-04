export interface UserCreateRequest{
    name: string
    password: string
    email: string[]
    telephone: string[]
}

export interface UserLoginRequest{
    name: string
    password: string
}

export interface ListUserOwnerRequest{
    id:string
}