import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { controlBase } from "./input";

export function Textarea({ className, rows = 5, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea rows={rows} className={cn(controlBase, "min-h-36 px-4 py-3", className)} {...props} />;
}
