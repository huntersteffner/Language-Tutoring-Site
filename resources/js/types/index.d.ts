export interface User {
    id: number
    name: string
    email: string
    credits_available: number
    email_verified_at?: string
}

export interface Tutor {
    id: number
    name: string
    image: string
    credits_required: number
    description: string
    location: string
    languages: string
}

export type TutorsProps = {
    tutors: {
        data: Tutor[]
    }
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    }
    tutors: {
        data: Tutor[]
    }
};
