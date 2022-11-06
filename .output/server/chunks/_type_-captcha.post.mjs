import { d as defineEventHandler, u as useBody, c as createError, r as request } from './nitro/node-server.mjs';
import { p as phoneRegex } from './regex.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'ufo';
import 'cookie-es';
import 'ohmyfetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'ohash';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'defu';
import 'fs';
import 'pathe';
import 'url';
import 'axios';
import 'unified';
import 'mdast-util-to-string';
import 'micromark/lib/preprocess.js';
import 'micromark/lib/postprocess.js';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'remark-emoji';
import 'rehype-slug';
import 'remark-squeeze-paragraphs';
import 'rehype-external-links';
import 'remark-gfm';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'remark-mdc';
import 'remark-parse';
import 'remark-rehype';
import 'mdast-util-to-hast';
import 'detab';
import 'unist-builder';
import 'mdurl';
import 'unist-util-position';
import 'html-tags';
import 'slugify';
import 'unist-util-visit';
import 'shiki-es';
import 'unenv/runtime/npm/consola';

const _type_Captcha_post = defineEventHandler(async (event) => {
  try {
    const type = event.context.params["type-captcha"].replace("-captcha", "");
    const body = await useBody(event);
    const { phone } = body;
    const rules = [
      {
        key: "phone",
        message: "\u8ACB\u8F38\u5165\u624B\u6A5F\u865F\u78BC",
        regex: phoneRegex
      }
    ];
    const validateRule = (rule) => {
      const value = body[rule.key] || "";
      if (value && rule.regex && rule.regex.test(value))
        return;
      throw createError({
        message: rule.message
      });
    };
    await Promise.all(rules.map(async (rule) => await validateRule(rule)));
    console.log(type);
    const {
      code,
      message = "",
      data = null
    } = await request.post("/auth/captcha", { phone, type });
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

export { _type_Captcha_post as default };
//# sourceMappingURL=_type_-captcha.post.mjs.map
