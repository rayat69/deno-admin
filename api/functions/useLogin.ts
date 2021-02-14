import { client } from "../db/index.ts";

const useLogin = async (gas: Info) => {
  let resp;
  if (gas.username && gas.password) {
    let sql = `select * from ?? where username = ?`;
    let param = ["admin", gas.username];
    const users = await client.query(sql, param);
    if (users.length > 0) {
      if (gas.password === users[0].password) {
        resp = { status: "authorized", logged: true, result: users[0] };
      } else {
        resp = {
          status: "unauthorized",
          logged: false,
          error: "Incorrect password",
        };
      }
    } else {
      resp = { status: "invalid", error: "Invalid username" };
    }
  } else {
    resp = { status: "invalid", error: "Invalid data" };
  }

  return resp;
};

export interface Info {
  username: string;
  password: string;
}

export default useLogin;
