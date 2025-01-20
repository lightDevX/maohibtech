"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ContactFormData } from "@/lib/types/contact";
import { formSchemaData } from "@/lib/utils/validation/formSchema";
import { useForm } from "react-hook-form";
import { Card, CardContent } from "../ui/card";
import { Textarea } from "../ui/textarea";

// const initialState: ActionResponse = {
//   success: false,
//   message: "",
// };

const ContactForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>(formSchemaData);

  const onSubmit = async (formData: ContactFormData) => {
    console.log(formData);
    reset();
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
                      {errors.lastNamefirstName.message}
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
                    {errors.emailfirstName.message}
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
                    {errors.mobileNumberfirstName.message}
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
                      {errors.cityfirstName.message}
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
                      {errors.statefirstName.message}
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
                      {errors.zipCodefirstName.message}
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
                      {errors.countryfirstName.message}
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
                    {errors.messageQueryfirstName.message}
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
