import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

export interface TrustIndicator {
  id: string;
  text: string;
  icon: LucideIcon;
}