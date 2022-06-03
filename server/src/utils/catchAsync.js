import express from "express";

/**
 * @callback RequestHandler
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

/**
 * Wrapping a RequestHandler to catch Async errors and handle them accordingly
 * @param {RequestHandler} fn
 * @param {function} cb
 * @returns {RequestHandler}
 */
export function catchAsync(fn, cb) {
  if (fn.constructor.name !== "AsyncFunction")
    throw new Error(`Can't use catchAsync on synchronus functions!`);

  return (req, res, next) => {
    fn(req, res, next).catch((err) => {
      if (cb) cb(req);
      next(err);
    });
  };
}
