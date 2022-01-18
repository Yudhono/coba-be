
// @ts-check
/**
 * You can also import another NPM package
 * const _ = require("lodash");
 * const moment = require("moment");
 */

/**
 * @description handler for create-book
 * @param {import('@mocobaas/server-sdk').Context} ctx
 * @returns {Promise<import('@mocobaas/server-sdk').ReturnCtx>}
 */
async function handler(ctx)  {
  // const { book_name } = ctx.data;
  
  await ctx.moco.tables.create({
    table: "books",
    data: {
      book_name: ctx.data.book_name
    },
  });
  
  // console.log(book_name);

  return 
}

module.exports = handler;
