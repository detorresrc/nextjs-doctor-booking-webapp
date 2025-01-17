"use client";

import { Loader2 } from "lucide-react";
import React from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import { useGetCategories } from "@/features/categories/hooks/use-get-categories";
import Image from "next/image";
import Link from "next/link";
import { useGetCategoryParam } from "@/shared/hooks/use-get-category-param";
import { cn } from "@/lib/utils";

export const CategoryList = () => {
  const categoryParam = decodeURIComponent( useGetCategoryParam() || "");
  const { data: categories, isLoading } = useGetCategories();

  if (isLoading)
    return (
      <div className='w-full flex items-center justify-center h-12'>
        <Loader2 className='size-4 animate-spin' />
      </div>
    );

  return (
    <div className="w-full overflow-hidden my-5">
      <Command className='rounded-lg border shadow-md w-full'>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList className="max-h-[800px]">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading='Categories'>
            {categories?.data.map((category) => (
              <CommandItem key={category.documentId}>
                <Link
                  className={cn(
                    "w-full flex flex-row gap-2 p-2 text-blue-600 text-[14px] hover-effect-sm",
                    (category.Name.toLowerCase()==categoryParam.toLowerCase()) && "bg-blue-50"
                  )}
                  href={`/search/${category.Name.toLowerCase()}`}>
                  <Image
                    src={category.Icon.url}
                    alt={category.Name}
                    width={25}
                    height={25}
                    />
                  <label className="hover-effect">{category.Name}</label>
                </Link>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};