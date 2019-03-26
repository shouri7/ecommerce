'use strict'

const crypto = use('crypto')

/**
 * Generate random alphanumeric string
 */
const str_random = async (length = 40) => {
    let string = ''
    let len = string.length

    if (len < length) {
        let size = length - len
        let bytes = await crypto.randomBytes(size)
        let buffer = new Buffer.alloc(bytes)

        string += buffer
            .toString('base64')
            .replace(/[^a-zA-Z0-9]/g, '')
            .substr(0, size)
    }
    return string
}

module.exports = {
    str_random
}
