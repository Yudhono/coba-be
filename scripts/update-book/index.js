
// @ts-check
/**
 * You can also import another NPM package
 * const _ = require("lodash");
 * const moment = require("moment");
 */

/**
 * @description handler for update-book
 * @param {import('@mocobaas/server-sdk').Context} ctx
 * @returns {Promise<import('@mocobaas/server-sdk').ReturnCtx>}
 */
async function handler(ctx)  {
  await ctx.moco.tables.update({
    table: "books",
    id: "e05d84e2-decb-40e2-9d9d-2e40d9d78e26",
    data: {
      book_name: "how to install oil filter",
    },
  });

  return
}

module.exports = handler;
