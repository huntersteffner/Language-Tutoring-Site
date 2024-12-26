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

export interface BookedSession {
    id: number
    credits: number
    created_at: string
    tutor: Tutor
}

export type TutorsProps = {
    tutors: {
        data: Tutor[]
    }
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User
    }
    tutors: {
        data: Tutor[]
    }
    bookedSessions: {
        data: BookedSession[]
    }
};
