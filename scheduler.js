import cron from "cron";
import prisma from "./config/prisma.js";
import { syncShopifyData } from "./shopify/shopify.service.js";

const job = new cron.CronJob("*/30 * * * *", async () => {
  console.log("Running scheduled sync...");
  const tenants = await prisma.tenant.findMany();
  for (const tenant of tenants) {
    await syncShopifyData(tenant);
    console.log(`Synced tenant: ${tenant.name}`);
  }
});

job.start();
