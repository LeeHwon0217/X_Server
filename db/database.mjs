import mysql from "mysql2";
import { config } from "../config.mjs";

// 미리 연결해놓고 사용자들이 사용하게 함.
// 메모리에 남겨둔다는 의미에서 풀
// 끊고 사라지는게 아니라 미리 객체를 만들어놓고 사용자들이 쓰게 함
const pool = mysql.createPool({
  host: config.db.host,
  user: config.db.user,
  database: config.db.database,
  password: config.db.password,
});

export const db = pool.promise();
