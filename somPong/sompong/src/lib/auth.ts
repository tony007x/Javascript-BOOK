import wretch from 'wretch'

export const validate_token = async (token: string): Promise<[any, boolean]> => {
    return await wretch().headers({
        "API-KEY": '',
        "Content-type": "application/json",
        "Authorization": token
    }).post().unauthorized((e) => [e.message, false]).json((e) => {
        return [e, true]
    }).catch(e => {
        return [e.message, false]
    }) as unknown as [string | null, boolean]
}