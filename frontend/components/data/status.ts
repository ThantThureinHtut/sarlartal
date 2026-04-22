export type Status = "ONLINE" | "IDLE" | "DND" | "OFFLINE" | "BUSY" | "SAD"

export const STATUSES: { value: Status; label: string; dot: string; pill: string }[] = [
  { value: "ONLINE",  label: "Online",          dot: "bg-green-500",  pill: "bg-green-500/10 text-green-600 dark:text-green-400"   },
  { value: "IDLE",    label: "Idle",             dot: "bg-yellow-400", pill: "bg-yellow-400/10 text-yellow-600 dark:text-yellow-400" },
  { value: "DND",     label: "Do Not Disturb",   dot: "bg-red-500",    pill: "bg-red-500/10 text-red-600 dark:text-red-400"          },
  { value: "OFFLINE", label: "Offline",          dot: "bg-gray-400",   pill: "bg-gray-400/10 text-gray-500 dark:text-gray-400"       },
  { value: "BUSY",    label: "Busy",             dot: "bg-orange-500", pill: "bg-orange-500/10 text-orange-600 dark:text-orange-400" },
  { value: "SAD",     label: "Sad Mode",         dot: "bg-blue-400",   pill: "bg-blue-400/1<Paste> text-blue-6<Paste> dark:text-blue-4<Paste>"       },
]

