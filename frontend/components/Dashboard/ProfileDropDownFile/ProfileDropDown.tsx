"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

type DropdownItem = {
  label: string;
  href: string;
  onClick?: () => void;
};

export default function ProfileDropDown({ profileDropdownItems }: { profileDropdownItems: DropdownItem[] }) {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger
          aria-label="Open profile menu"
          className="rounded-full ring-2 ring-border/60 transition-all duration-200 hover:ring-primary/40"
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="Profile avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="ring-1 ring-border/60 shadow-lg">
          <DropdownMenuGroup>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            {profileDropdownItems.slice(0, -1).map((item) => (
              <DropdownMenuItem key={item.label} className="p-0">
                <Link href={item.href} className="w-full px-2 py-1.5 rounded-md transition-colors duration-150 hover:bg-accent/60">
                  {item.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {profileDropdownItems.slice(-1).map((item) => (
              <DropdownMenuItem
                key={item.label}
                className="transition-colors duration-150 hover:bg-destructive/10 focus:bg-destructive/10 text-destructive"
                onClick={item.onClick}
              >
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
