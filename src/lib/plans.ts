import { Cpu, HardDrive, MemoryStick, Network, Box, type LucideIcon } from "lucide-react";

export type Plan = {
  name: string;
  price: number; // USD
  popular?: boolean;
  specs: { icon: LucideIcon; label: string; value: string }[];
  features: string[];
};

export const minecraftPlans: Plan[] = [
  { name: "Dirt", price: 2.99, specs: [
    { icon: MemoryStick, label: "RAM", value: "2 GB" },
    { icon: Cpu, label: "CPU", value: "100% Core" },
    { icon: HardDrive, label: "Storage", value: "10 GB NVMe" },
  ], features: ["Unlimited Slots", "DDoS Protection", "One-click Modpacks", "Instant Setup"] },
  { name: "Stone", price: 4.49, specs: [
    { icon: MemoryStick, label: "RAM", value: "4 GB" },
    { icon: Cpu, label: "CPU", value: "150% Cores" },
    { icon: HardDrive, label: "Storage", value: "20 GB NVMe" },
  ], features: ["Unlimited Slots", "DDoS Protection", "Free Subdomain", "Auto Backups"] },
  { name: "Iron", price: 6.49, popular: true, specs: [
    { icon: MemoryStick, label: "RAM", value: "6 GB" },
    { icon: Cpu, label: "CPU", value: "250% Cores" },
    { icon: HardDrive, label: "Storage", value: "40 GB NVMe" },
  ], features: ["Unlimited Slots", "DDoS Protection", "One-click Modpacks", "Free Subdomain", "Auto Backups"] },
  { name: "Gold", price: 9.49, specs: [
    { icon: MemoryStick, label: "RAM", value: "8 GB" },
    { icon: Cpu, label: "CPU", value: "300% Cores" },
    { icon: HardDrive, label: "Storage", value: "60 GB NVMe" },
  ], features: ["Unlimited Slots", "DDoS Protection", "Priority Support", "Auto Backups"] },
  { name: "Diamond", price: 12.99, specs: [
    { icon: MemoryStick, label: "RAM", value: "12 GB" },
    { icon: Cpu, label: "CPU", value: "400% Cores" },
    { icon: HardDrive, label: "Storage", value: "100 GB NVMe" },
  ], features: ["Unlimited Slots", "DDoS Protection", "Priority Support", "Auto Backups", "Dedicated IP"] },
  { name: "Netherite", price: 19.99, specs: [
    { icon: MemoryStick, label: "RAM", value: "16 GB" },
    { icon: Cpu, label: "CPU", value: "500% Cores" },
    { icon: HardDrive, label: "Storage", value: "150 GB NVMe" },
  ], features: ["Unlimited Slots", "DDoS Protection", "24/7 Premium Support", "Auto Backups", "Dedicated IP"] },
];

export const vpsPlans: Plan[] = [
  { name: "VPS Spark", price: 5.99, specs: [
    { icon: Cpu, label: "CPU", value: "2 vCPU" },
    { icon: MemoryStick, label: "RAM", value: "4 GB" },
    { icon: HardDrive, label: "Storage", value: "60 GB NVMe" },
    { icon: Network, label: "Bandwidth", value: "2 TB" },
  ], features: ["Full Root Access", "KVM Virtualization", "Linux / Windows"] },
  { name: "VPS Bolt", price: 11.99, popular: true, specs: [
    { icon: Cpu, label: "CPU", value: "4 vCPU" },
    { icon: MemoryStick, label: "RAM", value: "8 GB" },
    { icon: HardDrive, label: "Storage", value: "120 GB NVMe" },
    { icon: Network, label: "Bandwidth", value: "5 TB" },
  ], features: ["Full Root Access", "Snapshots", "DDoS Protection"] },
  { name: "VPS Storm", price: 22.99, specs: [
    { icon: Cpu, label: "CPU", value: "8 vCPU" },
    { icon: MemoryStick, label: "RAM", value: "16 GB" },
    { icon: HardDrive, label: "Storage", value: "240 GB NVMe" },
    { icon: Network, label: "Bandwidth", value: "10 TB" },
  ], features: ["Full Root Access", "Priority Network", "Free Snapshots"] },
  { name: "VPS Thunder", price: 44.99, specs: [
    { icon: Cpu, label: "CPU", value: "12 vCPU" },
    { icon: MemoryStick, label: "RAM", value: "32 GB" },
    { icon: HardDrive, label: "Storage", value: "480 GB NVMe" },
    { icon: Network, label: "Bandwidth", value: "20 TB" },
  ], features: ["Full Root Access", "Priority Network", "Daily Snapshots", "24/7 Support"] },
];

export const vdsPlans: Plan[] = [
  { name: "VDS Core", price: 39.0, specs: [
    { icon: Cpu, label: "CPU", value: "4 Dedicated" },
    { icon: MemoryStick, label: "RAM", value: "16 GB DDR4" },
    { icon: HardDrive, label: "Storage", value: "250 GB NVMe" },
    { icon: Box, label: "Resources", value: "Dedicated" },
  ], features: ["No Overselling", "Full Hardware Access", "DDoS Protection"] },
  { name: "VDS Pro", price: 79.0, popular: true, specs: [
    { icon: Cpu, label: "CPU", value: "8 Dedicated" },
    { icon: MemoryStick, label: "RAM", value: "32 GB DDR4" },
    { icon: HardDrive, label: "Storage", value: "500 GB NVMe" },
    { icon: Box, label: "Resources", value: "Dedicated" },
  ], features: ["No Overselling", "IPMI Access", "Priority Support"] },
  { name: "VDS Elite", price: 149.0, specs: [
    { icon: Cpu, label: "CPU", value: "16 Dedicated" },
    { icon: MemoryStick, label: "RAM", value: "64 GB DDR4" },
    { icon: HardDrive, label: "Storage", value: "1 TB NVMe" },
    { icon: Box, label: "Resources", value: "Dedicated" },
  ], features: ["No Overselling", "10 Gbit Uplink", "24/7 Premium Support"] },
];
