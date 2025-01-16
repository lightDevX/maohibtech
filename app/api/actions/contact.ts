import { sendEmail } from "@/lib/utils/sendEmail";
import { z } from "zod";
import type { ActionResponse, ContactFormData } from "../types/address";

const addressSchema = z.object({
  firstName: z.string().min(5, { message: "First Name is required" }),
  lastName: z.string().min(5, { message: "Last Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  mobileNumber: z
    .string()
    .regex(/^\+?\d{8,20}$/, { message: "Invalid mobile number" }),
  city: z.string().min(2, { message: "City is required" }),
  state: z.string().min(2, { message: "State is required" }),
  zipCode: z
    .string()
    .regex(/^\d{5}(-\d{4})?$/, { message: "Invalid ZIP code format" }),
  country: z.string().min({ message: "Country is required" }),
  messageQuery: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

export async function submitEmail(
  prevState: ActionResponse | null,
  formData: FormData
): Promise<ActionResponse> {
  const rawData: ContactFormData = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    mobileNumber: formData.get("mobileNumber") as string,
    city: formData.get("city") as string,
    state: formData.get("state") as string,
    zipCode: formData.get("zipCode") as string,
    country: formData.get("country") as string,
    messageQuery: formData.get("messageQuery") as string,
  };

  const validatedData = addressSchema.safeParse(rawData);

  if (!validatedData.success) {
    return {
      success: false,
      message: "Please fix the errors in the form",
      errors: validatedData.error.flatten().fieldErrors,
    };
  }

  // Send email with validated data
  const emailSent = await sendEmail(validatedData.data);

  if (emailSent) {
    return {
      success: true,
      message: "Your message has been submitted successfully!",
    };
  } else {
    return {
      success: false,
      message: "An error occurred while sending your message.",
    };
  }
}
