import prisma from "../config/prisma.js";

export async function createTenant(data) {
  return prisma.tenant.create({ data });
}

export async function getTenant(id) {
  return prisma.tenant.findUnique({ where: { id } });
}
