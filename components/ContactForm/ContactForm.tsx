"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ContactFormData } from "@/lib/types/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent } from "../ui/card";
import { Textarea } from "../ui/textarea";

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

type ContactFormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) alert(result.message);
      else alert(result.message);
    } catch (err) {
      console.error(err);
    } finally {
      reset();
    }
  };

  return (
    <>
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
                    name="firstName"
                    placeholder="First Name"
                    required
                    minLength={5}
                    maxLength={50}
                    autoComplete="first-name"
                    aria-describedby="firstName-error"
                    {...register("firstName")}
                    className={errors?.firstName ? "border-red-500" : ""}
                  />
                  {errors?.firstName && (
                    <span id="firstName-error" className="text-sm text-red-500">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    minLength={5}
                    maxLength={50}
                    autoComplete="last-name"
                    aria-describedby="lastName-error"
                    {...register("lastName")}
                    className={errors?.lastName ? "border-red-500" : ""}
                  />
                  {errors?.lastName && (
                    <span id="lastName-error" className="text-sm text-red-500">
                      {errors.lastName.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="example@email.com"
                  required
                  maxLength={100}
                  autoComplete="email-address"
                  aria-describedby="email-error"
                  {...register("email")}
                  className={errors?.email ? "border-red-500" : ""}
                />
                {errors?.email && (
                  <span id="email-error" className="text-sm text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobileNumber">Mobile Number</Label>
                <Input
                  id="mobileNumber"
                  name="mobileNumber"
                  placeholder="+880 1719 050 465"
                  maxLength={20}
                  required
                  autoComplete="mobile-number"
                  aria-describedby="mobileNumber-error"
                  {...register("mobileNumber")}
                  className={errors?.mobileNumber ? "border-red-500" : ""}
                />
                {errors?.mobileNumber && (
                  <span
                    id="mobileNumber-error"
                    className="text-sm text-red-500">
                    {errors.mobileNumber.message}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    name="city"
                    placeholder="New York"
                    required
                    minLength={2}
                    maxLength={50}
                    autoComplete="address-level2"
                    aria-describedby="city-error"
                    {...register("city")}
                    className={errors?.city ? "border-red-500" : ""}
                  />
                  {errors?.city && (
                    <span id="city-error" className="text-sm text-red-500">
                      {errors.city.message}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    name="state"
                    placeholder="NY"
                    required
                    minLength={2}
                    maxLength={50}
                    autoComplete="address-level1"
                    aria-describedby="state-error"
                    {...register("state")}
                    className={errors?.state ? "border-red-500" : ""}
                  />
                  {errors?.state && (
                    <span id="state-error" className="text-sm text-red-500">
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
                    name="zipCode"
                    placeholder="10001"
                    required
                    pattern="[0-9]{5}(-[0-9]{4})?"
                    maxLength={10}
                    autoComplete="postal-code"
                    aria-describedby="zipCode-error"
                    {...register("zipCode")}
                    className={errors?.zipCode ? "border-red-500" : ""}
                  />
                  {errors?.zipCode && (
                    <span id="zipCode-error" className="text-sm text-red-500">
                      {errors.zipCode.message}
                    </span>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input
                    id="country"
                    name="country"
                    placeholder="United States"
                    required
                    minLength={2}
                    maxLength={56}
                    autoComplete="country-name"
                    aria-describedby="country-error"
                    {...register("country")}
                    className={errors?.country ? "border-red-500" : ""}
                  />
                  {errors?.country && (
                    <span id="country-error" className="text-sm text-red-500">
                      {errors.country.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="messageQuery">Message</Label>
                <Textarea
                  id="messageQuery"
                  name="messageQuery"
                  placeholder="Type your message"
                  required
                  minLength={2}
                  maxLength={56}
                  autoComplete="messageQuery-name"
                  aria-describedby="messageQuery-error"
                  {...register("messageQuery")}
                  className={errors?.messageQuery ? "border-red-500" : ""}
                />
                {errors?.messageQuery && (
                  <span
                    id="messageQuery-error"
                    className="text-sm text-red-500">
                    {errors.messageQuery.message}
                  </span>
                )}
              </div>
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting...." : "Submit"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default ContactForm;
