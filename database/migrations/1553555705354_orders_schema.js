'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrdersSchema extends Schema {
    up() {
        this.create('orders', (table) => {
            table.increments()
            table.decimal('subtotal', 12, 2).notNullable()
            table.decimal('discount', 12, 2).notNullable().defaultTo(0.00)
            table.decimal('total', 12, 2).notNullable()
            table.enu('status', ['awaiting', 'canceled', 'shipped', 'paid']).defaultTo('awaiting')
            table.integer('card_id').unsigned()
            table.foreign('card_id').references('id').inTable('carts').onDelete('cascade')
            table.timestamps()
        })
    }

    down() {
        this.drop('orders')
    }
}

module.exports = OrdersSchema
