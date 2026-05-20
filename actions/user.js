"use server";

import { db } from "@/lib/prisma";
import { withAIErrorHandling } from "@/lib/ai-errors";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { generateAIInsights } from "./dashboard";

export async function updateUser(data) {
  return withAIErrorHandling(
    async () => {
      const { userId } = await auth();
      if (!userId) throw new Error("Unauthorized");

      const user = await db.user.findUnique({
        where: { clerkUserId: userId },
      });

      if (!user) throw new Error("User not found");

      // Start a transaction to handle both operations
      const result = await db.$transaction(
        async (tx) => {
          // First check if industry exists
          let industryInsight = await tx.industryInsight.findUnique({
            where: {
              industry: data.industry,
            },
          });

          // If industry doesn't exist, create it with default values
          if (!industryInsight) {
            const insights = await generateAIInsights(data.industry);

            industryInsight = await tx.industryInsight.create({
              data: {
                industry: data.industry,
                ...insights,
                nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
              },
            });
          }

          // Now update the user
          const updatedUser = await tx.user.update({
            where: {
              id: user.id,
            },
            data: {
              industry: data.industry,
              experience: data.experience,
              bio: data.bio,
              skills: data.skills,
            },
          });

          return { updatedUser, industryInsight };
        },
        {
          timeout: 10000, // default: 5000
        },
      );

      revalidatePath("/");
      return result.updatedUser;
    },
    {
      fallbackMessage: "We couldn't complete your profile right now. Please try again.",
      logLabel: "Onboarding profile update",
    },
  );
}

export async function getUserOnboardingStatus() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  try {
    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
      select: {
        industry: true,
      },
    });

    return {
      isOnboarded: !!user?.industry,
    };
  } catch (error) {
    console.error("Error checking onboarding status:", error);
    throw new Error("Failed to check onboarding status");
  }
}

export async function getProfileData() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  try {
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
      select: {
        id: true,
        name: true,
        email: true,
        imageUrl: true,
        bio: true,
        experience: true,
        skills: true,
        themePreference: true,
        emailNotifications: true,
        pushNotifications: true,
        aiGenerationEnabled: true,
      },
    });

    if (!user) throw new Error("User not found");

    return user;
  } catch (error) {
    console.error("Error fetching profile:", error);
    throw new Error("Failed to fetch profile");
  }
}

export async function updateProfile(data) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  try {
    const updatedUser = await db.user.update({
      where: { id: user.id },
      data: {
        name: data.name,
        bio: data.bio,
        experience: data.experience,
        skills: data.skills,
      },
      select: {
        id: true,
        name: true,
        email: true,
        bio: true,
        experience: true,
        skills: true,
      },
    });

    revalidatePath("/settings");
    revalidatePath("/dashboard");
    return updatedUser;
  } catch (error) {
    console.error("Error updating profile:", error);
    throw new Error("Failed to update profile");
  }
}

export async function updateSettings(data) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  try {
    const updatedUser = await db.user.update({
      where: { id: user.id },
      data: {
        themePreference: data.themePreference,
        emailNotifications: data.emailNotifications,
        pushNotifications: data.pushNotifications,
        aiGenerationEnabled: data.aiGenerationEnabled,
      },
      select: {
        themePreference: true,
        emailNotifications: true,
        pushNotifications: true,
        aiGenerationEnabled: true,
      },
    });

    revalidatePath("/settings");
    return updatedUser;
  } catch (error) {
    console.error("Error updating settings:", error);
    throw new Error("Failed to update settings");
  }
}
