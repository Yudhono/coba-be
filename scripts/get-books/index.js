
// @ts-check
/**
 * You can also import another NPM package
 * const _ = require("lodash");
 * const moment = require("moment");
 */

/**
 * @description handler for get-books
 * @param {import('@mocobaas/server-sdk').Context} ctx
 * @returns {Promise<import('@mocobaas/server-sdk').ReturnCtx>}
 */
async function handler(ctx)  {
  const books = await ctx.moco.tables.findAll({
    table: "books",
  });

  console.log(books)

  return {
    data: books,
    error: null
  }
}

module.exports = handler;
