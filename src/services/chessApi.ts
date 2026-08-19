export type Streamer = {
  username: string
  avatar?: string
  twitch_url?: string
  is_live?: boolean
}

type RawStreamer = Record<string, unknown> | string

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function firstString(...values: unknown[]): string | undefined {
  return values.find((value): value is string => typeof value === 'string')
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
    let list: RawStreamer[] = []
    if (Array.isArray(body)) list = body
    else if (isRecord(body) && Array.isArray(body.streamers)) list = body.streamers
    else if (isRecord(body) && Array.isArray(body.streamer)) list = body.streamer
    else if (isRecord(body) && Array.isArray(body.items)) list = body.items
    else if (isRecord(body)) {
      // pick the first array-like value
      for (const v of Object.values(body)) {
        if (Array.isArray(v)) {
          list = v
          break
        }
      }
    }

    // map to our Streamer shape with safe fallbacks
    return list.map((item) => {
      if (typeof item === 'string') {
        return { username: item, is_live: false }
      }

      const username = firstString(item.username, item.name, item.title, item.handle, item.display_name) || 'unknown'
      const avatar = firstString(item.avatar, item.avatar_url, item.photo, item.image)
      const urls = isRecord(item.urls) ? item.urls : undefined
      const twitch_url = firstString(item.twitch_url, item.twitch, item.url, urls?.twitch)
      let is_live = false
      if (typeof item.is_live === 'boolean') is_live = item.is_live
      else if (typeof item.live === 'boolean') is_live = item.live
      else if (typeof item.status === 'string') is_live = /live|streaming/i.test(item.status)

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
