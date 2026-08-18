export type RawAny = any

export type Streamer = {
  username: string
  avatar?: string
  twitch_url?: string
  is_live?: boolean
}

async function safeJson(response: Response) {
  try {
    return await response.json()
  } catch {
    return null
  }
}

export async function fetchStreamers(): Promise<Streamer[]> {
  const url = 'https://api.chess.com/pub/streamers'
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const body = await safeJson(res)

    // attempt to find an array of streamers in the response
    let list: RawAny[] = []
    if (Array.isArray(body)) list = body
    else if (body && Array.isArray(body.streamers)) list = body.streamers
    else if (body && Array.isArray(body.streamer)) list = body.streamer
    else if (body && Array.isArray(body.items)) list = body.items
    else if (body && typeof body === 'object') {
      // pick the first array-like value
      for (const v of Object.values(body)) {
        if (Array.isArray(v)) {
          list = v as RawAny[]
          break
        }
      }
    }

    // map to our Streamer shape with safe fallbacks
    return list.map((it: RawAny) => {
      const username = it.username || it.name || it.title || it.handle || it.display_name || (typeof it === 'string' ? it : undefined) || 'unknown'
      const avatar = it.avatar || it.avatar_url || it.photo || it.image
      const twitch_url = it.twitch_url || it.twitch || it.url || (it.urls && it.urls.twitch) || undefined
      let is_live = false
      if (typeof it.is_live === 'boolean') is_live = it.is_live
      else if (typeof it.live === 'boolean') is_live = it.live
      else if (typeof it.status === 'string') is_live = /live|streaming/i.test(it.status)

      return {
        username,
        avatar,
        twitch_url,
        is_live,
      }
    })
  } catch (err) {
    console.error('fetchStreamers error', err)
    return []
  }
}
