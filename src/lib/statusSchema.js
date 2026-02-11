import { z } from "zod";

export const StatusSchema = z.object({
  title: z.string().optional(),
  updatedAt: z.string().optional(),
  theme: z.object({ accent: z.string().optional() }).optional(),
  widgets: z.array(z.object({
    id: z.string(),
    label: z.string(),
    value: z.any(),
    hint: z.string().optional(),
  })),
});

export function validateStatus(json) {
  const parsed = StatusSchema.safeParse(json);
  if (parsed.success) return { ok: true, data: parsed.data };

  const first = parsed.error.issues[0];
  return {
    ok: false,
    message: `Backend JSON didn't match the expected shape at "${first.path.join(".") || "(root)"}": ${first.message}`,
  };
}
