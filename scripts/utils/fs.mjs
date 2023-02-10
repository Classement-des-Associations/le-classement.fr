import { promises as fsp } from 'fs'
import { resolve } from 'pathe'
import { useSlugify } from './slugify.mjs'

/**
 * Clear a directory (remove all files and subdirectories recursively and create it)
 *
 * @param {string} path
 * @returns {Promise<void>}
 */
export const clearDir = async function (path) {
  await fsp.rm(path, { recursive: true, force: true })
  await fsp.mkdir(path, { recursive: true })
}

/**
 * Write a file
 *
 * @param {string} name
 * @param {string} folder
 * @param {string} data
 * @returns {Promise<void>}
 * @throws {Error}
 */
export const writeFile = async function (name, folder, data) {
  const filename = useFilename(name)
  const filepath = resolve('content', folder, filename)

  await fsp.writeFile(filepath, JSON.stringify(data, null, 2), 'utf-8')
}

/**
 * Create a filename from a name
 *
 * @param {string} name
 * @returns {string}
 */
export const useFilename = function (name) {
  return `_${useSlugify(name)}.json`
}
