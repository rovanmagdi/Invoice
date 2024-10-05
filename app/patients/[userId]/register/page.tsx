import PatientForm from "@/components/forms/PatientForm";
import ResgisterForm from "@/components/forms/ResgisterForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container ">
        <div className="sub-container max-w-[860px]">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="logo"
            width={1000}
            height={1000}
            className="mb-12 h-10 w-fit"
          />
          <ResgisterForm />
          <p className="copyright py-12">© 2024 CarePulse.</p>
        </div>
      </section>

      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="patient-form"
        className="side-img max-w-[390px]"
      />
    </div>
  );
}
