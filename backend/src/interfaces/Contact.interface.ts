
export interface ContactCreateRequest{
    name: string
    email: string[]
    telephone: string[]
    userId: string 
}

export interface ListContactRequest{
    id:string
}