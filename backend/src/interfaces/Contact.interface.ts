
export interface ContactCreateRequest{
    name: string
    email: string[]
    telephone: string[]
    userId: string 
}

export interface ListContactRequest{
    id:string
}

export interface UpdateContactRequest{
    id:string,
    name: string
    email: string[]
    telephone: string[]
}

export interface UpdateContact{
    name: string
    email: string[]
    telephone: string[]
}