'use server'

import { clerkClient } from "@clerk/nextjs/server";

export const getClerkUsers = async ({ userIds }: { userIds: string[] }) => {
    try {
        const users = await clerkClient.users.getUserList({
          emailAddress: userIds,
        });

        return users;
    } catch (error) {
        console.log(`Error fetching users ${error}`);
        return [];
    }
}