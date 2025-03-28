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

export interface BookedSessionLinks {
    active?: boolean
    label?: string
    url?: string
}

export interface BookedSessionMeta {
    current_page: number
    from: number
    last_page: number
    links: BookedSessionLinks[]
    path: string
    per_page: number
    to: number
    total: number
}

export interface CTA {
    ctaText: string
    ctaUrl: string
    location: string
}

export type TutorsProps = {
    tutors: {
        data: Tutor[]
    }
}

export interface BannerProps {
    imageUrl: string
    altText: string
}

export interface TestimonialProps extends BannerProps {
    name: string
    message: string
}

export interface InfoBanner extends BannerProps {
    text: string
    header: string
    cta: CTA
    backgroundColor: string
    textWhite: boolean
    location: string
}

export interface BannerData {
    data: InfoBanner[]
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
        links: {
            first: string
            last: string
            next: string
            prev: string
        }
        meta: BookedSessionMeta
    }
    heroBanner: {
        data: BannerProps
    }
    infoBanners: {
        data: InfoBanner[]
    }
}
