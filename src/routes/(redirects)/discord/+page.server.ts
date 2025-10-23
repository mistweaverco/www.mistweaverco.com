import { redirect } from "@sveltejs/kit";

export function load() {
  redirect(302, "https://discord.gg/Khakc3tgV4");
}
