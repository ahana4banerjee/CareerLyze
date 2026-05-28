"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Upload } from "lucide-react";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useFetch from "@/hooks/use-fetch";
import { profileSchema } from "@/app/lib/schema";
import { updateProfile } from "@/actions/user";
import Image from "next/image";

const ProfileForm = ({ user }) => {
  const [previewImage, setPreviewImage] = useState(user?.imageUrl || "");
  const [fileSelected, setFileSelected] = useState(false);

  const {
    loading: updateLoading,
    fn: updateUserFn,
    data: updateResult,
  } = useFetch(updateProfile);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
  } = useForm({
    resolver: zodResolver(profileSchema),
    mode: "onChange",
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      bio: user?.bio || "",
      experience: user?.experience ? String(user.experience) : "",
      skills: user?.skills ? user.skills.join(", ") : "",
    },
  });

  useEffect(() => {
    if (updateResult?.success && !updateLoading) {
      toast.success("Profile updated successfully!");
      reset(updateResult);
    }
  }, [updateResult, updateLoading, reset]);

  const onSubmit = async (values) => {
    try {
      await updateUserFn({
        ...values,
        experience: values.experience ? parseInt(values.experience, 10) : null,
      });
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error(error.message || "Failed to update profile");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setFileSelected(true);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit Profile</CardTitle>
        <CardDescription>
          Update your personal information and profile details.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Profile Image Section */}
          <div className="space-y-3">
            <Label>Profile Picture</Label>
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              {previewImage && (
                <div className="relative w-24 h-24 rounded-lg overflow-hidden border border-border/50 flex-shrink-0">
                  <Image
                    src={previewImage}
                    alt="Profile preview"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <Label
                    htmlFor="image-upload"
                    className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-lg border border-border/50 hover:bg-secondary/50 transition-colors"
                  >
                    <Upload className="h-4 w-4" />
                    <span>Change Image</span>
                  </Label>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    disabled={updateLoading}
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  (Note: Image update feature coming soon)
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-border/50 pt-6" />

          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              placeholder="John Doe"
              {...register("name")}
              disabled={updateLoading}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          {/* Email (Read-only) */}
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              disabled
              className="bg-secondary/50 cursor-not-allowed"
            />
            <p className="text-sm text-muted-foreground">
              Email cannot be changed here. Contact support if you need to
              update it.
            </p>
          </div>

          {/* Bio */}
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              placeholder="Tell us about yourself..."
              {...register("bio")}
              disabled={updateLoading}
              className="resize-none h-24"
            />
            {errors.bio && (
              <p className="text-sm text-destructive">{errors.bio.message}</p>
            )}
            <p className="text-sm text-muted-foreground">
              Maximum 500 characters
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-2">
            <Label htmlFor="experience">Years of Experience</Label>
            <Input
              id="experience"
              type="number"
              min="0"
              max="50"
              placeholder="5"
              {...register("experience")}
              disabled={updateLoading}
            />
            {errors.experience && (
              <p className="text-sm text-destructive">
                {errors.experience.message}
              </p>
            )}
          </div>

          {/* Skills */}
          <div className="space-y-2">
            <Label htmlFor="skills">Skills (comma-separated)</Label>
            <Textarea
              id="skills"
              placeholder="e.g., JavaScript, React, Node.js, TypeScript"
              {...register("skills")}
              disabled={updateLoading}
              className="resize-none h-20"
            />
            {errors.skills && (
              <p className="text-sm text-destructive">
                {errors.skills.message}
              </p>
            )}
            <p className="text-sm text-muted-foreground">
              Enter skills separated by commas
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4 border-t border-border/50">
            <Button
              type="submit"
              disabled={updateLoading || !isValid}
              className="flex items-center gap-2"
            >
              {updateLoading && <Loader2 className="h-4 w-4 animate-spin" />}
              {updateLoading ? "Saving..." : "Save Changes"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                reset();
                toast.success("Form resets to saved values");
              }}
              disabled={updateLoading}
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProfileForm;
