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
        <DropdownMenuTrigger aria-label="Open profile menu">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="Profile avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            {profileDropdownItems.slice(0, -1).map((item) => (
              <DropdownMenuItem key={item.label} className="p-0">
                <Link href={item.href} className="w-full px-2 py-1.5 hover:bg-accent/10">
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
                className="hover:bg-destructive/10 focus:bg-destructive/10 text-destructive"
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
