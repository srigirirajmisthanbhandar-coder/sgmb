import { redirect } from "next/navigation";

// The heritage landing page is now the main site at "/".
// Keep this path alive so any old /govardhan links resolve.
export default function GovardhanIndex() {
  redirect("/");
}
