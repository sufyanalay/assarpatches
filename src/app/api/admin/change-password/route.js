import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import { isAdmin } from "@/lib/checkAuth";
import AdminUser from "@/models/AdminUser";

export async function POST(req) {
  if (!(await isAdmin())) {
    return Response.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const { currentPassword, newPassword } = await req.json();
  if (!currentPassword || !newPassword) {
    return Response.json({ ok: false, error: "Current and new password are required" }, { status: 400 });
  }

  if (newPassword.length < 8) {
    return Response.json({ ok: false, error: "New password must be at least 8 characters" }, { status: 400 });
  }

  try {
    await connectDB();

    let admin = await AdminUser.findOne();
    if (admin) {
      const valid = bcrypt.compareSync(currentPassword, admin.passwordHash);
      if (!valid) {
        return Response.json({ ok: false, error: "Current password is incorrect" }, { status: 401 });
      }
      admin.passwordHash = bcrypt.hashSync(newPassword, 10);
      await admin.save();
    } else {
      const envUsername = process.env.ADMIN_USERNAME;
      const envPassword = process.env.ADMIN_PASSWORD;
      if (!envUsername || !envPassword || currentPassword !== envPassword) {
        return Response.json({ ok: false, error: "Current password is incorrect" }, { status: 401 });
      }
      await AdminUser.create({
        username: envUsername,
        passwordHash: bcrypt.hashSync(newPassword, 10),
      });
    }

    return Response.json({ ok: true });
  } catch (err) {
    return Response.json({ ok: false, error: err.message }, { status: 500 });
  }
}
