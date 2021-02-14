import { Application, Router } from "https://deno.land/x/oak/mod.ts";

import useLogin from "./functions/useLogin.ts";

const app = new Application();
const router = new Router();

router.post("/api/admin/login", async (ctx) => {
  const gas = await ctx.request.body().value;
  const resp = await useLogin(gas);
  //console.log(gas, resp);
  ctx.response.body = resp;
});

// app.use(({ response }) => {
//   response.body = "Deno server running at https://localhost:6969";
// });

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 6969 });
