import { Client } from "https://deno.land/x/mysql/mod.ts";

export const client = await new Client().connect({
  hostname: "localhost",
  username: "root",
  password: "",
  db: "cook-it",
});
