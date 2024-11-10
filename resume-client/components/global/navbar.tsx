'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useAppContext } from '@/lib/context';

export default function Navbar() {
  const { user, logout } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSheet = () => setIsOpen(!isOpen);

  const navItems = [
    {
      title: 'AI Resumes & Cover Letters',
      dropdownContent: ['Template 1', 'Template 2', 'Template 3'],
    },
    {
      title: 'AI Job Search',
      dropdownContent: ['Job Board 1', 'Job Board 2', 'Job Board 3'],
    },
    {
      title: 'AI Interview Support',
      dropdownContent: ['Guide 1', 'Guide 2', 'Guide 3'],
    },
    {
      title: 'Resources',
      href: '/resources',
    },
  ];

  const NavItems = () => (
    <>
      {navItems.map((item, index) => (
        <NavigationMenuItem key={index}>
          {item.href ? (
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-2 lg:px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'>
                {item.title}
              </NavigationMenuLink>
            </Link>
          ) : (
            <>
              <NavigationMenuTrigger className='px-2 lg:px-4'>
                {item.title}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className='grid gap-3 p-6 w-[400px] md:w-[500px] lg:w-[600px]'>
                  {item?.dropdownContent?.map((content, idx) => (
                    <div key={idx} className='text-sm'>
                      {content}
                    </div>
                  ))}
                </div>
              </NavigationMenuContent>
            </>
          )}
        </NavigationMenuItem>
      ))}
    </>
  );

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6'>
        <Link href='/' className='flex items-center space-x-2'>
          <span className='text-lg lg:text-xl font-bold text-primary'>
            EarnBetter
          </span>
        </Link>
        <NavigationMenu className='hidden md:flex'>
          <NavigationMenuList>
            <NavItems />
          </NavigationMenuList>
        </NavigationMenu>
        <div className='flex items-center space-x-4'>
          <Button
            href={user?.email ? '/onboard/upload' : '/login'}
            variant='outline'
            className='hidden md:inline-flex text-xs lg:text-sm'
          >
            {user?.email ? 'Onboard' : 'Sign In'}
          </Button>
          {user?.email && (
            <Button onClick={logout} className='hidden md:inline-flex'>
              Logout
            </Button>
          )}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant='outline' size='icon' className='md:hidden'>
                <Menu className='h-6 w-6' />
                <span className='sr-only'>Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='right' className='w-[300px] sm:w-[400px]'>
              <nav className='flex flex-col space-y-4'>
                <Link
                  href='/'
                  className='flex items-center space-x-2'
                  onClick={toggleSheet}
                >
                  <span className='text-xl font-semibold'>EarnBetter</span>
                </Link>
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href || '/'}
                    className='text-lg font-medium'
                    onClick={toggleSheet}
                  >
                    {item.title}
                  </Link>
                ))}
                <Button
                  href={user?.email ? '/onboard/upload' : '/login'}
                  className='w-full'
                >
                  {user?.email ? 'Onboard' : 'Sign In'}
                </Button>
                {user?.email && (
                  <Button onClick={logout} className='w-full'>
                    Logout
                  </Button>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
