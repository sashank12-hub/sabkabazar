import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookie from "cookie";
let users = [];
export default async function handler(req, res) {
  if (req.method === "POST") {
    let obj = JSON.parse(req.body);
   
    let hashedpassword;

    bcrypt.hash(obj.user.password, 10, (err, hash) => {
      if (err) {
        console.log(err);

        res.status(500).json({ err: "err" });
      } else {
        hashedpassword = hash;
        
        const token = jwt.sign(
          { email: obj.user.email, password: obj.user.password},
          "qwertyui"
        );
        users.push(token);
        res
          .status(200)
          .setHeader(
            "set-cookie",
            cookie.serialize("next-js-cookie", token, {
              httpOnly: true,
              path: "/",

              //   sameSite:"strict"
            })
          )
          .json({
            user: {
              token: token,
              name: obj.user.name,
              email: obj.user.email,
              password: obj.user.password,
            },
          });
      }
    });
  }
}
