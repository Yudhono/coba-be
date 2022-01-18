
// @ts-check
/**
 * You can also import another NPM package
 * const _ = require("lodash");
 * const moment = require("moment");
 */

/**
 * @description handler for delete-book
 * @param {import('@mocobaas/server-sdk').Context} ctx
 * @returns {Promise<import('@mocobaas/server-sdk').ReturnCtx>}
 */
async function handler(ctx)  {
  await ctx.moco.tables.destroy({
    table: "books",
    id: "368f0e03-7a0f-4b74-b1d9-ea4369d99ce2",
  });

  return
}

module.exports = handler;
