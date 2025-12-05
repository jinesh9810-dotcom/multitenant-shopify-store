import axios from "axios";
import prisma from "../config/prisma.js";

export async function syncShopifyData(tenant) {
  const apiVersion = process.env.SHOPIFY_API_VERSION;
  const baseUrl = `https://${tenant.shopUrl}/admin/api/${apiVersion}`;

  const headers = { "X-Shopify-Access-Token": tenant.accessToken };

  const customers = await axios.get(`${baseUrl}/customers.json`, { headers });
  for (const c of customers.data.customers) {
    await prisma.customer.upsert({
      where: { shopifyId: c.id },
      update: {},
      create: {
        shopifyId: c.id,
        email: c.email,
        firstName: c.first_name,
        lastName: c.last_name,
        tenantId: tenant.id
      }
    });
  }

  const orders = await axios.get(`${baseUrl}/orders.json`, { headers });
  for (const o of orders.data.orders) {
    await prisma.order.upsert({
      where: { shopifyId: o.id },
      update: {},
      create: {
        shopifyId: o.id,
        totalAmount: parseFloat(o.total_price || "0"),
        createdAt: new Date(o.created_at),
        tenantId: tenant.id
      }
    });
  }

  return true;
}
