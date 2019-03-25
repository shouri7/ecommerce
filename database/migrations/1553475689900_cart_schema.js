'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CartSchema extends Schema {
    up() {
        this.create('cart', (table) => {
            table.increments()
            table.decimal('total', 12, 2)
        })
    }

    down() {
        this.drop('cart')
    }
}

module.exports = CartSchema
