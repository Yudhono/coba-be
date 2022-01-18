
// @ts-check
/**
 * You can also import another NPM package
 * const _ = require("lodash");
 * const moment = require("moment");
 */

/**
 * @description handler for get-categories
 * @param {import('@mocobaas/server-sdk').Context} ctx
 * @returns {Promise<import('@mocobaas/server-sdk').ReturnCtx>}
 */
async function handler(ctx)  {
  const cat = await ctx.moco.tables.findAll({
    table: "book_categories",
  });

  console.log(cat)
  
  return {
    data: cat,
    error: null
  }
}

module.exports = handler;
