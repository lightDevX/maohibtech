"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { Card, CardContent } from "../ui/card";
import { Textarea } from "../ui/textarea";

// Define the form schema using Zod
const formSchema = z.object({
  firstName: z.string().min(2, "First Name is required"),
  lastName: z.string().min(2, "Last Name is required"),
  email: z.string().email("Invalid email address"),
  mobileNumber: z.string().regex(/^\+?\d{8,20}$/, "Invalid mobile number"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, "Invalid ZIP code format"),
  country: z.string().min(2, "Country is required"),
  messageQuery: z.string().min(10, "Message must be at least 10 characters"),
});

// Infer the type from the schema
type ContactFormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors, isSubmitting },
  //   reset,
  // } = useForm<ContactFormData>({
  //   resolver: zodResolver(formSchema),
  // });

  // const onSubmit = async (data: ContactFormData) => {
  //   try {
  //     const response = await fetch("/api/contact", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(data),
  //     });

  //     const result = await response.json();
  //     if (result.success) {
  //       alert(result.message);
  //       reset();
  //     } else {
  //       alert(result.message);
  //     }
  //   } catch (err) {
  //     console.error("Submission error:", err);
  //     alert("An error occurred while submitting the form.");
  //   }
  // };

  return (
    <Card>
      <CardContent>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          autoComplete="on">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  placeholder="First Name"
                  {...register("firstName")}
                  className={errors.firstName ? "border-red-500" : ""}
                />
                {errors.firstName && (
                  <span className="text-sm text-red-500">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Last Name"
                  {...register("lastName")}
                  className={errors.lastName ? "border-red-500" : ""}
                />
                {errors.lastName && (
                  <span className="text-sm text-red-500">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="example@email.com"
                {...register("email")}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="mobileNumber">Mobile Number</Label>
              <Input
                id="mobileNumber"
                placeholder="+880 1719 050 465"
                {...register("mobileNumber")}
                className={errors.mobileNumber ? "border-red-500" : ""}
              />
              {errors.mobileNumber && (
                <span className="text-sm text-red-500">
                  {errors.mobileNumber.message}
                </span>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  placeholder="New York"
                  {...register("city")}
                  className={errors.city ? "border-red-500" : ""}
                />
                {errors.city && (
                  <span className="text-sm text-red-500">
                    {errors.city.message}
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Input
                  id="state"
                  placeholder="NY"
                  {...register("state")}
                  className={errors.state ? "border-red-500" : ""}
                />
                {errors.state && (
                  <span className="text-sm text-red-500">
                    {errors.state.message}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="zipCode">ZIP Code</Label>
                <Input
                  id="zipCode"
                  placeholder="10001"
                  {...register("zipCode")}
                  className={errors.zipCode ? "border-red-500" : ""}
                />
                {errors.zipCode && (
                  <span className="text-sm text-red-500">
                    {errors.zipCode.message}
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  placeholder="United States"
                  {...register("country")}
                  className={errors.country ? "border-red-500" : ""}
                />
                {errors.country && (
                  <span className="text-sm text-red-500">
                    {errors.country.message}
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="messageQuery">Message</Label>
              <Textarea
                id="messageQuery"
                placeholder="Type your message"
                {...register("messageQuery")}
                className={errors.messageQuery ? "border-red-500" : ""}
              />
              {errors.messageQuery && (
                <span className="text-sm text-red-500">
                  {errors.messageQuery.message}
                </span>
              )}
            </div>
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
