import { z } from "zod";
import type { ActionResponse, ContactFormData } from "../types/address";

const addressSchema = z.object({
  firstName: z.string().min(5, { message: "First Name is required" }),
  lastName: z.string().min(5, { message: "Last Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  mobileNumber: z
    .string()
    .regex(/^\+?\d{8,20}$/, { message: "Invalid mobile number" }),
  city: z.string().min(1, { message: "City is required" }),
  state: z.string().min(1, { message: "State is required" }),
  zipCode: z
    .string()
    .regex(/^\d{5}(-\d{4})?$/, { message: "Invalid ZIP code format" }),
  country: z.string().min(1, { message: "Country is required" }),
  messageQuery: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

export async function submitQuery(
  prevState: ActionResponse | null,
  formData: FormData
): Promise<ActionResponse> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    const rawData: ContactFormData = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      mobileNumber: formData.get("mobileNumber") as string, // Keep as string for regex validation
      city: formData.get("city") as string,
      state: formData.get("state") as string,
      zipCode: formData.get("zipCode") as string,
      country: formData.get("country") as string,
      messageQuery: formData.get("messageQuery") as string,
    };

    // Validate the form data
    const validatedData = addressSchema.safeParse(rawData);

    if (!validatedData.success) {
      return {
        success: false,
        message: "Please fix the errors in the form",
        errors: validatedData.error.flatten().fieldErrors,
      };
    }

    // Here you would typically save the address to your database
    console.log("Address submitted:", validatedData.data);

    return {
      success: true,
      message: "Address saved successfully!",
    };
  } catch (error) {
    console.error("Error during form submission:", error);
    return {
      success: false,
      message: "An unexpected error occurred",
    };
  }
}
