import { z } from "zod";

export interface DiceContent {
    roleNumber: Number;
}

export const DiceSchema = z.object({
    roleNumber: z.string().describe("The number of the dice"),
});


