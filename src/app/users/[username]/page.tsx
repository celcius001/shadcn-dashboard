// TODO :::https://youtu.be/SjsQdfvxjL8?t=6919
'use client';
import CardList from '@/components/CardList';
import { useParams } from 'next/navigation';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import React from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { BadgeCheck, Shield } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const SingleUserPage = () => {
  const params = useParams();
  const username = params.username;
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{username}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-4 flex flex-col gap-8 xl:flex-row">
        {/* LEFT */}
        <div className="w-full space-y-6 xl:w-1/3">
          {/* USER BADGERS CONTAINER */}
          <div className="bg-primary-foreground rounded-lg p-4">
            <h1 className="text-xl font-semibold">User Badges</h1>
            <div className="mt-4 flex gap-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="rounded-full border-1 border-blue-500/50 bg-blue-500/30 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="mb-2 font-bold">Verified User</h1>
                  <p className="text-muted-foreground text-sm">
                    This user has been verified by the admin
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="rounded-full border-1 border-green-500/50 bg-green-500/30 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="mb-2 font-bold">Admin</h1>
                  <p className="text-muted-foreground text-sm">This user is an admin</p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          {/* INFORMATION CONTAINER */}
          <div className="bg-primary-foreground rounded-lg p-4">
            <h1 className="text-xl font-semibold">User Information</h1>
            <div className="mt-4 space-y-4">
              <div className="mb-8 flex flex-col gap-2">
                <p className="text-muted-foreground text-sm">Profile completion</p>
                <Progress value={80} />
                <div className="flex items-center gap-2">
                  <span className="font-bold">Username:</span>
                  <span>{username}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">Email:</span>
                  <span>{username}@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">Phone:</span>
                  <span>+1 (123) 456-7890</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">Location:</span>
                  <span>South Park, SP</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">Role:</span>
                  <Badge>Admin</Badge>
                </div>
                <p className="text-muted-foreground mt-4 text-sm">Joined on January 1, 2023</p>
              </div>
            </div>
          </div>
          {/* CARD LIST CONTAINER */}
          <div className="bg-primary-foreground rounded-lg p-4">
            <CardList title="Recent Trasactions" />
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full space-y-6 xl:w-2/3">
          {/* USER CARD CONTAINER */}
          <div className="bg-primary-foreground rounded-lg p-4">User Card</div>
          {/* CHART CONTAINER */}
          <div className="bg-primary-foreground rounded-lg p-4">Chart</div>
        </div>
      </div>
    </div>
  );
};

export default SingleUserPage;
