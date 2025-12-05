import prisma from "../config/prisma.js";

export async function getMetrics(req, res) {
  try {
    const tenantId = req.headers["x-tenant-id"];

    const totalCustomers = await prisma.customer.count({ where: { tenantId } });
    const totalOrders = await prisma.order.count({ where: { tenantId } });

    const revenue = await prisma.order.aggregate({
      where: { tenantId },
      _sum: { totalAmount: true }
    });

    const topCustomers = await prisma.customer.findMany({
      where: { tenantId },
      orderBy: { totalSpent: "desc" },
      take: 5
    });

    res.json({
      totalCustomers,
      totalOrders,
      revenue: revenue._sum.totalAmount || 0,
      topCustomers
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Metrics fetch failed" });
  }
}
