import prisma from "../config/prisma.js";

export async function shopifyWebhook(req, res) {
  try {
    const event = req.body;
    const shopDomain = req.headers["x-shopify-shop-domain"];

    const tenant = await prisma.tenant.findFirst({
      where: { shopUrl: shopDomain }
    });

    if (!tenant) return res.status(404).end();

    if (event.type === "order_created") {
      await prisma.order.create({
        data: {
          shopifyId: event.id,
          totalAmount: event.total_price,
          createdAt: new Date(event.created_at),
          tenantId: tenant.id
        }
      });
    }

    res.status(200).send("Webhook received");
  } catch (err) {
    console.error(err);
    res.status(500).send("Webhook error");
  }
}
