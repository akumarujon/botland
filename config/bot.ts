import { Bot, Context, NextFunction } from "../deps.ts";
import "https://deno.land/std@0.201.0/dotenv/load.ts";

export const bot = new Bot(Deno.env.get("BOT_TOKEN") as string);
export const instance = await bot.api.getMe();


// Debugger
bot.use(async (ctx: Context, next: NextFunction) => {
    console.log(
      `%c[INFO]`,
      "color: green",
      ctx.update,
    );
  
    await next();
  });