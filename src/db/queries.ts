import { db } from '@/src/db/index';
import { desc } from 'drizzle-orm';
import { InsertFeedback, cubata_feedback } from '@/src/db/schema';


// export async function createFeedback(data: InsertFeedback) {
//     await db.insert(cubata_feedback).values(data);
// }

export async function getFeedbacks(
    page = 1,
    pageSize = 5,
  ): Promise<
    Array<{
        id: number;
        created_at: string;
        desc: string;
        comp_list: string[];
        url: string;
        ip_address: string;
    }>
  > {
    return db
      .select()
      .from(cubata_feedback)
      .orderBy(desc(cubata_feedback.created_at))
      .limit(pageSize)
      .offset((page - 1) * pageSize);
  }