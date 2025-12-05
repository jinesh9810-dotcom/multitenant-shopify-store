import { createTenant } from "./tenant.service.js";

export async function onboardTenant(req, res) {
  try {
    const { name, shopUrl, accessToken } = req.body;

    const tenant = await createTenant({ name, shopUrl, accessToken });

    res.status(201).json({
      message: "Tenant onboarded successfully",
      tenant
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to onboard tenant" });
  }
}
