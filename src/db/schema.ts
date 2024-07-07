//import { pgTable, pgEnum, bigint, timestamp, text } from "drizzle-orm/pg-core"
import { pgTable, bigint, text, timestamp } from 'drizzle-orm/pg-core';

export const cubata_feedback = pgTable("cubata_feedback", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint("id", { mode: "number" }).primaryKey().notNull(),
	created_at: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	desc: text("desc"),
	comp_list: text("comp_list").array(),
	url: text("url"),
	ip_address: text("ip_address")
});

export type InsertFeedback = typeof cubata_feedback.$inferInsert;
export type SelectFeedback = typeof cubata_feedback.$inferSelect;   