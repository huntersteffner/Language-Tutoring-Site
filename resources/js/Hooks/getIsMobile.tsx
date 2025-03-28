import { useMediaQuery } from 'react-responsive'

export function getIsMobile(): boolean {
    return useMediaQuery({query: '(max-width: 720px)'})
}