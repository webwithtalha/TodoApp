import * as z from 'zod';

const User = z.object({
  id: z.string(),
  email: z.string().min(5).max(200),
  name: z.string().min(5).max(200),
  password: z.string().min(6).max(200),
});

type User = z.infer<typeof User>;

export default User;
