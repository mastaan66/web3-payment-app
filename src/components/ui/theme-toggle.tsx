'use client';

import React, { useState } from 'react';

import { Button } from '@heroui/button';
import { Laptop, MoonStar, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

export default function ThemeToggle() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { setTheme } = useTheme();

  return (
    <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          data-testid='theme-toggle'
          variant='bordered'
          isIconOnly
          onPress={() => {
            setIsDropdownOpen((previousState) => !previousState);
          }}
        >
          <Sun className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
          <MoonStar className='absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent data-testid='theme-dropdown-content'>
        <DropdownMenuLabel>Select theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          data-testid='theme-light'
          onClick={() => {
            setTheme('light');
          }}
        >
          <Sun className='mr-2 h-[1.2rem] w-[1.2rem]' />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          data-testid='theme-dark'
          onClick={() => {
            setTheme('dark');
          }}
        >
          <MoonStar className='mr-2 h-[1.2rem] w-[1.2rem]' />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          data-testid='theme-system'
          onClick={() => {
            setTheme('system');
          }}
        >
          <Laptop className='mr-2 h-[1.2rem] w-[1.2rem]' />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
