'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {

    /**
     * Relacionamento entre o produto e as imagens
     */
    images() {
        return this.belongsToMany('App/Models/Image')
    }

    /**
     * Relacionamento entre o produto e categorias
     */
    categories(){
        return this.belongsToMany('App/Models/Category')
    }

    /**
     * Relacionamento entre produtos e cupons de desconto
     */
     coupons(){
        return this.belongsToMany('App/Models/Coupon')
     }
}

module.exports = Product
