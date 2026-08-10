import bcrypt from "bcryptjs";
import { createToken } from "@/lib/auth";
import { cookies } from "next/headers";
import { connectDB } from "@/lib/db";
import AdminUser from "@/models/AdminUser";

export async function POST(req) {
  const { username, password } = await req.json();
  if (!username || !password) {
    return Response.json({ ok: false, error: "Username and password are required" }, { status: 400 });
  }

  try {
    await connectDB();
    const adminUser = await AdminUser.findOne({ username });
    let valid = false;

    if (adminUser) {
      valid = bcrypt.compareSync(password, adminUser.passwordHash);
    } else if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      valid = true;
      await AdminUser.create({
        username,
        passwordHash: bcrypt.hashSync(password, 10),
      });
    }

    if (!valid) {
      return Response.json({ ok: false, error: "Invalid username or password" }, { status: 401 });
    }

    const token = createToken();
    const cookieStore = await cookies();
    cookieStore.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    return Response.json({ ok: true });
  } catch (err) {
    return Response.json({ ok: false, error: err.message }, { status: 500 });
  }
}
