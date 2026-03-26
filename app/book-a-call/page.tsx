import { redirect } from "next/navigation";
import { routes } from "@/lib/routes";

/** Reserved for calendar embeds or dedicated booking UX; forwards to contact for now. */
export default function BookACallPage() {
  redirect(routes.contact);
}
