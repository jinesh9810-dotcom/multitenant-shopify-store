import express from "express";
import { onboardTenant } from "./tenants/tenant.controller.js";
import { getMetrics } from "./metrics/metrics.controller.js";
import { shopifyWebhook } from "./shopify/webhook.handler.js";

const router = express.Router();

router.post("/tenant/onboard", onboardTenant);
router.get("/metrics", getMetrics);
router.post("/shopify/webhook", shopifyWebhook);

export default router;
