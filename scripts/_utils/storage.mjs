import { createStorage } from 'unstorage'
import fsDriver from 'unstorage/drivers/fs'

export const useStorage = () => {
  return createStorage({
    driver: fsDriver({ base: '.data' })
  })
}
