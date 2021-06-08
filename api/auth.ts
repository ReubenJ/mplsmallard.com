/**
 * From https://github.com/robinpokorny/netlify-cms-now/blob/master/api/auth.ts
 */


import { VercelRequest, VercelResponse } from "@vercel/node";
import crypto from "crypto";
import { create } from "../api/_lib/oauth2";

export const randomString = () => crypto.randomBytes(4).toString(`hex`);

export default (req: VercelRequest, res: VercelResponse) => {
  const { host } = req.headers;

  const oauth2 = create();

  const url = oauth2.authorizeURL({
    redirect_uri: `https://${host}/api/callback`,
    scope: `repo,user`,
    state: randomString()
  });

  res.writeHead(301, { Location: url });
  res.end();
};