// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const superadminRole = await prisma.role.create({
    data: {
      name: 'superadmin',
    },
  });

  await prisma.admin.create({
    data: {
      name: 'Super Admin',
      email: 'superadmin@example.com',
      password: 'your-secure-password', // Remember to hash passwords in production environments
      roleId: superadminRole.id,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
