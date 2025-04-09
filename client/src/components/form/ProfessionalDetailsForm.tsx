import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { professionalDetailsSchema, type ProfessionalDetails } from "@shared/schema";

interface ProfessionalDetailsFormProps {
  onSubmit: (data: ProfessionalDetails) => void;
  onPrevious: () => void;
  defaultValues?: ProfessionalDetails;
}

export function ProfessionalDetailsForm({
  onSubmit,
  onPrevious,
  defaultValues = {
    yearsExperience: 0,
    height: 170,
    tShirtSize: "",
    shirtSize: "",
    previousExperience: "",
    brandsWorkedFor: "",
  },
}: ProfessionalDetailsFormProps) {
  const form = useForm<ProfessionalDetails>({
    resolver: zodResolver(professionalDetailsSchema),
    defaultValues,
  });

  const handleSaveDraft = () => {
    // Save the current form values as draft
    const currentValues = form.getValues();
    localStorage.setItem("professionalDetailsDraft", JSON.stringify(currentValues));
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all hover:shadow-lg">
      <div className="bg-gradient-to-r from-gray-50 to-white p-6 border-b border-gray-100 relative">
        {/* Title decoration */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary/60 to-purple-500/60"></div>
        
        <h2 className="text-xl font-bold text-gray-800 flex items-center">
          <span className="inline-block mr-2 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
          </span>
          Professional Details
        </h2>
        <p className="text-sm text-gray-500 mt-1 ml-7">
          Tell us about your professional experience and attributes.
        </p>
      </div>

      <div className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="yearsExperience"
                render={({ field }) => (
                  <FormItem className="space-y-2 transition-all duration-200 hover:translate-y-[-2px]">
                    <FormLabel className="text-sm font-medium text-gray-700">
                      Years of Experience
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                        </div>
                        <Input
                          className="pl-10 bg-gray-50/50 border-gray-200 focus:bg-white transition-all"
                          type="number"
                          min={0}
                          max={50}
                          {...field}
                          onChange={(e) => field.onChange(e.target.value === "" ? 0 : parseInt(e.target.value))}
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="height"
                render={({ field }) => (
                  <FormItem className="space-y-2 transition-all duration-200 hover:translate-y-[-2px]">
                    <FormLabel className="text-sm font-medium text-gray-700">
                      Height (cm)
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M8 3v18m0-11l4-4m0 0l4 4m-4-4v18"></path>
                          </svg>
                        </div>
                        <Input
                          className="pl-10 bg-gray-50/50 border-gray-200 focus:bg-white transition-all"
                          type="number"
                          min={120}
                          max={220}
                          {...field}
                          onChange={(e) => field.onChange(e.target.value === "" ? 170 : parseInt(e.target.value))}
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="tShirtSize"
                render={({ field }) => (
                  <FormItem className="space-y-2 transition-all duration-200 hover:translate-y-[-2px]">
                    <FormLabel className="text-sm font-medium text-gray-700">
                      T-Shirt Size
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400 z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                              <line x1="3" y1="6" x2="21" y2="6"></line>
                              <path d="M16 10a4 4 0 0 1-8 0"></path>
                            </svg>
                          </div>
                          <SelectTrigger className="pl-10 bg-gray-50/50 border-gray-200 focus:bg-white transition-all">
                            <SelectValue placeholder="Select your T-shirt size" />
                          </SelectTrigger>
                        </div>
                      </FormControl>
                      <SelectContent className="bg-white border border-gray-100 shadow-lg animate-in fade-in-80">
                        <SelectItem value="xs" className="hover:bg-gray-50 cursor-pointer">XS</SelectItem>
                        <SelectItem value="s" className="hover:bg-gray-50 cursor-pointer">S</SelectItem>
                        <SelectItem value="m" className="hover:bg-gray-50 cursor-pointer">M</SelectItem>
                        <SelectItem value="l" className="hover:bg-gray-50 cursor-pointer">L</SelectItem>
                        <SelectItem value="xl" className="hover:bg-gray-50 cursor-pointer">XL</SelectItem>
                        <SelectItem value="xxl" className="hover:bg-gray-50 cursor-pointer">XXL</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="shirtSize"
                render={({ field }) => (
                  <FormItem className="space-y-2 transition-all duration-200 hover:translate-y-[-2px]">
                    <FormLabel className="text-sm font-medium text-gray-700">
                      Shirt Size
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400 z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              <polygon points="12 2 19 8 19 16 12 22 5 16 5 8 12 2"></polygon>
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                          </div>
                          <SelectTrigger className="pl-10 bg-gray-50/50 border-gray-200 focus:bg-white transition-all">
                            <SelectValue placeholder="Select your shirt size" />
                          </SelectTrigger>
                        </div>
                      </FormControl>
                      <SelectContent className="bg-white border border-gray-100 shadow-lg animate-in fade-in-80">
                        <SelectItem value="xs" className="hover:bg-gray-50 cursor-pointer">XS</SelectItem>
                        <SelectItem value="s" className="hover:bg-gray-50 cursor-pointer">S</SelectItem>
                        <SelectItem value="m" className="hover:bg-gray-50 cursor-pointer">M</SelectItem>
                        <SelectItem value="l" className="hover:bg-gray-50 cursor-pointer">L</SelectItem>
                        <SelectItem value="xl" className="hover:bg-gray-50 cursor-pointer">XL</SelectItem>
                        <SelectItem value="xxl" className="hover:bg-gray-50 cursor-pointer">XXL</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="previousExperience"
              render={({ field }) => (
                <FormItem className="space-y-2 transition-all duration-200 hover:translate-y-[-2px]">
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Previous Experiences
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <div className="absolute top-3 left-3 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                      </div>
                      <Textarea
                        placeholder="Describe your previous experiences as a promoter..."
                        className="pl-10 pt-2 bg-gray-50/50 border-gray-200 focus:bg-white transition-all resize-none"
                        rows={3}
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="brandsWorkedFor"
              render={({ field }) => (
                <FormItem className="space-y-2 transition-all duration-200 hover:translate-y-[-2px]">
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Brands Worked For
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                        </svg>
                      </div>
                      <Input
                        className="pl-10 bg-gray-50/50 border-gray-200 focus:bg-white transition-all"
                        placeholder="E.g., Nike, Adidas, Samsung (comma separated)"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row justify-between pt-6 sm:pt-8 space-y-4 sm:space-y-0">
              <Button
                type="button"
                variant="outline"
                onClick={onPrevious}
                className="group relative px-4 sm:px-6 py-3 sm:py-5 text-sm transition-all duration-300 overflow-hidden border-gray-300 hover:border-purple-500/50 hover:bg-white hover:text-purple-500"
              >
                <span className="absolute inset-0 w-3 bg-purple-500/10 transition-all duration-500 ease-out group-hover:w-full"></span>
                <span className="relative flex items-center justify-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 group-hover:-translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                  Previous Step
                </span>
              </Button>
              
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleSaveDraft}
                  className="group relative px-4 sm:px-6 py-3 sm:py-5 text-sm transition-all duration-300 overflow-hidden border-gray-300 hover:border-purple-500/50 hover:bg-white hover:text-purple-500"
                >
                  <span className="absolute inset-0 w-3 bg-purple-500/10 transition-all duration-500 ease-out group-hover:w-full"></span>
                  <span className="relative flex items-center justify-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                      <polyline points="17 21 17 13 7 13 7 21"></polyline>
                      <polyline points="7 3 7 8 15 8"></polyline>
                    </svg>
                    Save as Draft
                  </span>
                </Button>
                
                <Button 
                  type="submit"
                  className="group relative px-5 sm:px-8 py-3 sm:py-5 text-sm bg-gradient-to-r from-purple-500 to-primary hover:from-primary hover:to-purple-500 transition-all duration-300 text-white shadow-md hover:shadow-lg hover:scale-[1.03] animate-shimmer"
                >
                  <span className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/0 via-purple-500/30 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-md blur"></span>
                  <span className="relative flex items-center justify-center gap-2">
                    Next Step
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
