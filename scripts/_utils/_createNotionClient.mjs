import { Client } from '@notionhq/client'
import { useEnv } from './_env.mjs'

const { notionKey } = useEnv()

export const createNotionClient = () => {
  return new Client({ auth: notionKey })
}
