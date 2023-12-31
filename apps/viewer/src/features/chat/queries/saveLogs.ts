import prisma from '@/lib/prisma'
import { Log } from '@typebot.io/schemas'

export const saveLogs = (logs: Omit<Log, 'id' | 'createdAt'>[]) =>
  prisma.log.createMany({ data: logs })
