import { Bot, Context, GrammyError, HttpError, NextFunction } from "../deps.ts";
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

bot.catch((err) => {
  const ctx = err.ctx;

  console.error(`Error while handling update ${ctx.update.update_id}:`);
  const e = err.error as Error;
  if (e instanceof GrammyError) {
    console.error("Error in request:", e.description);
  } else if (e instanceof HttpError) {
    console.error("Could not contact Telegram:", e);
  } else {
    console.error("Unknown error:", e);
  }
});
