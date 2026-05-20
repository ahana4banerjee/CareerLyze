"use server";

import { auth } from "@clerk/nextjs/server";
import {db} from "@/lib/prisma"; 

export async function saveUserSkills(skillsArray) {
  // Get the ID of the currently logged-in user from Clerk
  const { userId } =await auth();

  // Security check: If they aren't logged in
  if (!userId) {
    throw new Error("Unauthorized");
  }

  try {
    //standardize the data
    const formattedSkills=skillsArray.map(skill => skill.toLowerCase().trim());
    //create a skill if it's new,or do nothing if already exists
    await Promise.all(
      formattedSkills.map(skillName =>db.skill.upsert({
        where:{name:skillName},
        update:{},
        create:{name:skillName},
      })
    )
  );
    //Find the user in NeonDB and update their skills array
    const updatedUser = await db.user.update({
      where: {
        clerkUserId: userId,
      },
      data: {
        skills:{
          set:formattedSkills.map(skillName =>({name:skillName})),

        },
      },
    include:{
      skills:true,
    }
    });

    return { success: true, skills: updatedUser.skills };
  } catch (error) {
    console.error("Error saving skills:", error);
    throw new Error("Failed to save skills to database");
  }
}
export async function getUserSkills() {
  const { userId } = await auth();

  if (!userId) {
    return [];
  }

  try {
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
      include: {
        skills: true, // Fetch the related skills
      },
    });

    // If the user exists and has skills, return skills
    if (user && user.skills) {
      return user.skills.map(skill => skill.name);
    }
    
    return [];
  } catch (error) {
    console.error("Error fetching skills:", error);
    return [];
  }
}