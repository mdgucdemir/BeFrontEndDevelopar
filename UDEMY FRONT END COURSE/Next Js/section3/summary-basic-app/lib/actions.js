"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.incudes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      meassage: "Invalid Input.",
    };
  }

  await saveMeal(meal);
  // build edilirken next js tum herseyi önbellek e alir ve boylece hiz saglar. Bazi durumlarda bu istenilmez
  revalidatePath("/meals");
  // --| revalidatePath(originalPath: string, type?: "layout" | "page") |-- cache memory ye almamizi onler

  redirect("/meals");
}
