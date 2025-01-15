"use client";
import { submitQuery } from "@/api/actions/contact";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ActionResponse } from "@/lib/types/contact";
import { CheckCircle2 } from "lucide-react";
import { useActionState } from "react";
import { Card, CardContent } from "../ui/card";
import { Textarea } from "../ui/textarea";

const initialState: ActionResponse = {
  success: false,
  message: "",
};

const ContactForm = () => {
  const [state, action, isPending] = useActionState(submitQuery, initialState);
  return (
    <>
      <Card>
        <CardContent>
          <form action={action} className="space-y-6" autoComplete="on">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    required
                    minLength={2}
                    maxLength={50}
                    autoComplete="first-name"
                    aria-describedby="firstName-error"
                    className={state?.errors?.firstName ? "border-red-500" : ""}
                  />
                  {state?.errors?.firstName && (
                    <p id="firstName-error" className="text-sm text-red-500">
                      {state.errors.firstName[0]}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    minLength={2}
                    maxLength={50}
                    autoComplete="last-name"
                    aria-describedby="lastName-error"
                    className={state?.errors?.lastName ? "border-red-500" : ""}
                  />
                  {state?.errors?.lastName && (
                    <p id="lastName-error" className="text-sm text-red-500">
                      {state.errors.lastName[0]}
                    </p>
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
                  minLength={5}
                  maxLength={100}
                  autoComplete="street-address"
                  aria-describedby="email-error"
                  className={state?.errors?.email ? "border-red-500" : ""}
                />
                {state?.errors?.email && (
                  <p id="email-error" className="text-sm text-red-500">
                    {state.errors.email[0]}
                  </p>
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
                />
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
                    className={state?.errors?.city ? "border-red-500" : ""}
                  />
                  {state?.errors?.city && (
                    <p id="city-error" className="text-sm text-red-500">
                      {state.errors.city[0]}
                    </p>
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
                    className={state?.errors?.state ? "border-red-500" : ""}
                  />
                  {state?.errors?.state && (
                    <p id="state-error" className="text-sm text-red-500">
                      {state.errors.state[0]}
                    </p>
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
                    className={state?.errors?.zipCode ? "border-red-500" : ""}
                  />
                  {state?.errors?.zipCode && (
                    <p id="zipCode-error" className="text-sm text-red-500">
                      {state.errors.zipCode[0]}
                    </p>
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
                    className={state?.errors?.country ? "border-red-500" : ""}
                  />
                  {state?.errors?.country && (
                    <p id="country-error" className="text-sm text-red-500">
                      {state.errors.country[0]}
                    </p>
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
                  className={
                    state?.errors?.messageQuery ? "border-red-500" : ""
                  }
                />
                {state?.errors?.messageQuery && (
                  <p id="messageQuery-error" className="text-sm text-red-500">
                    {state.errors.messageQuery[0]}
                  </p>
                )}
              </div>
            </div>

            {state?.message && (
              <Alert variant={state.success ? "default" : "destructive"}>
                {state.success && <CheckCircle2 className="h-4 w-4" />}
                <AlertDescription>{state.message}</AlertDescription>
              </Alert>
            )}

            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Saving..." : "Save Address"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default ContactForm;
